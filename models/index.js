const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment')
const BlogComment = require('./BlogComment');

//User to blog association
User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Blog.belongsTo(User, {
    foreignKey: 'user_id'
});

// User to comments association
User.hasMany(Comment, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});

Comment.belongsTo(User, {
    foreignKey: "user_id"
})

//Blog to comments association
Blog.belongsToMany(Comment, {
    through: {
        model: BlogComment,
    }
});

Comment.belongsToMany(Blog, {
    through: {
        model: BlogComment,
    }
});

module.exports = { User, Blog, Comment, BlogComment};