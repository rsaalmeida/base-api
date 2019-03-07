const express = require('express');
const bcrypt = require('bcryptjs');

const User = require('../models/User');

const router = express.Router();

router.post('/register', async (req,res) => {

    const { email } = req.body;

    try{
        if(await User.findOne({email})){
            return res.status(400).send({error: 'Usuario ja existe na base'});
        }
        const user = await User.create(req.body);

        user.password = undefined;

        return res.send({ user });

    }
    catch(err ) {

        return res.status(400).send({
            'error': 'Falha ao efetuar o cadastro'
        });
   }
    
});

router.post('/authenticate', async (req,res) => {
    const { email, password } = req.body;

    const user = await User.findOne({email}).select('+password');

    if(!user)
        return res.status(400).send({error: 'Usu�rio n�o encontrado'});
    
    if(!await bcrypt.compare(password, user.password) )
        return res.status(400).send({error: 'Senha Inv�lida'});

    user.password = undefined;
    return res.send({user});

});

module.exports = (app) => app.use('/auth', router);
