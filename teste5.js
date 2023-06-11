const readCounter = require("./readCounter");

module.exports = function (req, res) {
  const { name } = req.query;

  return res.send(`Usuário ${name}  foi lido ${readCounter[name]} vezes.`);
};
