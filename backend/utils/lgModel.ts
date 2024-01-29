import TeachableMachine from "@sashido/teachablemachine-node";
import { Model } from "../types/MLModelTypes";

var model: Model;
export async function loadModel():Promise<Model> {
    return new Promise(async (resolve, reject) => {
        console.log("loading Model...");
        try {
            model = new TeachableMachine({
                modelUrl: process.env.TEACHABLEMACHINEURL
            });
            resolve(model);
            return;
        }
        catch (err) {
            reject(err);
            return;
        }
    });
}
export function getModel(): Model{
    return model;
}
