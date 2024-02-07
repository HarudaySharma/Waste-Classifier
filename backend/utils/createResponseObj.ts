const createResponseObj = (wasteType: string, imageURL: string, information: string) => {
    return {
        heading: `${wasteType}: Impact on Nature`,
        imageURL: imageURL,
        information: information,
    }
}
export default createResponseObj;
