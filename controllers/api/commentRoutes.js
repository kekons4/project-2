const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/create', withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create(req.body);
        if(!newComment) {
            res.status(400).json({message: "ERROR with creating your comment"});
            return;
        }
        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});


router.delete('/:id', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.destroy({where: {id: req.params.id, user_id: req.session.user_id}});
        if (!commentData) {
            res.status(400).json({message: "There was no comment found with this id."});
            return;
        }
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});


router.put('/:id', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.update({where: {id: req.params.id, user_id: req.session.user_id}});
        if (!commentData) {
            res.status(404).json({message: "There was no comment found with this id."});
            return;
        }
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;