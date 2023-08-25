const path = require('path')

function getMessage(req, res) {
    res.render('message', {
        friend: 'Dawn',
        title: 'message to friend'
    })
    // res.sendFile(path.join(__dirname, '..', 'public', 'me.jpg'))
    // res.send('<ul><li> Hello Visith </li></ul>')
}

function postMessage(req, res) {
    res.send('updating messages')
}

module.exports = {
    getMessage,
    postMessage
}