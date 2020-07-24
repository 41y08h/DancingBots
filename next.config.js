const path = require("path");
// const withOffline = require("next-offline");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
