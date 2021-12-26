const router = require("express").Router()

router.get("/", (req, res) => {
    res.send("GET /employees")
})

router.get("/:id", (req, res) => {
    let id = req.params.id
    res.send(`GET /employees/${id}`)
})

router.post("/", (req, res) => {
    res.send("POST /employees")
})

router.put("/:id", (req, res) => {
    let id = req.params.id
    res.send(`PUT /employees/${id}`)
})

router.delete("/", (req, res) => {
    let id = req.params.id
    res.send(`DELETE /employees/${id}`)
})

module.exports = router;