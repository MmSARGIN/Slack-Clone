import React from "react";

const Sidebar = () => {
    return (
        <div className="h-screen bg-gray-900 w-2/12 flex">
            <div className="flex h-10 w-full justify-center border-r items-center border-b hover:bg-black border-gray-700 ">
                <div className="flex w-11/12 justify-between h-full">
                    <div className="flex items-center text-white text-sm font-bold">
                        <h1>Salesforce-01/22-TR</h1>
                    </div>
                    <div className=" flex items-center justify-center w-3/12">
                        <span className="flex rounded-full w-7/12 h-3/4 justify-center items-center bg-white">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="black" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Sidebar;
