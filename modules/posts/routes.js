const postController = require('./controllers/posts');
module.exports = (router) => {
    router.post('/posts', postController.createPost);
};