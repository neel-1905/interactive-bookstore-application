const jwt = require("jsonwebtoken");

const verify = async (req, res, next) => {
  const token = await req.header("token");

  if (!token) {
    return res.status(401).json({ message: "You are not authorized" });
  }

  const secretkey = process.env.SECRET;

  try {
    const verified = jwt.verify(token, secretkey);
    req.user = verified;
    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = verify;
