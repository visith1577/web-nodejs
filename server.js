const express = require('express')
const path = require('path')

const friendsRouter = require('./routers/friends.router')
const messagesRouter = require('./routers/messages.router')

const app = express()

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

const PORT = 3000

app.use((req, res, next) => {
  const start = Date.now()
  console.log(`${req.method} ${req.url}`)
  next()
  const delta = Date.now() - start
  console.log(`${req.method} ${req.url} ${delta}ms`)
})

app.use('/site', express.static(path.join(__dirname, 'public')))
app.use(express.json())

app.get('/', (req, res) => {
  res.render('index.hbs', {
    title: 'hbs file rendering',
    caption: 'my pic'
  })
})
app.use('/friends', friendsRouter)
app.use('/messages', messagesRouter)

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`)
  console.log(`http://localhost:${PORT}`)
})
