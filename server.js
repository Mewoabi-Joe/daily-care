const express = require("express")
// eslint-disable-next-line no-unused-vars
// const bodyParser = require('body-parser');
const path = require("path")
const app = express()
const port = process.env.PORT || 3000

app.use(express.static(path.join("build")))
app.use(express.static(__dirname + "/"))

// This route serves the React app
app.get("/", (req, res) => {
  console.log("starting")
  res.sendFile(path.join("build", "index.html"))
})

app.listen(port, () => console.log(`Server listening on port ${port}`))
