import { Request, Response } from 'express';
import global from '../config/global';
import bcrypt from 'bcryptjs';
import User from '../models/user';

export default {
    //GUARDAR USUARIO
    saveUser: function (req: Request, res: Response) {
        const { username, email, password } = req.body;
        const salt = 10;

        bcrypt.hash(password, salt, async (error, hash) => {
            if (!error) {
                try {
                    const newUser = await new User({
                        username,
                        email,
                        password: hash,
                    }).save();

                    res.status(201).json({ msj: 'Usuario creado con exito', data: newUser });
                } catch (error: any) {
                    if (error.code === 11000) {
                        if (error.keyPattern.email) {
                            res.status(400).json({ msj: 'Correo en uso', dataError: 'email', value: error.keyValue.email });
                        } else if (error.keyPattern.username) {
                            res.status(400).json({ msj: 'Nombre de usuario en uso', dataError: 'username', value: error.keyValue.username });
                        }
                    } else {
                        console.log(error);
                        global.sendInternalError(res, error);
                    }
                }
            } else {
                global.sendInternalError(res, error);
            }
        });
    }, //OBTENER TODOS LOS USUARIOS
    getAll: async function (req: Request, res: Response) {
        try {
            const allUsers = await User.find().lean();

            res.status(200).json({ msj: 'Ok', data: allUsers });
        } catch (error: any) {
            global.sendInternalError(res, error);
        }
    },
};
