const data = require("./fakeData");

module.exports = function (req, res) {
  //destructuring each parameter of the request body to be sent to fake data
  const { name, job } = req.body;

  //valitations for each parameter
  //verify type of the each parameter
  if (typeof name !== "string")
    return res.status(400).send("The name of the new user must be a string");
  if (typeof job !== "string")
    return res.status(400).send("The job of the new user must be a string");

  //verify that the parameter are a string with characters, and not empty spaces
  if (!name.trim())
    return res.status(400).send("You must provide a name for the new user");
  if (!job.trim())
    return res.status(400).send("You must provide a job for the new user");

  /*last id finder*/

  const lastId = data.sort((a, b) => a.id - b.id).at(-1);

  /*once each parameter pass every valitation, 
  trough the object litertal, we create a new object to
   add to the bank data*/

  const newUser = {
    //we add a new id using the last id finder method implementation
    id: lastId.id + 1,
    name,
    job,
  };

  data.push(newUser);

  return res.status(201).send(newUser);
};
