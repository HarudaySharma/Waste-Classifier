import React from "react";
import { ResponseObj } from "../types";

type FetchImageInfoParams = {
    imageURL: string;
    setImageObj: React.Dispatch<React.SetStateAction<ResponseObj | undefined>>;
}

const fetchImageInfo = async ({ imageURL, setImageObj }: FetchImageInfoParams): Promise<void> => {
    try {
        const res = await fetch('/api/', {
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

export default fetchImageInfo;
