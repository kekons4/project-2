const router = require('express').Router();
const { Post, User, Category } = require('../../models');

router.get('/post/:id', async (req, res) => {
    try {
        const categoryData = await Category.findAll(req.params.name, { 
            include: [
                {
                    model: Post,
                    attributes: ["name"]
                },
                { 
                    model: User,
                    attributes: ["username", "avatar_url"]  
                }
            ]
        });

        
        const categories = categoryData.map((category) => category.get({ plain: true }));

        res.render('category', {
            category,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;