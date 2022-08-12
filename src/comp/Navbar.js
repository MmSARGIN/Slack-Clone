import React from "react";

const Navbar = () => {
  return (
    <nav className=" w-full bg-first flex justify-between h-9 items-center">
      <div className="flex text-white b w-129 justify-end">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      </div>
      <div className="flex w-128 text-white">
        <div className="bg-blue-500 rounded flex justify-between w-full">
          <div className="w-10/12">
            <h2 className="text-white text-xs p-1">Search Salesforce-01/22-TR</h2>
          </div>
          <div className="flex items-center justify-evenly w-1/12">

            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>

          </div>

        </div>
      </div>
      <div className="flex w-130  h-full justify-end items-center">
        <div className="flex w-2/12 justify-around items-center">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 25 25" stroke="white" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <button>
            <div className="bg-blue-100 h-5 w-5 rounded">
              <span>
                <span>

                </span>
              </span>
              <i></i>
              <i></i>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
