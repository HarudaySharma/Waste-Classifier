const generatePrompt = (predictedClass: string): string => {
    return `can you give me information about what ${predictedClass} \
        are and how they affect the nature`;
}
export default generatePrompt;
