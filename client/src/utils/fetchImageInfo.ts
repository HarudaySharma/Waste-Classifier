import React from "react";
import { ImageResponseObj } from "../types";

type FetchImageInfoParams = {
    imageURL: string;
    setImageObj: React.Dispatch<React.SetStateAction<ImageResponseObj | undefined>>;
}

const fillImageDetails = async ({ imageURL, setImageObj }: FetchImageInfoParams): Promise<void> => {
    try {
        const res = await fetch('https://waste-classifier-server.vercel.app/api/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ imageURL: imageURL }),
        });

        if (!res.ok) {
            console.log(res);
            console.log("check the url");
            return;
        }
        const data = await res.json();
        setImageObj(data);
    }
    catch (err) {
        console.log(err);
    }
}

export default fillImageDetails;
