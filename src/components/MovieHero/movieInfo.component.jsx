import React from 'react';

const MovieInfo = () => {
    return (
        <>
            <div className=" flex flex-col gap-3 lg:gap-5">
                <div className="flex items-center gap-3 md:px-4">
                    <div className="w-40 h-8 z-30">
                        <img src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png"
                            alt="premier"
                            className="w-full h-full"
                        />
                    </div>
                    <span className="bg-bms-700  text-white text-xs rounded-md p-1">Streaming Now</span>

                </div>
                <h1 className=" hidden lg:block text-white lg:text-5xl font-bold">Justice League </h1>
                <div className="flex flex-col-reverse lg:flex-col  lg:gap-5 gap-3 ">
                    <div className="text-white font-light flex-col flex gap-2 md:px-4">
                        <h4>4k &bull; English  &bull; Action </h4>
                        <h4>1h 53m  &bull; Action , Sci fi , thriller &bull; 13+</h4>
                    </div>

                    <div className="flex items-center gap-3 md:px-4 md:w-screen lg:w-full">
                        <button className="bg-red-600 rounded-lg  w-full py-2 font-semibold text-white  ">
                            Rent ₹149
                        </button>
                        <button className="bg-red-600 rounded-lg w-full py-2 font-semibold text-white  ">
                            Buy ₹149
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MovieInfo;
