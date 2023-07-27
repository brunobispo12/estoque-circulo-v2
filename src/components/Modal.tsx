import { PropsChildren } from "../utils/types/genericTypes"

function Modal({ children }: PropsChildren) {
    return (
        <div className='z-50 fixed left-0 top-0 flex justify-center items-center h-screen w-full bg-gray-600 bg-opacity-50'>
            <div className='bg-smoke w-2/4 h-2/3 rounded border-princeton border-2 p-2'>
                {children}
            </div>
        </div>
    )
}

export default Modal