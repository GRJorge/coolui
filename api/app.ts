import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import 'dotenv/config';
import './config/db';
/* IMPORTACION DE RUTAS */
import userRouter from './routes/user';

const app = express();

app.use(cors())
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/user', userRouter);

app.listen(process.env.PORT, () => {
    console.log(`App listen on port ${process.env.PORT}`);
});
