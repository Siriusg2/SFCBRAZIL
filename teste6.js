const data = require("./fakeData");

const checkPermissions = (req, res, next) => {
  // Check the http methods that are allowed to use this middleware
  if (
    req.method.toLowerCase() === "delete" ||
    req.method.toLowerCase() === "put"
  ) {
    //we received the id of the current session user through request headers
    const { currentsessionuserid } = req.headers;

    const user = data.find(
      //we parse the id to interger to avoid errors in the data type
      (user) => user.id === parseInt(currentsessionuserid)
    );

    if (!user) {
      return res
        .status(404)
        .send(`User with id ${currentsessionuserid} not found`);
    }
    // Check if the user has the necessary permissions to delete records

    if (user.permissions.delete !== true) {
      return res.status(403).send("Access denied");
    }
    // Check if the user has the necessary permissions to update records
    if (user.permissions.update !== true) {
      return res.status(403).send("Access denied");
    }
  }
  next();
};
module.exports = checkPermissions;
