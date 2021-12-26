const express = require("express")
const bodyParser = require('body-parser')

const app = express()

//config
require("dotenv").config()
const PORT = process.env.PORT

//Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use("/api/employees", require("./controllers/employees"))

//anything that doesn't match - return Page not found
app.get("*", (req, res) => {
    res.send("Page Not Found")
})

app.listen(PORT, () => {
    console.log("employees service listening on port", PORT)
})