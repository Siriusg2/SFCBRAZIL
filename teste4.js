const data = require("./fakeData");

module.exports = function (req, res) {
  //destructuring each parameter of the request body to be sent to fake data
  const { id } = req.query;
  const { name, job, permissions } = req.body;

  const reg = data.find((d) => id === id);
  if (!reg)
    return res
      .status(404)
      .send({ message: `no user found with that id ${id}` });

  //valitations for each parameter
  //verify type of the each parameter
  if (typeof name !== "string")
    return res.status(400).send("The new name for the user must be a string");
  if (typeof job !== "string")
    return res.status(400).send("The new job for the  user must be a string");

  //verify that the parameter are a string with characters, and not empty spaces
  if (!name.trim())
    return res.status(400).send("You must provide a new name for the  user");
  if (!job.trim())
    return res.status(400).send("You must provide a new job for the  user");
  reg.name = name;
  reg.job = job;
  reg.permissions = permissions;

  return res.status(200).send(reg);
};
