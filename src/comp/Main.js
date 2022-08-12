import React from "react";

const Main = () => {
    return (
        <div className="w-132">
            < div className="flex text-ms font-bold items-center bg-gray-900 h-10 text-white" >
                <div className="ml-4">
                    <h1>New Message</h1>
                </div>
            </div >
            <div className="bg-gray-900 h-10 flex items-center">
                <div className="ml-4 text-gray-400 text-ms w-full">
                    <label htmlFor="inp"> To:
                        <input placeholder="#a-channel, @somebody, or somebody@example.com" className="ml-2 w-3/4 bg-gray-900" type="text" id="inp" />
                    </label>
                </div>
            </div>
            <div className="bg-gray-800 h-of flex items-end justify-center">
                <div className=" h-28 w-11/12 mb-16 rounded-md border border-gray-600">
                    <div>
                        <div className="flex justify-around w-4/12 p-2">
                            <div className="flex border-r-2 w-3/12 justify-around border-gray-600">
                                <svg data-aqc="true" aria-hidden="true" viewBox="0 0 20 20" className="h-3 w-3"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5" d="M5.75 2.75h-1v6.315h1m0-6.315v6.315m0-6.315h3.5m-3.5 6.315h4.343M9.25 2.75h1.843a3.157 3.157 0 1 1 0 6.315h-1M9.25 2.75 6 3.25h4.093a2.907 2.907 0 1 1 0 5.815M5.75 9.5h-1v7.75h1m0-7.75v7.75m0-7.75h5m-5 7.75h3.5m1.5-7.75h1.125a3.875 3.875 0 0 1 0 7.75H9.25m1.5-7.75a3.5 3.5 0 1 1 0 7h-4.5l3 .75m3-13.798c.667.311 2 1.216 2 2.338 0 1.123-1.333 2.183-2 2.807M14 11c.333.417 1 1.5 1 2.5s-.667 2.083-1 2.5"></path></svg>
                                <svg data-aqc="true" aria-hidden="true" viewBox="0 0 20 20" className="h-3 w-3"><g fill="none"><path stroke="white" stroke-linecap="round" stroke-width="1" d="M7.75 2.75h7.5m-10.5 14.5h7.5"></path><path fill="white" d="m7.5 17.5 3-15h2l-3 15h-2Z"></path></g></svg>
                                <svg data-aqc="true" aria-hidden="true" viewBox="0 0 20 20" className="h-3 w-3"><g fill="none"><path fill="white" d="m11.54 17.083.179.728-.18-.728Zm-3.41-.13.202-.722-.201.722ZM11.5 11a.75.75 0 0 0 0-1.5V11Zm-3-8-.179-.728-.007.002-.007.002L8.5 3ZM6.474 14.387a.75.75 0 0 0-1.448.39l1.448-.39Zm7.052-8.692a.75.75 0 0 0 1.448-.39l-1.448.39Zm1.163 7.26a.75.75 0 1 0-1.378.591l1.378-.59Zm-3.328 3.4c-.989.244-1.991.166-3.029-.123l-.403 1.445c1.213.338 2.486.456 3.79.135l-.358-1.456ZM11.5 9.5c-3.561 0-4.782-1.449-4.978-2.624-.215-1.29.656-2.747 2.171-3.152l-.386-1.45c-2.232.596-3.612 2.766-3.265 4.85C5.409 9.324 7.562 11 11.5 11V9.5Zm-3.168 6.73c-.93-.259-1.613-.934-1.858-1.844l-1.448.39c.388 1.441 1.483 2.503 2.903 2.9l.403-1.445ZM8.68 3.729c1.008-.248 2.129-.222 3.042.111.896.328 1.556.93 1.805 1.855l1.448-.39c-.401-1.491-1.486-2.416-2.738-2.874-1.234-.45-2.663-.466-3.915-.159l.358 1.457Zm4.632 9.817c.273.639.186 1.204-.13 1.673-.333.492-.958.925-1.82 1.137l.358 1.456c1.14-.28 2.12-.889 2.704-1.753.6-.888.743-1.992.266-3.104l-1.378.591Z"></path><path stroke="white" stroke-linecap="round" stroke-width="1" d="M2.75 10.25h14.5"></path></g></svg>
                            </div>
                            <div className="flex items-center w-1/12 border-r-2 border-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                </svg>
                            </div>
                            <div className="flex border-r-2 w-3/12 justify-around border-gray-600">
                                <svg data-aqc="true" aria-hidden="true" className="h-3 w-3" viewBox="0 0 20 20"><g fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round"><path stroke-width="1" d="M7.75 10.75h10m-10 6.5h10m-10-13h10"></path><path d="m2 3 1.5-.5v4H2h3m-2.857 7.36A1.505 1.505 0 0 1 3.5 13c.828 0 1.25.672 1.25 1.25 0 .828-1.5 2-2.75 3.25h3"></path></g></svg>
                                <svg data-aqc="true" aria-hidden="true" viewBox="0 0 20 20" className="h-3 w-3"><g fill="none"><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M7.75 10h10m-10 7h10m-10-14h10"></path><circle cx="3" cy="10" r="1" fill="white"></circle><circle cx="3" cy="3" r="1" fill="white"></circle><circle cx="3" cy="17" r="1" fill="white"></circle></g></svg>
                            </div>
                            <div className="flex border-r-2 w-1/12  border-gray-600">
                                <svg data-aqc="true" aria-hidden="true" viewBox="0 0 20 20" className="h-3 w-3"><path fill="none" stroke="white" stroke-linecap="round" stroke-width="1" d="M2.75 2.75v14.5m4-13.5h8.5m-8.5 6.5h10.5m-10.5 6h7.5"></path></svg>
                            </div>
                            <div className="flex w-2/12 justify-around border-r-2 border-gray-600">
                                <svg data-aqc="true" aria-hidden="true" viewBox="0 0 20 20" className="h-3 w-3"><g fill="none"><path fill="white" d="M15.296 5.236a.75.75 0 1 0-1.092 1.028l1.092-1.028ZM18.75 10l.546.514a.75.75 0 0 0 0-1.028L18.75 10Zm-4.546 3.736a.75.75 0 1 0 1.092 1.028l-1.092-1.028Zm0-7.472 4 4.25 1.092-1.028-4-4.25-1.092 1.028Zm4 3.222-4 4.25 1.092 1.028 4-4.25-1.092-1.028Zm-13.5-4.25a.75.75 0 1 1 1.092 1.028L4.704 5.236ZM1.25 10l-.546.514a.75.75 0 0 1 0-1.028L1.25 10Zm4.546 3.736a.75.75 0 1 1-1.092 1.028l1.092-1.028Zm0-7.472-4 4.25L.704 9.486l4-4.25 1.092 1.028Zm-4 3.222 4 4.25-1.092 1.028-4-4.25 1.092-1.028Z"></path><path stroke="white" stroke-linecap="round" stroke-width="1" d="m8.25 17.25 3.5-14.5"></path></g></svg>
                                <svg data-aqc="true" aria-hidden="true" viewBox="0 0 20 20" className="h-3 w-3"><g fill="none"><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M15.25 3.752h2a1 1 0 0 1 1 1v11.5a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1v-3.5"></path><path fill="white" d="M11.56 3.502a.75.75 0 1 0-1.12.996l1.12-.996ZM13 6.252l.56.498a.75.75 0 0 0 0-.996l-.56.498Zm-2.56 1.75a.75.75 0 1 0 1.12.996l-1.12-.996Zm0-3.504 2 2.252 1.12-.996-2-2.252-1.12.996Zm2 1.255-2 2.249 1.12.996 2-2.248-1.12-.997Zm-9.5 3.245a.75.75 0 1 0 1.12-.996l-1.12.996ZM1.5 6.252l-.56-.498a.75.75 0 0 0 0 .996l.56-.498Zm2.56-1.754a.75.75 0 1 0-1.12-.996l1.12.996Zm0 3.504-2-2.249-1.12.997 2 2.248 1.12-.996Zm-2-1.252 2-2.252-1.12-.996-2 2.252 1.12.996Z"></path><path stroke="white" stroke-linecap="round" stroke-width="1" d="M8.5 2.5 6 10"></path></g></svg>
                            </div>
                        </div>
                        <div className=" h-14 flex justify-center items-center">
                            <div className="border border-gray-600 h-7 w-133 rounded-sm">

                            </div>
                        </div>
                        <div className="flex w-134">
                            <div className="flex w-3/12 justify-around">
                                <div className="flex border-r w-1/6  justify-center border-gray-600">
                                    <svg data-aqc="true" aria-hidden="true" viewBox="0 0 20 20" className=" h-4 w-4"><path fill="none" stroke="white" stroke-linecap="round" stroke-width="1" d="M10 3.25v13.5M16.75 10H3.25"></path></svg>
                                </div>
                                <div className="flex border-r justify-around   w-2/6 border-gray-600">
                                    <svg data-aqc="true" aria-hidden="true" viewBox="0 0 20 20" className=" h-4 w-4" ><path fill="none" stroke="white" stroke-linejoin="round" stroke-width="1" d="M3.75 3.75a1.5 1.5 0 0 0-1.5 1.5v9.5a1.5 1.5 0 0 0 1.5 1.5h8.5a1.5 1.5 0 0 0 1.5-1.5v-2.59l3.75 2.159a.5.5 0 0 0 .75-.434v-7.77a.5.5 0 0 0-.75-.433L13.75 7.84V5.25a1.5 1.5 0 0 0-1.5-1.5h-8.5Z"></path></svg>
                                    <svg data-aqc="true" aria-hidden="true" viewBox="0 0 20 20" className=" h-4 w-4 mr-2" ><g fill="none" stroke="white" stroke-width="1.5"><path d="M7.25 5.5a2.75 2.75 0 1 1 5.5 0v3a2.75 2.75 0 1 1-5.5 0v-3Z"></path><path stroke-linecap="round" d="M4.25 8.25v.25A5.75 5.75 0 0 0 10 14.25v0a5.75 5.75 0 0 0 5.75-5.75v-.25m-5.75 6V17m2.25.25h-4.5"></path></g></svg>
                                </div>
                                <div className="flex w-2/6 justify-around ">
                                    <svg data-aqc="true" aria-hidden="true" viewBox="0 0 20 20" className=" h-4 w-4" ><g fill="none"><circle cx="10" cy="10" r="8.25" stroke="white" stroke-width="1"></circle><circle cx="7.5" cy="8" r="1.5" fill="white"></circle><circle cx="12.5" cy="8" r="1.5" fill="white"></circle><path stroke="white" stroke-linecap="round" stroke-width="1" d="M6.902 12c.494 1.5 1.81 2.25 3.125 2.25 1.316 0 2.632-.75 3.125-2.25"></path></g></svg>
                                    <svg data-aqc="true" aria-hidden="true" viewBox="0 0 20 20" className=" h-4 w-4" ><g fill="none" stroke="white" stroke-width="1.5"><circle cx="10" cy="10" r="3.75"></circle><path stroke-linecap="round" d="M13.75 6.75v4.605c0 1.047.848 1.895 1.895 1.895v0a2.605 2.605 0 0 0 2.605-2.605V10"></path><path stroke-linecap="round" d="M18.25 10a8.25 8.25 0 1 0-3.497 6.744"></path></g></svg>
                                    <svg data-aqc="true" aria-hidden="true" viewBox="0 0 20 20" className=" h-4 w-4" ><g fill="none" stroke="white" stroke-width="1.5"><path stroke-linecap="round" d="M10.5 17 6.23 4.19C6 3.5 5.023 3.507 4.803 4.2L.75 17"></path><path d="M2.25 13h7"></path><path stroke-linecap="round" d="M19.25 17v-6.792a2.993 2.993 0 0 0-2.11-2.86v0a3.99 3.99 0 0 0-2.557.069l-.243.09a2.972 2.972 0 0 0-1.792 1.848L12.5 9.5"></path><path d="M19 11.75h-3.713c-2.2 0-3.472 2.496-2.177 4.276a2.247 2.247 0 0 0 2.361.856 7.222 7.222 0 0 0 2.757-1.365L19.5 14.5"></path></g></svg>
                                </div>
                            </div>
                            <div className="flex w-9/12 justify-end">
                                <div className="border-r border-gray-600">
                                    <svg data-aqc="true" aria-hidden="true" viewBox="0 0 20 20" className=" h-4 w-4 mr-1" ><path fill="white" stroke="white" stroke-linejoin="round" stroke-width="1" d="M2.25 2.25 17.75 10l-15.5 7.75v-4.539a1.5 1.5 0 0 1 1.46-1.5l6.54-.171a1.54 1.54 0 0 0 0-3.08l-6.54-.172a1.5 1.5 0 0 1-1.46-1.5V2.25Z"></path></svg>
                                </div>
                                <div>
                                    <svg data-aqc="true" aria-hidden="true" viewBox="0 0 20 20" className=" h-4 w-4"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.75 8 10 11.75 6.25 8"></path></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Main;
