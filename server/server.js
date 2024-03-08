const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
// app.use(express.json({limit: '50mb'}))
const port = 5000;

// Create a new SQLite database instance
const db = new sqlite3.Database('server.db');
db.run('CREATE TABLE IF NOT EXISTS user(name TEXT NOT NULL, password TEXT NOT NULL)');
db.run('CREATE TABLE IF NOT EXISTS card(id INTEGER PRIMARY KEY AUTOINCREMENT, type TEXT NOT NULL, head TEXT NOT NULL, subtext TEXT NOT NULL, link TEXT NOT NULL, image BLOB NOT NULL)');


// Define routes to get user data
app.get('/get/userdata', (req, res) => {
  // Query the database and send the data as a response
  db.all('SELECT * FROM user', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.send(rows);
    }
  });
});


app.use(express.json({limit: '50mb'}));
app.post('/post/newcard', (req, res) => {
  const  cardData = { type, image, heading, subText, link } = req.body
  if (req == null){
    res.status(500).send('Internal no requist Error');
    return 
  }
  // Perform the database operation
  db.run('INSERT INTO card(type, head, subtext, link, image) VALUES (?, ?, ?, ?, ?)', [type, heading, subText, link, image], (err) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.sendStatus(200);
    }
  });
});

app.get('/get/projects', (req, res) => {
  db.all('SELECT * FROM card', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.send(rows);
    }
  });
})





// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});