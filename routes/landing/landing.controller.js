module.exports = {
  landingPage: (req, res) => {
    // res.json({ message: "Hello" });
    res.redirect("http://localhost:3006/");
    console.log("REQ ", landing);
  },
};
