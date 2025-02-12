const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'src/foto_siswa');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];

    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(new Error('Only .jpeg, .jpg and .png files are allowed!'), false);
      }
};

const upload = multer({ 
    storage: storage,
    limits: { fileSize: 512 * 1024 }, 
  });

module.exports = upload; 