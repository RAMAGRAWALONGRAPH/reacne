const mongoose = require("mongoose");
const topicSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.models.Topic || mongoose.model("Topic", topicSchema);
