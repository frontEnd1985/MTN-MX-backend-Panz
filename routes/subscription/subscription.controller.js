const {
  checkUser,
  subUser,
  updateSubTable,
  unsubUser,
} = require("./subscription.services");

module.exports = {
  subscriptionQuery: (req, res) => {
    let serviceName = "";
    // console.log("SUBSCRIPTION", req.body);
    // console.log("SUBSCRIPTION==>", req.body.result[0].contentData);
    const {
      status,
      name,
      operatorName,
      country,
      serviceId,
      contentName,
      msisdn: ani,
      subscriptionId,
      operatorTimestamp,
    } = req.body.result[0].contentData;
    console.log(req.body.result[0].contentData);

    if (serviceId == process.env.SERVICE_ID_gameofyy)
      serviceName = process.env.SERVICE_NAME_gameofyy;
    else serviceName = process.env.SERVICE_NAME_igplpro;

    checkUser(ani, serviceName, (err, result) => {
      if (err) res.status(400).send(`Bad Request ${err}`);

      console.log("Uset status ", result);

      if (result.length < 1)
        subUser(
          status,
          name,
          operatorName,
          country,
          serviceId,
          contentName,
          ani,
          subscriptionId,
          operatorTimestamp,
          serviceName,
          (err, cb) => {
            if (err)
              return res
                .status(400)
                .send(`Bad Request or some thing went wrong ${err}`);

            return res.send("Success");
          }
        );
      else if (result.length > 0 && (status == "Active" || status == "Grace"))
        updateSubTable(status, ani, serviceName, (err, result) => {
          if (err)
            return res
              .status(400)
              .send(`Bad Request or some thing went wrong ${err}`);

          return res.send("Success");
        });
      else if (
        result.length > 0 &&
        (status == "CANCELLED" || status == "SUSPENDED")
      ) {
        console.log("CANCELLED");
        unsubUser(ani, serviceName, status, (err, data) => {
          if (err)
            return res
              .status(400)
              .send(`Bad Request or some thing went wrong ${err}`);

          return res.send("Success");
        });
      } else
        updateSubTable(status, ani, serviceName, (err, result) => {
          if (err)
            return res
              .status(400)
              .send(`Bad Request or some thing went wrong ${err}`);

          return res.send("Success");
        });
    });
  },
};
