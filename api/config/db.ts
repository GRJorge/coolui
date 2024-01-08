import mongoose from 'mongoose';

function connect() {
    try {
        mongoose.connect(process.env.DB_URL + process.env.DB_NAME!);
        console.log('DB Connected to: ' + process.env.DB_NAME);
    } catch (Error) {
        console.error('DB Error: ' + Error);
    }
}

export default connect();
