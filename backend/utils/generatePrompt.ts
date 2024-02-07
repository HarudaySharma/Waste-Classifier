const generatePrompt = (predictedClass: string): string => {
    return `can you give me information about what ${predictedClass} \
        are and how they affect the nature. Keep it under 50 words.`;
}
export default generatePrompt;
