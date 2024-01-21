import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import session from 'express-session';
import MongoDBStoreModule from 'connect-mongodb-session';
import 'dotenv/config';
import './config/db';
/* IMPORTACION DE RUTAS */
import userRouter from './routes/user';

const app = express();

const mongoDBStore = MongoDBStoreModule(session);
const store = new mongoDBStore({
    uri: (process.env.DB_URL + process.env.DB_NAME!),
    collection: 'sessions'
})

store.on('error', (error: Error) => {
    console.error(error);
});

app.use(session({
    secret: process.env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: false,
    store,
    cookie: {
        secure: false,
        maxAge: 1 * 24 * 60 * 60 * 1000
    }
}))

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/user', userRouter);

app.listen(process.env.PORT, () => {
    console.log(`App listen on port ${process.env.PORT}`);
});
