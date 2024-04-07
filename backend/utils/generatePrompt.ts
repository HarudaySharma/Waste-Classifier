const generatePrompt = (predictedClass: string): string => {
    return `can you give me information about what ${predictedClass} \
        are and how they affect the nature. Keep it under 150 words.\
        and make sure that the text is formatted in markdown format`;
}
export default generatePrompt;
