const { Sequelize } = require('sequelize');

// MySQL 데이터베이스 연결 설정
const sequelize = new Sequelize('blog_db', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

module.exports = sequelize;
