const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const users = [{
        id: 0,
        name: "Fara",
        email: 'mrmozammal@gmail.com'
    },
    {
        id: 1,
        name: "Mozammal",
        email: 'mrmozammal@gmail.com'
    },
    {
        id: 2,
        name: "Aklima",
        email: 'mrmozammal@gmail.com'
    },
    {
        id: 3,
        name: "Sara",
        email: 'mrmozammal@gmail.com'
    }
]

app.get('/', (req, res) => {
    res.send("Second node changed");
})

app.get('/users', (req, res) => {
    // res.send({id: 1, name: "mozammal", email: 'mrmozammal@gmail.com'})
    const search = req.query.search;
    // use query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    } else {
        res.send(users);
    }
})

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log("Ok", req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
})

// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
    // console.log(req.params.id);
})

app.get('/fruits/mango/banana', (req, res) => {
    res.send('This mango is so sweet.');
})

app.get('/fruits', (req, res) => {
    res.send(["Mango","Banana","Apple"])
})

app.listen(port, () => {
    console.log("port", port);
});