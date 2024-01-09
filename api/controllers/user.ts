import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/user';

export default {
    saveUser: function (req: Request, res: Response) {
        const { username, email, password } = req.body;
        const salt = 10;

        bcrypt.hash(password, salt, async (err, hash) => {
            if (!err) {
                try {
                    const newUser = await new User({
                        username,
                        email,
                        password: hash,
                    }).save();

                    res.status(201).json({ msj: 'Usuario creado con exito', data: newUser });
                } catch (error: any) {
                    if (error.code === 11000) {
                        if (error.keyPattern.username) {
                            res.status(400).json({ msj: 'Nombre de usuario en uso', value: error.keyValue.username });
                        } else if (error.keyPattern.email) {
                            res.status(400).json({ msj: 'Correo en uso', value: error.keyValue.email });
                        }
                    } else {
                        console.log(error);
                        res.status(500).json({ msj: 'Error interno', error });
                    }
                }
            } else {
                res.status(500).json({ msj: 'Error en encriptacion de la contraseña', error: err });
            }
        });
    },
};
