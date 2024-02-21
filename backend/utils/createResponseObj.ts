const createResponseObj = (wasteType: string, imageUrl: string, info: string) => {
    return {
        wasteType: `${wasteType}: Impact on Nature`,
        imageUrl,
        info,
    }
}
export default createResponseObj;
