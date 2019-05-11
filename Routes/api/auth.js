const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator/check');
const User = require('../../models/User');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

router.get('/',(req,res)=>{
    res.send("hello friends");
})
router.post('/',
[
    check('name','Name is required').not().isEmpty(),
    check('email',"Email is required").isEmail(),
    check('password',"Password should be atleast 6 characters").isLength({min:6})   
]
, async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    const {name, email, password} = req.body;
    try{
        let user = await User.findOne({email});
        if(user){
            return res.status(400).send("Email already exist")
        }
        const avatar = gravatar.url(email,{
            s: '200',
            r: 'pg',
            d: 'mm'
        })
        user = new User({
            name,
            email,
            password,
            avatar
        })
        const salt = await bcrypt.genSalt(10);
        user.pasasword = await bcrypt.hash(password,salt);
        await user.save()
        const payload ={
            user:{
                id:user.id
            }
        }
        jwt.sign(payload,config.get('jwtSecret'),{
            expiresIn: 3600000},
            (err,token) =>{
                if(err) throw err
                res.json({token});
            }
        )
       
    }
    catch(err){
        console.log(err.message);
        res.status(500).send('Server Error');
    }
})

module.exports = router;