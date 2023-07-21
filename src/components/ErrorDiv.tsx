type props = {
    errorMessage: string
}

function ErrorDiv({ errorMessage }: props) {
    return (
        <div className="bg-red-400 text-center rounded-md w-full py-1 text-sm">{errorMessage}</div>
    )
}

export default ErrorDiv