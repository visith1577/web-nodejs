const express = require('express');
const friendController = require('../controllers/friends.controller');

const friendsRouter = express.Router()

friendsRouter.get('/', friendController.getFriend)
friendsRouter.get('/:friendId', friendController.getFriendOnId)
friendsRouter.post('/', friendController.postFriend)

module.exports = friendsRouter