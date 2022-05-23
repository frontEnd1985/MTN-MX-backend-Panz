const { pool } = require("../../database");

module.exports = {
  checkUser: (ani, servicename, callback) => {
    const checkAni = process.env.checkAni
      .replace("<ANI>", ani)
      .replace("<SERVICENAME>", servicename);

    console.log("checkAni ", checkAni);

    pool.query(`${checkAni}`, [], (err, result) => {
      if (err) return callback(err);

      return callback("", result);
    });
  },
  subUser: (
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
    callback
  ) => {
    const insertIntoSub = process.env.insertIntoSub
      .replace("<ANI>", ani)
      .replace("<M_ACT>", "WEB")
      .replace("<STATUS>", status)
      .replace("<SERVICEID>", serviceId)
      .replace("<SUBSCRIPTIONID>", subscriptionId)
      .replace("<CONTANTNAME>", contentName)
      .replace("<OPERATORNAME>", operatorName)
      .replace("<COUNTRY>", country)
      .replace("<SERVICENAME>", serviceName);

    console.log("insertIntoSub ", insertIntoSub);

    pool.query(`${insertIntoSub}`, [], (err, result) => {
      if (err) return callback(err);

      return callback("", "Success");
    });
  },

  updateSubTable: (status, ani, serviceName, callback) => {
    const updateTblSubStatus = process.env.updateTblSubStatus
      .replace("<ANI>", ani)
      .replace("<SERVICENAME>", serviceName)
      .replace("<STATUS>", status);

    pool.query(`${updateTblSubStatus}`, [], (err, result) => {
      if (err) return callback(err);

      return callback("", "Success");
    });
  },
  unsubUser: (ani, serviceName, status, callback) => {
    try {
      console.log("Canceelling");
      const updateUnsubTblSub = process.env.updateUnsubTblSub
        .replace("<STATUS>", status)
        .replace("<ANI>", ani)
        .replace("<SERVICENAME>", serviceName)
        .replace("<MDEACT>", "SDP");

      const insertTblUnsub = process.env.insertTblUnsub
        .replace("<ANI>", ani)
        .replace("<SERVICENAME>", serviceName);

      const deleteTblSub = process.env.deleteTblSub
        .replace("<ANI>", ani)
        .replace("<SERVICENAME>", serviceName);

      console.log("updateUnsubTblSub", updateUnsubTblSub);
      console.log("insertTblUnsub", insertTblUnsub);
      console.log("deleteTblSub", deleteTblSub);

      pool.query(`${updateUnsubTblSub}`, (err, result) => {
        if (err) return callback(err);
        pool.query(`${insertTblUnsub}`, (err, result) => {
          if (err) return callback(err);

          pool.query(`${deleteTblSub}`, (err, result) => {
            if (err) return callback(err);
            return callback("", "success");
          });
        });
      });
    } catch (err) {
      return callback(err);
    }
  },
};

// '<ANI>',now(),'<M_ACT>','<STATUS>','<SERVICEID>','<SUBSCRIPTIONID>','<CONTANTNAME>','<OPERATORNAME>','<COUNTRY>','<SERVICENAME>');
