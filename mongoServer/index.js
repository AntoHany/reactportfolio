const express = require ('express');
const mongoose = require ('mongoose');
const router = require('./routers/router.js');
var cors = require('cors');

const port = 5000 || process.env.PORT;
const app = express();

app.use(express.json({ limit: "1000mb" }));
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.send("<h1 style='color: #168369'>HI ADMIN!</h1>");
});


mongoose.connect('mongodb+srv://antonhany:k0zR9mGf5QKRXLqC@reactportfoliodb.v8x4wbo.mongodb.net/?retryWrites=true&w=majority&appName=reactPortfoliodb')
.then(()=>{
  console.log('Connected Succsesfuly To DataBase!');
  app.use(router);
  app.listen(port, ()=>{
    console.log(`Server run at PORT ${port}!`);
  })
})
.catch((err)=>{
  console.log(`Can NOT Connecte To DataBase! => ${err}`);
});

