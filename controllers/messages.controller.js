const path = require('path');

function getMessages(req, res) {
    res.sendFile(path.join(__dirname, '..', 'public', 'images', 'picture.jpg'));


}

function postMessages(req, res) {
    res.send('Updating messages...');

}

module.exports = {
    getMessages,
    postMessages,
};