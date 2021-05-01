const router = require('express').router();
const { Post } = require('../../models');
const withAuth = require('')

router.post('/create', withAuth, async (req, res) => {
    try {
        const postData = await Post.create(req.body);
        if (!postData) {
            res.status(400).json({message: "There was an issue creating your post!"})
            return;
        }
        res.status(200).json(postData);
    } catch (err) {
        res.status(400).json(err);
    }
})


router.delete('/delete', withAuth, async (req, res) => {
    try {
        const postData = await Post.create(req.body);
        if (!postData) {
            res.status(400).json({message: "There was an issue creating your post!"})
            return;
        }
        res.status(200).json(postData);
    } catch (err) {
        res.status(400).json(err);
    }
})