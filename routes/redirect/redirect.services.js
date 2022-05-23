const pool = require("../../database");

module.exports = {
  checkToken: (callback) => {
    const getToken = process.env.getToken;
    console.log("getToken ", getToken);
    pool.query(`${getToken}`, [], (err, result) => {
      if (err) return callback(err);
      return callback("", result);
    });
  },
  updateToken: (token, callback) => {
    console.log(
      "process.env.updateAccessToken ",
      process.env.updateAccessToken
    );
    const updateTokenQuery = process.env.updateAccessToken.replace(
      "<ACCESSTOKEN>",
      token
    );
    console.log("updateTokenQuery", updateTokenQuery);
    pool.query(`${updateTokenQuery}`, [], (err, result) => {
      if (err) return callback(err);
      return callback("", "Record Updated");
    });
  },
};
