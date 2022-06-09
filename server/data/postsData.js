const db = require('../infra/db');

exports.getPosts = function () {
	return db.query('select * from blog.post');
};

exports.getPost = function (id) {
	return db.oneOrNone('select * from blog.post where id = $1', [id]);
};

exports.getPostByTitle = function (title) {
	return db.oneOrNone('select * from blog.post where title = $1', [title]);
};

exports.savePost = function (post) {
	return db.one('insert into blog.post (title, content) values ($1, $2) returning *', [post.title, post.content]);
};

exports.updatePost = function (id, post) {
	return db.none('update blog.post set title = $1, content = $2 where id = $3', [post.title, post.content, id]);
};

exports.deletePost = function (id) {
	return db.none('delete from blog.post where id = $1', [id]);
};