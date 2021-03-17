const express = require('express');
const router = express.Router();

// Post Model
const Posts = require('../../Models/Posts');

const Player = require('../../Models/PlayerData');


// @routes GET api/posts
// @desc Get all posts
router.get('/:id', async (req,res)=>{
	try{
		const posts = await Player.findById(req.params.id);
		if(!posts) throw Error('No items');
		res.status(200).json(posts);

	}
	catch(err){
		res.status(400).json({msg : err});

	}

});

// @routes POSTS api/posts
// @desc Create a post
router.post('/', async (req, res) =>{
	const newPost = new Player(req.body);

	try{
		const post = await newPost.save();
		if(!post) throw Error('Saving Failed');

		res.status(200).json(post);
	}
	catch(err){
		res.status(400).json({msg: err});

	}

});


// @routes DELETE api/posts
// @desc Delete a post
router.delete('/:id', async (req,res)=>{
	try{
		const post = await Player.findByIdAndDelete(req.params.id);
		if(!post) throw Error('No Item found');
		res.status(200).json({success:true});

	}
	catch(err){
		res.status(400).json({msg : err});

	}

});

// @routes UPDATE api/posts
// @desc Updates a post
router.patch('/:id', async (req,res)=>{
	try{
		const post = await Player.findByIdAndUpdate(req.params.id, req.body);
		if(!post) throw Error('No Item found');
		res.status(200).json({success:true});

	}
	catch(err){
		res.status(400).json({msg : err});

	}

});

module.exports = router;

