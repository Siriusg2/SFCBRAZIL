const data = require("./fakeData");
// Variable to carry the reading counter
const readCounter = {};
const getUser = (req, res, next) => {
  let { name } = req.query;

  const user = data.find((user) => user.name === name);

  if (user) {
    // Check if the counter already exists for the given name
    if (!readCounter[name]) {
      readCounter[name] = 0;
    }
    // Increment the reading counter
    readCounter[name]++;
    return res.status(200).send(user);
  } else {
    return res.status(404).send(`user ${name} not found`);
  }
};
const getUsers = (req, res, next) => {
  return res.status(200).send(data);
};

module.exports = {
  getUser,
  getUsers,
  readCounter,
};
