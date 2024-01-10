import { Response } from 'express';

export default {
    sendInternalError: function (res: Response, error: any) {
        res.status(500).json({ msj: 'Internal error', error });
    },
};
