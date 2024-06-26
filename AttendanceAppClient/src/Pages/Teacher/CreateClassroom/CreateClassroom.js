import React, { useState } from 'react';

const CreateClassroom = () => {
    const [details, setDetails] = useState({
        title: "",
        teacher: "",
    });

    const submitHandler = (e) => {
        // Handle form submission logic here
        e.preventDefault(); // Prevent default form submission behavior
        console.log("Form submitted with details:", details);
    };

    return (
        <div className='w-full h-full flex justify-center items-center bg-white mt-auto'>
            <div className='flex w-11/12 md:w-1/2 lg:w-1/3 min-h-full my-8 bg-white flex-col justify-center items-center border-slate-600 border-2 border-opacity-20 rounded-md shadow-2xl'>
                <div className='p-8 pt-0 flex-1 flex flex-col items-center'>
                    <p className='text-xl my-5'>Add ClassRoom</p>
                    <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6 items-center min-w-full">
                        <label htmlFor="Title" className="pb-2 text-sm font-bold text-gray-700">
                            Title:
                        </label>
                        <input
                            onChange={e => setDetails({ ...details, title: e.target.value })}
                            value={details.title}
                            type="text" id="Title" name="Title" required
                            className="w-80 border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-cyan-600 placeholder-gray-500 text-gray-500 dark:text-gray-400" />
                    </div>
                    <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6 items-center min-w-full">
                        <label htmlFor="Author" className="pb-2 text-sm font-bold text-gray-700">
                            Teacher:
                        </label>
                        <input
                            onChange={e => setDetails({ ...details, teacher: e.target.value })}
                            value={details.teacher}
                            type="text" id="Author" name="Author" required
                            className="w-80 border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded bg-transparent text-sm focus:outline-none focus:border-cyan-600 placeholder-gray-500 text-gray-500 dark:text-gray-400" />
                    </div>
                    <button onClick={submitHandler} className="bg-cyan-700 focus:outline-none transition duration-150 ease-in-out hover:bg-cyan-600 rounded text-white px-20 py-3 text-lg" type="submit">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CreateClassroom;
