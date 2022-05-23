const { pool_57: pool } = require("../../database");

module.exports = {
  getGames: (callback) => {
    const getGames = process.env.getGames;
    pool.query(`${getGames}`, [], (err, result) => {
      if (err) return callback(err);

      const getCat = process.env.getCat;
      pool.query(`${getCat}`, [], (err, category) => {
        if (err) return callback(err);
        return callback(err, { games: result, category: category });
      });
    });
  },
  fetchbyId: (id, callback) => {
    const getGamesById = process.env.getGamesById.replace("<ID>", id);

    pool.query(`${getGamesById}`, [], (err, result) => {
      if (err) return callback(err);

      return callback("", result);
    });
  },
  fetchOthers: (id, cat_id, callback) => {
    const fetchOthersGames = process.env.fetchOthersGames
      .replaceAll("<ID>", id)
      .replace("<CATID>", cat_id);
    console.log("fetchOthersGames ", fetchOthersGames);
    pool.query(`${fetchOthersGames}`, [], (err, result) => {
      if (err) return callback(err);
      return callback("", result);
    });
  },
  fetchCategoryId: (catId, callback) => {
    const fetchCategory = process.env.fetchCategory.replace("<CATID>", catId);
    console.log("fetchCategory ", fetchCategory);
    pool.query(`${fetchCategory}`, [], (err, result) => {
      if (err) return callback(err);
      return callback("", result);
    });
  },
};
