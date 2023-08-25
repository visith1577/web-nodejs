const model = require('../models/friends.model')

function getFriend (req, res) {
  res.json(model)
}

function getFriendOnId (req, res) {
  const friendId = Number(req.params.friendId)
  const friend = model[friendId]
  if (friend) {
    res.status(200).json(friend)
  } else {
    res.status(404).json({
      error: 'Friend not found'
    })
  }
}

function postFriend (req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: 'Missing friend name'
    })
  }
  const friend = {
    id: req.body.id || model.length,
    name: req.body.name
  }

  model.push(friend)

  res.json(friend)
}

module.exports = {
  getFriend,
  postFriend,
  getFriendOnId
}
