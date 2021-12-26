const router = require("express").Router()

router.get("/", (req, res) => {
    res.send("GET /part-orders")
})

router.get("/:id", (req, res) => {
    let id = req.params.id
    res.send(`GET /part-orders/${id}`)
})

router.post("/", (req, res) => {
    res.send("POST /part-orders")
})

router.put("/:id", (req, res) => {
    let id = req.params.id
    res.send(`PUT /part-orders/${id}`)
})

router.delete("/", (req, res) => {
    let id = req.params.id
    res.send(`DELETE /part-orders/${id}`)
})

module.exports = router;