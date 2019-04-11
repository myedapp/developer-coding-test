const users = require("./users.json")
const questPathways = require("./quest_pathways.json")

module.exports = () => {
  return {
    users,
    "quest-pathways": questPathways
  }
}
