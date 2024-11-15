const jwt = require('jsonwebtoken');
require('dotenv').config()


function authMiddleware(req,res,next) {
    const authHeader = req.header.Authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({});
    }
    const token = authToken.split('')[1]
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);  // If valid, it returns the decoded payload
        console.log('Decoded:', decoded);  // Here, decoded would be the payload of the token
        req.userId = decoded.userId;
        next()
    } catch (err) {
        console.error('Token is invalid or expired:', err);
        res.status(403).json({})
    }

}

module.exports = authMiddleware
