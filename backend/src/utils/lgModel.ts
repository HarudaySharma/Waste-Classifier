import SashiDoTeachableMachine from "@sashido/teachablemachine-node";

var model: SashiDoTeachableMachine;
export async function loadModel(): Promise<SashiDoTeachableMachine> {
    return new Promise(async (resolve, reject) => {
        console.log("loading Model...");
        try {
            model = new SashiDoTeachableMachine({
                modelUrl: process.env.TEACHABLEMACHINE_URL_MAIN
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
export function getModel(): SashiDoTeachableMachine {
    return model;
}
