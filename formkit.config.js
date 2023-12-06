import { generateClasses } from "@formkit/themes"


const config = {
    config: {
        classes: generateClasses({
            global: {
                wrapper: 'space-y-2 mb-3',
                message: 'bg-red-500 text-white text-center text-sm font-bold p-2 my-5 uppcercase',
                label: 'block mb-1 font-bold text-md text-white',
                input: 'w-full p-5 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400',


            },
            submit: {
                input: '$reset bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-bold w-full p-2 mt-5'

            }
        })

    }
}


export default config