const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

// app.use(express.json());
app.use(bodyParser.json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));
app.get('/test', (req, res) => {
    res.json("test-ok");
});
app.post('/register', (req, res) => {
    const {name, email, password} = req.body;
    res.json({name: name, email: email, password: password});
})

app.listen(4321);