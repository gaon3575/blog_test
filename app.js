const express = require('express');
const path = require('path');
const app = express();
const port = 3000; // 원하는 포트 번호로 설정 가능

// 데이터베이스 연결
const sequelize = require('./db');

// 모델 로드
const User = require('./models/User');
const Post = require('./models/Post');
const Comment = require('./models/Comment');

// Express middleware 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// EJS 뷰 엔진 설정
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 정적 파일 서비스
app.use(express.static(path.join(__dirname, 'public')));

// 라우트 설정
app.get('/', (req, res) => {
    res.render('layout', {
        title: 'Home Page',
        body: `<h1>Welcome to My Blog</h1><p>This is the homepage where you can find the latest blog posts.</p>`
    });
});

app.get('/posts', (req, res) => {
    res.render('layout', {
        title: 'Blog Posts',
        body: `<h1>Blog Posts</h1><ul><!-- 게시물 목록을 여기에 삽입 --></ul>`
    });
});

app.get('/about', (req, res) => {
    res.render('layout', {
        title: 'About Us',
        body: `<h1>About Us</h1><p>This is the about page.</p>`
    });
});

app.get('/contact', (req, res) => {
    res.render('layout', {
        title: 'Contact Us',
        body: `<h1>Contact Us</h1><p>This is the contact page.</p>`
    });
});

// 서버 시작
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// 데이터베이스 연결 테스트
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();
