const jwt = require("jsonwebtoken");

const ensureAuthnticated = (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth) {
    return res
      .status(403)
      .json({ message: "Unauthorized, JWT token is require" });
  }

  try {
    const decode = jwt.verify(auth, process.env.JWT_SECRET);
    req.user = decode;
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Unauthorized, JWT token wrong or expired" });
  }
};

module.exports = ensureAuthnticated;
