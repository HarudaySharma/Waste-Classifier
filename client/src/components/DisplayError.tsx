interface DisplayErrorParams {
    errorMessage: string
}

export const DisplayError = ({ errorMessage }: DisplayErrorParams) => {
    return (
        <div>
            {errorMessage}
        </div>
    )
}
