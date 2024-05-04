import storage from "../services/firebase_admin.service.js"

const bucket = storage.bucket();


async function cleanBucket() {
    console.log('-------CLEANING FIREBASE BUCKET STARTED-------');
    const res = await bucket.getFiles();
    const files = res[0].filter(file => file.metadata.timeCreated).sort((a, b) => {
        const timeA = Number(a.metadata.timeCreated);
        const timeB = Number(b.metadata.timeCreated);
        return timeA - timeB;
    });
    // deleting all the files
    if(files.length === 0) {
        console.log(`no files in the bucket`);
    }

    for(let i = 0; i < files.length; i++) {
        try {
            await files[i].delete();
            console.log(`${files[i].name} deleted`);
        }
        catch(err) {
            console.log(`error deleting ${files[i].name}`);
            console.log(err);
        }

    }
    console.log('-------CLEANING FIREBASE BUCKET ENDED-------');
}

export default function startFirebaseAdmin() {
    // delete files in bucket every 12 hrs
    setInterval(cleanBucket, 1000 * 60 * 60 * 12);
}
