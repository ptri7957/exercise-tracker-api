const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = async (req, res, next) => {
    try {
        const token = req.header("x-auth-token");

        if(!token){
            return res.status(400).json({
                msg: "Token not found"
            });
        }

        const decoded = jwt.verify(
            token,
            config.get("jwtSecret")
        )

        req.user = decoded.user;

        next();
    } catch (error) {
        return res.status(400).json({
            msg: "Token not valid"
        });
    }
}