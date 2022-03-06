const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
let allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Headers', "*");
  next();
}
app.use(allowCrossDomain);

module.exports = (client) => {
    require("./routes/router")(app, client)
}

app.listen(2023, () => console.log(`[API] Servidor Web rodando na porta 2023`));