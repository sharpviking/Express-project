const express = require('express');
const path = require('path');


const friendsRouter = require('./routes/friends.router');

const messagesRouter = require('./routes/messages.router');

const app = express();

app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'views'));

const PORT = 3000;



app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use('/site', express.static(path.join(__dirname, 'public')));
app.use(express.json());

// const friendsRouter = express.Router();

// const messagesRouter = express.Router();



app.get('/', (req, res) => {
    res.render('index', {
        title: "Yeah, I am back",
        caption: "let's go for one on one!",
    })
});
app.use('/friends', friendsRouter);

app.use('/messages', messagesRouter);




app.listen(PORT, () => {
    console.log(`listening on port ${PORT}...`)
}); 