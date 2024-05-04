export type Prediction = {
    class: string;
    score: number;
}

export type HighestRank = {
    class: string;
    score: number;
    about: string;
}

// response object for /api/
export type ImageResponseObj1 = {
    imageUrl: string;
    classes: Prediction[];
    highestRank: HighestRank;
}

// response object for /api/useGemini
export type ImageResponseObj2 = {
    imageUrl: string;
    information: string;
}




/* export enum SUPPORTED_METHODS {
    'upload' = 'UPLOAD',
    'scan' = 'SCAN'
} */
