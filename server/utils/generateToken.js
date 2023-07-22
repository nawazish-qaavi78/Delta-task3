import jwt from 'jsonwebtoken';

const generateToken = (res, userId) =>{
    const token = jwt.sign({userId}, process.env.JWT_SECRET,{expiresIn: '1h'});
    res.cookie('jwt', token, {
        httpOnly : true, // to prevent client side javascript access of the cookie
        maxAge: 3600*1000
    })
}

export default generateToken;