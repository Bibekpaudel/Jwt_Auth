const router = require('express').Router();
const User = require('../model/User');
const verify = require('./verifyToken');

router.get('/', verify, (req, res) => {
    // res.json({ 
    //     posts: {
    //         title: 'my first post',
    //         description: 'Random data you shouldnt access'
    //     }
    // });
    res.send(req.user);
    // User.findbyOne({_id: req.user})
});


module.exports = router;