const router = require('express').Router();
const { User, Post, Category } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const categoryData = await Category.findAll();
        const categories = categoryData.map((category) => {
            category.get({plain: true});
        });
        res.render('categories', {categories, avatar_url: req.session.avatar_url, logged_in: req.session.logged_in}); 
    } catch (err) {
        res.status(500).json(err);
    }
});

// router.get('/:name', async (req, res) => {
//     try {
//         const categoryData = await Post.findAll({ 
//             include: [
//                 {
//                     model: Category,
//                     attributes: ["name"]
//                 },
//                 { 
//                     model: User,
//                     attributes: ["username", "avatar_url"]  
//                 }
//             ],
//             where: {
//                 name: req.params.name
//             }
//         });

        
//         const category = categoryData.get({ plain: true });

//         res.render('category', {
//             category,
//             logged_in: req.session.logged_in,
//             avatar_url: req.session.avatar_url
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

router.get('/:id', async (req, res) => {
    try {
        const postData = await Post.findAll({ 
            include: [
                { 
                    model: User,
                    attributes: ["username", "avatar_url"]  
                },
                {
                    model: Category,
                    attributes: ["name"]
                }
            ],
            where: {
                category_id: req.params.id
            }
        });

        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('category', {
            posts,
            logged_in: req.session.logged_in,
            avatar_url: req.session.avatar_url,
            category_name: posts[0].category.name
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// router.get('/post', withAuth, async (req, res) => {
//     res.render('post', {logged_in: req.session.logged_in, user_id: req.session.user_id});
// })

module.exports = router;