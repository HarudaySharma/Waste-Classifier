export async function imageUrlToGenerativePart(imageUrl) {
    try {
        const res = await fetch(imageUrl);
        if (!res.ok) {
            throw new Error("failed to fetch the image, check the image url");
        }
        const mimeType = res.headers.get('Content-Type');
        if (!mimeType) {
            throw new Error("failed to resolve the image type");
        }
        const arrayBuffer = await res.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        return {
            inlineData: {
                data: buffer.toString('base64'),
                mimeType,
            }
        };
    }
    catch (err) {
        throw err;
    }
}
