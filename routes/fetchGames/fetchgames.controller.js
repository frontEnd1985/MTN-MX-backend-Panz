const {
  getGames,
  fetchbyId,
  fetchOthers,
  fetchCategoryId,
} = require("./fetchgames.services");

module.exports = {
  fetchGames: (req, res) => {
    getGames((err, result) => {
      if (err)
        return res
          .status(400)
          .json({ result: 0, message: "Some thing went wrong ", err });

      res.send(result);
    });
  },
  fetchGamesById: (req, res) => {
    const { id } = req.params;
    console.log("ID ", id);
    fetchbyId(id, (err, result) => {
      if (err)
        res
          .status(400)
          .json({ result: 0, message: "Some thing went wrong ", err });
      // console.log(result);
      res.json({ result: 1, message: result[0] });
    });
  },
  fetchGamesByOthers: (req, res) => {
    const { id } = req.params;
    console.log("ID ", id);
    fetchCategoryId(id, (err, result) => {
      if (err)
        res
          .status(400)
          .json({ result: 0, message: "Some thing went wrong ", err });

      // console.log(result);

      fetchOthers(id, result[0].cat_id, (err, result) => {
        console.log(result);
        if (err)
          return res
            .status(400)
            .json({ result: 0, message: "Some thing went wrong ", err });
        return res.json({ result: result.length, message: result });
      });
    });
    // fetchOthers(id, (err, result) => {
    //   if (err)
    //     res
    //       .status(400)
    //       .json({ result: 0, message: "Some thing went wrong ", err });
    //   res.json({ result: 1, message: result[0] });
    // });
  },
};
