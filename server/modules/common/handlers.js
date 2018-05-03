const s3 = require('./s3');

// get upload params to support uploading file on front end
async function getUploadParams(req, res, next) {
  return res.json(s3.getUploadParams());
}

module.exports = {
  getUploadParams,
};
