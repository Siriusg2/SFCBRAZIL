const data = require("./fakeData");

module.exports = function (req, res) {
  const { name } = req.query;

  /*we verify 
  that databank have registries to prevent
   a error server through ternarie operator in the 
   find method(this verify that there are indexes that are diferent the null )  */

  const savedUser = data.find((user) => user?.name === name);

  //if theren't are any registry that matches with the query, then we send status 404 not found
  if (!savedUser) return res.status(404).send(`user ${name} not found`);

  /*else we change the index of the databank that matches with the query with the reserved word null
  and send status code 200 to let the user know that the registry was deteleted successfully
  */
  const indexOfUser = data.indexOf(savedUser);
  data[indexOfUser] = null;

  return res.status(200).send("success");
};
