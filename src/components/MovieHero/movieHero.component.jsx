import React from 'react'

//components
import MovieInfo from './movieInfo.component';


const MovieHero = () => {
    return (
        <div>
            {/*mobile*/}
            <div className=" relative md:hidden w-full" style={{ height: "calc(180vw)" }}>
                <div className="absolute z-10 bg-black bottom-0 w-full h-56 bg-opacity-50" />
                <div className="absolute z-20 bottom-4 left-4 ">
                        <MovieInfo />
                    </div>
                <img src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-conjuring-the-devil-made-me-do-it-et00122455-30-09-2021-10-54-16.jpg"
                    alt="poster"
                    className="w-full h-full" />
            </div>

            {/* medium */}
            <div className=" relative hidden md:block w-full lg:hidden" style={{ height: "calc(180vw)" }}>
                <div className="absolute z-10 bg-black bottom-0 w-full h-56 bg-opacity-50" />
                <div className="absolute z-20 bottom-4">
                        <MovieInfo />
                    </div>
                <img src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg"
                    alt="poster:md"
                    className="w-full h-full" />
            </div>

            {/* large */}
            <div className=" relative hidden w-full lg:block" style={{ height: "calc(30rem)" }}>
                <div className="absolute z-10 w-full h-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)" }} />
                
                <div className = "absolute z-30 left-24 top-10 flex items-center gap-10">
                    <div className=" w-64 h-96">
                        <img src="https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg"
                            alt="poster-inlargescreen"
                            className="w-full h-full rounded-xl" />
                    </div>
                    <div>
                        <MovieInfo />
                    </div>
                </div>
                <img src="https://in.bmscdn.com/iedb/movies/images/extra/horizontal_no_logo/mobile/listing/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg"
                    alt="poster:lg"
                    className="w-full h-full" />


            </div>
        </div>
    );
};

export default MovieHero;