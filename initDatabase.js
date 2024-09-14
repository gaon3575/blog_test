const sequelize = require('./db');
const User = require('./models/User');
const Post = require('./models/post');
const Comment = require('./models/comment');

// 데이터베이스 및 테이블 초기화
sequelize.sync({ force: true }).then(() => {
    console.log('Database & tables created!');
    process.exit();  // 실행 후 종료
});
