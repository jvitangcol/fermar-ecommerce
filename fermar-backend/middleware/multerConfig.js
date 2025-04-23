import multer from "multer";
import path from "path";
import fs from "fs";

const tempDir = path.join("uploads", "temp");
fs.mkdirSync(tempDir, { recursive: true });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, tempDir); // save files here
  },

  filename: function (req, file, cb) {
    const safeName =
      new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname;
    cb(null, safeName);
  },
});

// file validation
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    // prevent to upload
    cb({ message: "Unsupported file format" }, false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

export default upload;
