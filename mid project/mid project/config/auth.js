const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

// تحميل المتغيرات من ملف .env
dotenv.config();

// middleware للتحقق من وجود JWT وتحقق منه
const protect = (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }

    req.user = decoded; // إضافة البيانات إلى `req.user`
    next(); // متابعة الطلب
  });
};

module.exports = protect;

