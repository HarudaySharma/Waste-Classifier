import admin from "firebase-admin"
import { config } from "dotenv";
/* import { readFileSync } from "fs"; */

config();

/* const serviceAccount = JSON.parse(
    readFileSync(new URL('../secrets/waste-classifier-firebase-adminsdk.json', import.meta.url),
        { encoding: 'utf8' }
    )) */

const cred = JSON.parse(process.env.FIREBASE_SERVICE_CRED as string);

admin.initializeApp({
    credential: admin.credential.cert(cred),
    storageBucket: process.env.FIREBASE_BUCKET_URL
});

// Access Firebase Storage
export default admin.storage();

