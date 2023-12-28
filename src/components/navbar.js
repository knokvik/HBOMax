import React, { useEffect } from 'react';
import { redirect } from 'react-router-dom';

export default function Navbar() {
  useEffect(() => {
    const ham = document.getElementById('ham');
    const overlay = document.getElementById('overlay');
    const sidebar = document.getElementById('sidebar');
    const cancel = document.getElementById('cancel');
    const search = document.getElementById('search');
    const searchover = document.getElementById('searchover');
    const searchbtn = document.getElementById('searchbtn');

    const searchClick = () => {
      searchover.classList.toggle('hidden');
    };

    const handleHamClick = () => {
      sidebar.classList.toggle('hidden');
      overlay.classList.toggle('hidden');
    };

    const handleCancelClick = () => {
      overlay.classList.toggle('hidden');
      sidebar.classList.toggle('hidden');
    };

    if(search) {
      searchbtn.addEventListener('click', searchClick)
    }

    if (ham) {
      ham.addEventListener('click', handleHamClick );
    }

    if (cancel) {
      cancel.addEventListener('click', handleCancelClick);
    }

    if(searchover) {
      searchover.addEventListener('click',search)
    }

    // Cleanup event listeners on component unmount
    return () => {
      if (ham) {
        ham.removeEventListener('click', handleHamClick);
      }

      if (cancel) {
        cancel.removeEventListener('click', handleCancelClick);
      }
    };
  }, []); // Empty dependency array ensures this runs once after the initial render

  return (
    <>
       <div
        id="overlay"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.7)',
          zIndex: 5,
          backdropFilter: 'blur(8px)',
        }}
        className="hidden duration-200 animate__animated animate__fadeIn animate__faster " 
      >
      </div>

      <div
        id="searchover"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.7)',
          zIndex: 5,
          backdropFilter: 'blur(8px)',
        }}
        className="hidden duration-200  animate__animated animate__fadeIn animate__faster " 
      >
      </div>

      <div className="z-30 flex flex-row px-8 items-center justify-between justify-center gap-8 fixed w-full top-0 shadow-2xl duration bg-gray-950">
        <img src="hbo-max-logo-black-removebg-preview.png" className="mt-1 w-auto h-[5rem] shadow-lg" />
        
        <input
          className="hidden xl:block lg:block border border-2 border-gray-500 bg-gray-950 rounded-xl h-[2.8rem] text-white w-full px-3 py-3 pl-6"
          placeholder="Find your favorite movies..."
        />
    
        <nav className="flex flex-row items-center justify-center gap-6">
          <button id='searchbtn'>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROQakCMNcan2gsrmT25lIz7nWgznfcxs4OJg&usqp=CAU"
            className= " cursor-pointer w-[3.5rem] rounded-full border border-2 border-gray-600 p-1"
          />
          </button>
          <svg
            id="ham"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="cursor-pointer text-gray-300 w-auto h-11"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </nav>
      </div>

      <div
        id="sidebar"
        className="hidden animate__animated animate__fadeInDown animate__faster fixed top-[5rem] duration-500 right-[42%] pt-4 z-30 flex flex-col gap-7 items-center justify-center text-left p-6 max-w-[16rem]  w-full"
      >
        <svg id="cancel" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" cursor-pointer  text-white w-8">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
   
   <a class="text-gray-300 text-3xl transition-all duration-300 hover:text-3xl hover:text-gray-400 hover:duration-300 cursor-pointer">Home</a>
   <a class="text-gray-300 text-3xl transition-all duration-300 hover:text-3xl hover:text-gray-400 hover:duration-300 cursor-pointer">Shop</a>
   <a class="text-gray-300 text-3xl transition-all duration-300 hover:text-3xl hover:text-gray-400 hover:duration-300 cursor-pointer">Contact</a>
   <a class="text-gray-300 text-3xl transition-all duration-300 hover:text-3xl hover:text-gray-400 hover:duration-300 cursor-pointer">Support</a>
   <a class="text-gray-300 text-3xl transition-all duration-300 hover:text-3xl hover:text-gray-400 hover:duration-300 cursor-pointer">Paid</a>   
   <a class="text-gray-300 text-3xl transition-all duration-300 hover:text-3xl hover:text-gray-400 hover:duration-300 cursor-pointer">Store</a>   
   <a class=" pt-6 text-gray-300 text-3xl transition-all duration-300 hover:text-3xl hover:text-gray-400 hover:duration-300 cursor-pointer">Log Out</a>

      </div>

      <div id='search' className=' flex items-center z-50 justify-center'>
      <input
          className=" border border-2 border-gray-500 bg-gray-950 rounded-xl h-[2.8rem] text-white w-full px-3 py-3 pl-6"
          placeholder="Find your favorite movies..."
        />
      </div>

      
    </>
  );
}
