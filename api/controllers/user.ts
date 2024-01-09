import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/user';

export default {
    saveUser: function (req: Request, res: Response) {
        const { username, email, password } = req.body;
        const salt = 10;

        bcrypt.hash(password, salt, async (err, hash) => {
            if (!err) {
                const newUser = await new User({
                    username,
                    email,
                    password: hash,
                }).save();

                res.status(201).json({ msj: 'Usuario creado con exito', data: newUser });
            } else {
                res.status(500).json({ msj: 'Error en la encriptacion de la contraseña', err });
            }
        });
    },
};
