const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URI } = require('./config');

// Routes
const postsRouter = require('./Routes/API/Posts');

const app = express();


// Body Parser Middleware
app.use(express.json());


// Connects to the database
mongoose.connect(MONGO_URI,{
	useNewUrlParser:true,
	useUnifiedTopology:true
})
	.then(() => console.log('MongoDB Connected'))
	.catch(err => console.log(err));



// Use Routes
app.use('/API/Posts', postsRouter);




app.get('/', (req, res)=>{
	res.send('Hello World');

});


const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
	console.log('Server run at port $(PORT)')
});