const express = require('express');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
const Usuario = require('../models/UsuarioScheme');
const { generarJWT } = require('../helpers/jwt')

const crearUsuario = async (req, res = express.request ) => {
    const { name, email, password } = req.body

    try{
        let usuario = await Usuario.findOne({ email: email })
        if ( usuario ){
            return res.status(400).json({
                ok: false,
                msg: 'El usuario con ese correo ya existe en la DB'
            })
        }

        usuario = new Usuario( req.body )
        const salt = bcrypt.genSaltSync()
        usuario.password = bcrypt.hashSync(password, salt)
        await usuario.save()

        res.status(200).json({
            ok: true,
            usuario
        })

    }catch(error) {
        console.log(error)
        res.status(500).json({
            ok: false, 
            error,
        })
    }
}

const loginUsuario = async (req, res = express.request) => {
    const { email, password } = req.body

    try{
        let usuario = await Usuario.findOne({ email: email })
        if ( !usuario ){
            return res.status(400).json({
                ok: false,
                msg: 'El usuario NO existe en la DB'
            })
        }

        const passwordValid = bcrypt.compareSync(password, usuario.password)
        if ( !passwordValid ) {
            return res.status(400).json({
                ok: false,
                msg: 'El password NO es válido'
            })
        }

        const token = await( generarJWT(usuario.id, usuario.name))

        res.status(200).json({
            ok: true,
            usuario,
            token
        })

    }catch(error) {
        console.log(error)
        res.status(500).json({
            ok: false, 
            error,
        })
    }
}

const revalidarToken = (req, res = express.request) => {

    const { uid, name } = req

    const token = await( generarJWT(uid, name))

    res.json({
        ok:true
    })
}

module.exports = {
    loginUsuario,
    crearUsuario, 
    revalidarToken
}