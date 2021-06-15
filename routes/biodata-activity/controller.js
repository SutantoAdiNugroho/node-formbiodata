const { PersonAcct, PersonBio } = require("../../models");
const { hashPassword } = require("../../helpers");
const objectId = require("mongodb").ObjectID;

let objErr = {};

module.exports = {
  drvPickupOrder: async (req, res) => {
    try {
      const findEmail = await PersonAcct.findOne({ email: req.body.email });

      if (findEmail !== null) {
        objErr.status = 400;
        objErr.message = "Email already exist";
        return handleError(req, res, objErr);
      }

      const hasPass = await hashPassword(req.body.password);
      const resultAcct = await PersonAcct.create({
        ...req.body,
        password: hasPass,
      });
      const { _id } = resultAcct;

      const resultBio = await PersonBio.create({ ...req.body, acctId: _id });

      res.status(201).json({
        status: 201,
        message: `Successfully create data`,
      });
    } catch (error) {
      console.error("Error occured with message :", error);

      objErr.status = 500;
      objErr.message = error.message;
      return handleError(req, res, objErr);
    }
  },
};

const handleError = (req, res, objErr) => {
  let timestamp = new Date();

  res
    .status(objErr.status)
    .json({
      timestamp: timestamp,
      status: objErr.status,
      message: objErr.message,
      path: req.originalUrl,
    })
    .end();
};
