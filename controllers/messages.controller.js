function getMessages(req, res) {
    res.send('<ul><li>Hello Aryabhatta!</li></ul>');

}

function postMessages(req, res) {
    res.send('Updating messages...');

}

module.exports = {
    getMessages,
    postMessages,
};