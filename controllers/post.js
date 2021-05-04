const router = require('express').Router();
const { User, Post, Category } = require('../models');
const withAuth = require('../utils/auth');

router.get('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id);
        if (!postData) {
            res.status(400).json({ message: "There was no post found with this id!"});
            return;
        }
        
        const post = postData.get({ plain: true });

        res.render('post', {post, logged_in: req.session.logged_in, user_id: req.session.user_id});    
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
