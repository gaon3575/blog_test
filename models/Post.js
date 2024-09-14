const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const User = require('./User');

const Post = sequelize.define('Post', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    timestamps: true
});

// 게시물과 사용자 간의 관계 정의 (1:N)
Post.belongsTo(User, { as: 'author' });

module.exports = Post;
