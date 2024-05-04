export const generatePrompt = (predictedClass) => {
    return `Could you please provide information about ${predictedClass}? 
        Please describe what ${predictedClass} is and how it impacts the environment. 
        Your response should be concise, under 150 words, and formatted in Markdown.`;
};
export const generatePromptForGeminiVision = () => {
    return `Can you provide information about the waste depicted in the image? 
    Please keep your response under 150 words and format it in Markdown 
    and make sure to highlight the important terms by making them bold.

        ---

        **Waste Classification**

        The image provided is expected to represent waste material. Your task is to identify the type of waste depicted and describe its impact on the environment.

        **Impact on the Environment**

        Waste, if improperly managed, can have severe consequences on the environment. It leads to pollution of land, water bodies, and air, harming ecosystems and endangering wildlife. Additionally, certain types of waste, such as plastics and electronic waste, pose long-term threats due to their non-biodegradable nature.

        ---
        **Note**: 
        If the image **does not show any waste**, please respond with: 
        "The Image **does not show any waste**."
    `;
};
