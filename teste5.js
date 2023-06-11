const { readCounter } = require("./teste1");

module.exports = function (req, res) {
  const { name } = req.query;

  return res.send(`Usuário ${name}  foi lido ${readCounter[name]} vezes.`);
};
