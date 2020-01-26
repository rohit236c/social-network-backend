const Post = require('../models/posts');

const postController = {
    createPost: (req, res, next) => {
        const post = new Post(req.body);
        post.save((err, post) => {
            if (err) {
                return res
                    .status(400)
                    .json({error: err});
            }
            return res.json(post);
        })
    }
};

module.exports = postController;