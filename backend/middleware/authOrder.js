import jwt from "jsonwebtoken";

const authMiddleWare = async (req, res, next) => {
 

  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.json({ success: false, message: "Not authorized. Login again." });
  }

  const token = authHeader.split(" ")[1];

  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    console.log(token_decode)
    req.body.userId = token_decode.id;
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export default authMiddleWare;
