import React, { useEffect, useState } from 'react';

export default function Other({ title }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://www.omdbapi.com?apikey=b6003d8a&s=${title}`);
        const data = await response.json();

        if (data.Search) {
          setMovies(data.Search);
        } else {
          console.error('Error fetching data from OMDB API');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [title]); // Include title in the dependency array to run the effect when title changes

  return (
    <div className="bg-gray-950 pb-6 pt-8 overflow-x-hidden hover:overflow-x-auto">
      <p className='font-[Poppins] text-white text-3xl pb-8 text-gray-300 px-12'>{title}</p>
      <div className="bg-gray-950 flex relative mx-auto w-20rem gap-6 px-10">
        {movies.map((movie, index) => (
          <div key={index} className="rounded shadow transform transition-transform hover:scale-105">
            <img src={movie.Poster} alt={movie.Title} className='max-w-[14rem] rounded-lg'/>
            <div className="bg-black bg-opacity-50 absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"></div>
          </div>
        ))} 
      </div>
    </div>
  );
}
