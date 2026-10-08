const express = require('express');

const app = express();

app.use(express.json());

const PORT = 4255;

app.listen(PORT, () => {console.log("server is wotking")});

app.get('/hello', (req, res) => {
    res.send("hello world")
});

const users = [];

app.post("/user", (req, res) => {
    const user = req.body;

    const newuser = {
        name:user
    };

    users.push(newuser);

    return res.json({
        data: newuser
    });

})

app.get("/users", (req, res) => {
    return res.json(
        {users}

    )
})