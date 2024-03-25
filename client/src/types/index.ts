export type Prediction = {
    class: string;
    score: number;
}
export type HighestRank = {
    class: string;
    score: number;
    about: string;
}
export type ImageResponseObj = {
    imageUrl: string;
    classes: Prediction[];
    highestRank: HighestRank;
}


/* export enum SUPPORTED_METHODS {
    'upload' = 'UPLOAD',
    'scan' = 'SCAN'
} */
