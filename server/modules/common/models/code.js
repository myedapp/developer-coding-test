const mongoose = require('mongoose');

const { Schema } = mongoose;

const codeSchema = new Schema({
  code: { type: String },
  data: { type: Schema.Types.Mixed },
  expireAt: { type: Date },
});

const Code = mongoose.model('codes', codeSchema);

module.exports = Code;

