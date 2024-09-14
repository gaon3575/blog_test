const bcrypt = require('bcryptjs');
const User = require('../models/User');

// 회원가입 로직
exports.registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    
    try {
        await User.create({ username, email, password: hashedPassword });
        res.redirect('/login');
    } catch (err) {
        res.status(500).send('Error creating user');
    }
};
