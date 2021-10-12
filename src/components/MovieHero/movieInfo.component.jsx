import React  , {useContext, useState } from 'react';

//components
import PaymentModal from '../PaymentModal/Payment.component';


//context
import { MovieContext } from '../../context/movie.context';

const MovieInfo = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [price, setPrice] = useState(0);

    const {movie} = useContext(MovieContext);
     // optional chaining.
  const genres = movie.genres?.map(({ name }) => name).join(", ");


  const rentMovies = () => {
    setIsOpen(true);
    setPrice(149);
  };

  const buyMovies = () => {
    setIsOpen(true);
    setPrice(599);
  };
    return (
        <>
        <PaymentModal setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
            <div className=" flex flex-col gap-3 lg:gap-5">
                <div className="flex items-center gap-3 md:px-4">
                    <div className="w-40 h-8 z-30">
                        <img src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png"
                            alt="premier"
                            className="w-full h-full "
                        />
                    </div>
                    <span className="bg-bms-700  text-white text-xs rounded-md p-1">Streaming Now</span>

                </div>
                <h1 className=" hidden lg:block text-white lg:text-5xl font-bold">{movie.original_title} </h1>
                <div className="flex flex-col-reverse lg:flex-col  lg:gap-5 gap-3 ">
                    <div className="text-white font-light flex-col flex gap-2 md:px-4">
                        <h4>4k &bull; {movie.original_language}</h4>
                        <h4>{(movie.runtime / 60).toFixed(2)} h  &bull; {genres} &bull; 13+</h4>
                    </div>

                    <div className="flex items-center gap-3 md:px-4 md:w-screen sm:w-screen lg:w-full">
                        <button  onClick={rentMovies} className="bg-red-600 rounded-lg  w-full py-2 font-semibold text-white  ">
                            Rent ₹149
                        </button>
                        <button   onClick={buyMovies} className="bg-red-600 rounded-lg w-full py-2 font-semibold text-white  ">
                            Buy ₹599
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MovieInfo;
