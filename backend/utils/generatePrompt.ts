const generatePrompt = (predictedClass: string): string => {
    return `can you give me information about what ${predictedClass} \
        are and how they affect the nature. Keep it under 150 words.\
        Ensure that there are no special characters like asterisks, etc.. only simple text`;
}
export default generatePrompt;
