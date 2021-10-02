import React from "react";
import { BiChevronRight, BiSearch, BiMenu , BiChevronDown , BiShareAlt } from "react-icons/bi"; //here we have to write
// first 2 letters of our icon in react-icons/bi here bi is first 
//two letters of bichevronright


const NavSm = () => {
    return (
        <>
            <div className="text-white flex items-center justify-between">
                <div>
                    <h3 className=" text-xl font-bold">It all starts here!!</h3>
                </div>
                <div className="w-8 h-8">
                    <BiShareAlt className="w-full h-full" />
                </div>
            </div>
        </>
    );

};

const NavLg = () => {
    return (
        <>
            <div className="container mx-auto px-4 flex items-center justify-between">
                <div className="flex items-center w-1/2 gap-3">
                    <div className="w-12 h-12">
                        <img src="https://i.ibb.co/zPBYW3H/imgin-bookmyshow-office-android-ticket-png.png"
                            alt="logo" className="w-full h-full" />
                    </div>
                    <div className="w-full bg-white gap-3 flex items-center px-3 py-2 rounded-md">
                        <BiSearch />
                        <input type="search" className="w-full bg-transparent border-none focus:outline-none"
                            placeholder="search for movies,plays,sports and activities" />
                    </div>
                </div>

                <div className = "flex items-center gap-3">
                    <div>
                        <span className="text-gray-200 text-xs flex items-center hover:text-white cursor-pointer ">
                            Jaipur <BiChevronDown />
                        </span>
                    </div>
                    <div>
                        <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">
                            Sign in
                        </button>
                    </div>
                    <div className = "w-8 h-8 text-white">
                        < BiMenu className = "w-full h-full" />
                    </div>
                </div>
            </div>
        </>
    );
};



const MovieNavbar = () => {
    return (
        <>
            <nav className=" absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative lg:bg-bms-700 p-4">
                <div className="md:hidden">{/*for mobile screen*/}<NavSm /></div>
                <div className="hidden md:block lg:hidden">{/*for tab/medium screen*/}<NavSm /></div>
                <div className="hidden w-full lg:flex">{/*for large/pc screen*/}<NavLg /></div>
            </nav>
        </>
    );

};


export default MovieNavbar;