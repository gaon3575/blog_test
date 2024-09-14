const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const User = require('./User');
const Post = require('./post');

const Comment = sequelize.define('Comment', {
    comment_text: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    timestamps: true
});

// 댓글과 사용자, 게시물 간의 관계 정의 (1:N)
Comment.belongsTo(User, { as: 'author' });
Comment.belongsTo(Post);

module.exports = Comment;
