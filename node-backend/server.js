const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get("/api/node-timestamp", (req, res) => {
    const timestamp = new Date().toISOString();
    res.json({ timestamp });
});

const port = process.env.PORT || 8001;

app.listen(port, () => {
    console.log("Node server running on port {port}");
});
