declare module "@sashido/teachablemachine-node" {
    export default SashiDoTeachableMachine;

    export class SashiDoTeachableMachine {
        constructor(params: ModelParams);

        classify(params: ClassifyParams): Promise<Prediction[] | { error: string }>;

        private loadModel(params: { modelUrl: string }): Promise<void> | null;

        private checkModel(
            cb: () => Promise<Prediction[] | { error: string }>
        ): Promise<Prediction[] | { error: string }>;

        private inference(params: { imageUrl: string }): Promise<Prediction[] | { error: string }>;
    }
    export interface Prediction {
        class: string;
        score: number;
    }
    interface ModelParams {
        modelUrl?: string;
    }
    interface ClassifyParams {
        imageUrl: string;
    }
}

