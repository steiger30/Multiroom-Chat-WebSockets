const app = require("./config/server.js")

const port = 3000;


app.listen(port, () => {
  console.log(`listening http://localhost:${port} `);
})