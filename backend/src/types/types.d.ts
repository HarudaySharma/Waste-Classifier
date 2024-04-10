import { Prediction } from "@sashido/teachablemachine-node";

export interface RESPONSEOBJ {
    imageUrl: string;
    classes: Prediction[];
    highestRank: {
        class: string;
        score: number;
        about: string;
    };
};
