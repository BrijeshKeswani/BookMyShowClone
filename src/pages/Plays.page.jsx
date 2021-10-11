import React from 'react'

//components
import Poster from '../components/Poster/Poster.component';
import PlaysFilters from '../components/PlaysFilters/PlaysFilters.component';


const Plays = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="w-full flex items-center gap-10">
          <div className="border-2 border-red-400 rounded-lg flex px-4 w-20">
            <span>Today</span>
          </div>
          <div className="border-2 border-red-400 rounded-lg flex px-4 w-20">
            <span>Tomorrow</span>
          </div>
          <div className="border-2 border-red-400 rounded-lg flex px-4 w-20">
            <span>Today</span>
          </div>
          <div className="border-2 border-red-400 rounded-lg flex px-4 w-20">
            <span>Today</span>
          </div>
        </div>
        <div className="w-full lg:flex lg:flex-row-reverse">
          <div className="lg:w-3/4">
            <h2 className="text-2xl font-bold mb-4">Plays in Bengaluru</h2>
            <div className="flex flex-wrap ">
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNyBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309696-fsqhgswrqc-portrait.jpg"
                  title="`Kanthamathi` (Sadarame) Surabhi Theatre Play"
                  subtitle="Telugu -> ₹400"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNyBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309696-fsqhgswrqc-portrait.jpg"
                  title="`Kanthamathi` (Sadarame) Surabhi Theatre Play"
                  subtitle="Telugu -> ₹400"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNyBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309696-fsqhgswrqc-portrait.jpg"
                  title="`Kanthamathi` (Sadarame) Surabhi Theatre Play"
                  subtitle="Telugu -> ₹400"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNyBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309696-fsqhgswrqc-portrait.jpg"
                  title="`Kanthamathi` (Sadarame) Surabhi Theatre Play"
                  subtitle="Telugu -> ₹400"
                />
              </div>
            </div>
          </div>

          <div className="w-3/12">
            <h2 className="text-2xl font-bold mb-4">Filters</h2>

            <div className="py-4">
              <PlaysFilters title="Date" tags={["Today", "Tomorrow", "This Weekend"]} />
            </div>
            <div className="py-4">
              <PlaysFilters title="Language" tags={["English", "Hindi", "Kannada"]} />
            </div>
            <div className="py-4">
              <PlaysFilters title="Categories" tags={["Theatre"]} />
            </div>
            <div className="py-4">
              <PlaysFilters title="Genres" tags={["Drama", "Comedy", "Romance", "Action"]} />
            </div>
            <div className="py-4">
              <PlaysFilters title="More Filters" tags={["Online Streaming"]} />
            </div>

          </div>


        </div>
      </div>
    </>
  );
};

export default Plays;