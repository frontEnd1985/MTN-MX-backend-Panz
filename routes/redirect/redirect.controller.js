const axios = require("axios");
var base64 = require("base-64");
const { response } = require("../../app");
const { checkToken, updateToken } = require("./redirect.services");

module.exports = {
  getAccessToken: (req, res) => {
    const uuid = Math.floor(Math.random() * 1000000000);
    const url = `https://xcis.mobixone.co.za:9001/api/v1/web/ci/z5Tn-ouLO-YAnk-Ps90-QHEs-DMKS-zEIp-SgQC/bnrev-panzcon/mtn-za/ZA/subscribe/M7KSpPKjwr2oFvzRiFLSMry4/bnrev-panzcon-gameofyy/${uuid}/EMPTY/EMPTY/`;
    checkToken(async (err, result) => {
      if (err)
        return res
          .status(400)
          .json({ result: 0, message: "Something went wrong ", err });

      console.log("Token ", result);
      if (result.length <= 0) {
        const response = await axios.post(
          "https://xcis.mobixone.co.za:8585/oauth/token?username=bnrev-panzcon-uid&password=xcD4tcBcLS&grant_type=password&scope=PRODUCTION",
          null,
          {
            headers: {
              // ContentType: "application/x-www-form-urlencoded",
              Authorization: `Basic Ym5yZXYtcGFuemNvbi1jaWQ6MTUzMUZFMTdCRDg0QTIyN0ExQTgyMzY2REMzQjk=`,
            },
          }
        );
        console.log("response ", response.data);
        updateToken(response.data.access_token, (err, result) => {
          if (err)
            return res
              .status(400)
              .json({ result: 0, message: "Some thing went wrong ", err });

          // res.json({ result: 1, accessToken: response.data.access_token });
          res.redirect(url);
        });
      } else res.redirect(url);
    });
  },
  redirectUser: (req, res) => {
    console.log("REQ QYERYYY", req.query);
    res.redirect("/redirect");
  },
};

// Basic Ym5yZXYtcGFuemNvbi1jaWQ6MTUzMUZFMTdCRDg0QTIyN0ExQTgyMzY2REMzQjk=
