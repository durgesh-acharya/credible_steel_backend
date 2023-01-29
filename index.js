const express = require('express');
const app = express();
const router = express.Router();

//define port
const port = process.env.PORT || 8000;

//routes
const userRouter = require('./routes/user');


//use routes
app.use(userRouter);

const bodyParser = require('body-parser');

//basic app
app.get("/",(req,res) => {
    res.send("Credible Steel Apps");
});

app.listen(port,()=>{
console.log(`App listening to port no ${port}`);
});