const express = require('express');
const { connectToDb, getDb } = require('./db')
const bcrypt = require('bcryptjs')
const session = require("express-session")
var path = require('path')

const app = express()
app.set('view engine', 'ejs')
let db

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded( {extended: true} ))
app.use(express.json())

app.use(
  session({
    secret: "secret-key", 
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, httpOnly: true, maxAge: 1000 * 60 * 30 } // 30 min
  })
)

function isAuthenticated(req, res, next) {
  if (req.session.userId) {
    return next();
  }
  res.status(401).json({ message: "Unauthorized" });
}


connectToDb( (err) => {
  if(!err) {
    app.listen(3000, () => {
    console.log('okay') 
    })
    db = getDb()
  }
})

app.get('/index', (req, res) => 
{ 
  res.render('index')    
})

app.get('/login', (req, res) => 
{
  res.render('login')    
})

app.post('/login',async  (req, res) => {
  const {username, password} = req.body
  const user = await db.collection('users')
  .findOne( {"username": username} )
  console.log("start")
  let hashedpassword = await bcrypt.hash(user.password, 9)
  console.log("end")
  if(!user || !bcrypt.compareSync(password, hashedpassword))
    {
      return res.status(401).json({ message: "Invalid credentials"})
    }
    req.session.userId = user.id;
    res.json({ message: "Login successful" })
  res.end()
})

app.post('/signup', async (req, res) => {
  const {username, password} = req.body
  const user = await db.collection('users')
  .findOne( {"username": username} )
  if(!user)
  {
    const newUser = { 'username': username, 'usertype': 'regular' ,'password': password,  }
    db.collection('users')
    .insertOne(newUser)
    .then( () => {
      console.log(`New User Added`)
    })
    .catch(error => {
      console.error(`Error While Adding User: ${error}`)
    })
  }
  res.redirect('../login')
})

app.get('/users', (req, res) => {
  let users = []
  db.collection('users')
  .find()
  .forEach(user => { users.push(user) })
  .then( () => res.status(200).json(users))
  .catch( () => res.status(500).json( {error: 'Chud gaye guru'} ) )
})

