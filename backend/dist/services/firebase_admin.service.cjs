import admin from "firebase-admin";
import { config } from "dotenv";
//import serviceAccount from "../secrets/waste-classifier-firebase-adminsdk.json";
const serviceAccount = require("../secrets/waste-classifier-firebase-adminsdk.json");
config();
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: process.env.FIREBASE_BUCKET_URL
});
// Access Firebase Storage
export default admin.storage();
