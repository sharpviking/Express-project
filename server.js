const express = require('express');

const app = express();

const PORT = 3000;

const friends = [
    {
        id: 0,
        name: 'barbarik'
    },
    {
        id: 1,
        name: 'vikramadithya'
    },
    {
        id: 2,
        name: 'Ajaadsatru'
    }
];

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
});


app.use(express.json());


app.post('/friends', (req, res) => {
    if (!req.body.name) {
        return res.status(400).json({
            error: "Missing friend name"
        });
    }


    const newFriend = {
        name: req.body.name,
        id: friends.length
    };
    friends.push(newFriend);

    res.json(newFriend);
})

app.get('/friends', (req, res) => {
    res.json(friends);

});

app.get('/friends/:friendId', (req, res) => {
    const friendId = Number(req.params.friendId);
    const friend = friends[friendId];
    if (friend) {
        res.json(friend);
    } else {
        res.status(404).json({
            error: "Friends does not Exit"
        });
    }
})

app.get('/messages', (req, res) => {
    res.send('<ul><li>Hello Aryabhatta!</li></ul>');

})
app.post('/messages', (req, res) => {
    res.send('Updating messages...');

})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}...`)
}); 