import React from "react";

const Sidebar = () => {
    return (
        <div className="h-screen bg-gray-900 w-131 flex items-center flex-col">
            <div className="flex h-10 w-full justify-center border-r items-center border-b hover:bg-black border-gray-700 ">
                <div className="flex w-11/12 justify-between h-full">
                    <div className="flex w-8/12 items-center justify-evenly text-white text-sm font-bold">
                        <h1>Salesforce-01/22-TR</h1>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </span>
                    </div>
                    <div className=" flex items-center justify-center w-3/12">
                        <span className="flex rounded-full w-6/12 h-3/4 justify-center items-center bg-white">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="black" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
            <div className="text-gray-300  text-ms flex flex-col justify-center w-full">
                <div className="w-full  mt-3 ml-3 mb-3">
                    <div className="flex mb-1  items-center">
                        <span className="w-1/12">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                            </svg>
                        </span>
                        <h1 className="w-full ml-1">Threads</h1>
                    </div>
                    <div className="flex mb-1 items-center">
                        <span className="w-1/12">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                        </span>
                        <h1 className="w-full ml-1">Mentions & reactions</h1>
                    </div>
                    <div className="flex mb-1 items-center">
                        <span className="w-1/12">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                        </span>
                        <h1 className="w-full ml-1">Drafts</h1>
                    </div>
                    <div className="flex mb-1 items-center">
                        <span className="w-1/12">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                            </svg>
                        </span>
                        <h1 className="w-full ml-1">Saved items</h1>
                    </div>
                    <div className="flex mb-1 items-center">
                        <span className="w-1/12">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </span>
                        <h1 className="w-full ml-1">More</h1>
                    </div>
                </div>
                <div className="border-t border-gray-600 text-gray-300 items-center text-ms flex flex-col justify-center w-full">
                    <div className="w-full  w-11/12 mt-3 mb-3">
                        <div className="flex mb-1  items-center">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </span>
                            <h1 className="w-full ml-1">Channels</h1>
                        </div>
                        <div className="flex mb-1  items-center">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                                </svg>
                            </span>
                            <h1 className="w-full ml-1">channel-1</h1>
                        </div>
                        <div className="flex mb-1  items-center">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                                </svg>

                            </span>
                            <h1 className="w-full ml-1">channel-2</h1>
                        </div>
                        <div className="flex mb-1  items-center">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                                </svg>
                            </span>
                            <h1 className="w-full ml-1">channel-3</h1>
                        </div>
                        <div className="flex mb-1 bg-yellow-500 text-gray-800 items-center">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                                </svg>
                            </span>
                            <h1 className="w-full ml-1">channel-4</h1>
                        </div>
                        <div className="flex mb-1  items-center">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                                </svg>
                            </span>
                            <h1 className="w-full ml-1">channel-5</h1>
                        </div>

                        <div className="flex mb-1  items-center">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                                </svg>
                            </span>
                            <h1 className="w-full ml-1">channel-6</h1>
                        </div>
                        <div className="flex mb-1  items-center">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                                </svg>
                            </span>
                            <h1 className="w-full ml-1">channel-7</h1>
                        </div>
                        <div className="flex mb-1  items-center">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                                </svg>
                            </span>
                            <h1 className="w-full ml-1">channel-8</h1>
                        </div>
                        <div className="flex mb-1  items-center">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                                </svg>
                            </span>
                            <h1 className="w-full ml-1">channel-9</h1>
                        </div>
                        <div className="flex mb-1  items-center">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                                </svg>
                            </span>
                            <h1 className="w-full ml-1">channel-10</h1>
                        </div>
                        <div className="flex mb-1  items-center">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                                </svg>
                            </span>
                            <h1 className="w-full ml-1">channel-11</h1>
                        </div>
                        <div className="flex mb-1  items-center">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                                </svg>
                            </span>
                            <h1 className="w-full ml-1">channel-12</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Sidebar;
