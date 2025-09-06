const express = require('express');
const { connectToDb, getDb } = require('./db')
const fs = require('fs')
var path = require('path')

const app = express()
app.set('view engine', 'ejs');
let db

app.use(express.static(path.join(__dirname, 'public')))



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


app.get('/users', (req, res) => {
  let users = []
  db.collection('users')
  .find()
  .forEach(user => { users.push(user) })
  .then( () => res.status(200).json(users))
  .catch( () => res.status(500).json( {error: 'Chud gaye guru'} ) )
})