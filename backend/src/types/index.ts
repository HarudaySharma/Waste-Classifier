export type Prediction = {
    class: string;
    score: number;
}

export interface Model {
    checkModel:(revertMsg: string) => Promise<{message: string}>;
    classify: (params: {imageUrl: string}) => Promise<Prediction[]>;
}

export interface RESPONSEOBJ {
    imageUrl: string;
    classes: Prediction[];
    highestRank: {
        class: string;
        score: number;
        about: string;
    };
};
