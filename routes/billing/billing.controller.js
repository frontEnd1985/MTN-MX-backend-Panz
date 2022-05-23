module.exports = {
  postBilling: (req, res) => {
    console.log("REQ BILLING ", req.body);
    console.log("BILLING REQ ", req.body.result[0].contentData);
  },
};
