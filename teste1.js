const data = require("./fakeData");

const getUser = (req, res, next) => {
  let { name } = req.query;

  const user = data.find((user) => user.name === name);

  return user
    ? res.status(200).send(user)
    : res.status(404).send(`user ${name} not found`);
};

const getUsers = (req, res, next) => {
  return res.status(200).send(data);
};

module.exports = {
  getUser,
  getUsers,
};
