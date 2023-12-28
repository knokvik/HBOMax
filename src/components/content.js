import React from 'react'

export default function Content() {
  return (
    <>
       <div class=" transform">

       <div id="overlay" className="hidden w-full h-full bg-opacity-70 bg-black duration-200 backdrop-blur-8"></div>

        <div id="carousel-container" class="  bg-gray-950 flex relative overflow-x-hidden hover:overflow-x-auto  mx-auto mt-[5rem] w-20rem gap-6 px-10 ">
        <div class="carousel-card min-w-[20rem] max-w-[24rem] transition-transform duration-500 ease-in-out shadow-lg">
            <img src="https://w0.peakpx.com/wallpaper/902/32/HD-wallpaper-heimdall-thor-comics-holi-hollywood-idris-elba-marvel-marvel-cinematic-universe-marvel-comics-marvel-movies-movie-movie-poster-orange-poster-thor-ragnarok.jpg" class="max-w-[20rem] rounded-xl"/>
        </div>
        <div class="carousel-card min-w-[20rem] max-w-[20rem] transition-transform duration-500 ease-in-out">
            <img src="https://w0.peakpx.com/wallpaper/433/718/HD-wallpaper-avatar-poster-avatar-poster-blue-hollywood-fantasy.jpg" class="max-w-[20rem] rounded-xl"/>
        </div>
        <div class="carousel-card min-w-[20rem] max-w-[20rem] transition-transform duration-500 ease-in-out overflow-hidden">
            <img src="https://w0.peakpx.com/wallpaper/487/804/HD-wallpaper-spiderman-homecoming-marvel-spider.jpg" class="max-w-[20rem] rounded-xl"/>
        </div>
        <div class="carousel-card min-w-[20rem] max-w-[20rem] transition-transform duration-500 ease-in-out">
            <img src="https://w0.peakpx.com/wallpaper/411/153/HD-wallpaper-loki-thor-marvel-robert-downey-loki-series-iron-man-captain-america-tom-hiddleston-mcu.jpg" class="max-w-[20rem] rounded-xl"/>
        </div>
        <div class="carousel-card min-w-[20rem] max-w-[20rem] transition-transform duration-500 ease-in-out">
            <img src="https://w0.peakpx.com/wallpaper/968/407/HD-wallpaper-captain-america-avengers-civil-war-fire-hero-marvel-sky.jpg" class="max-w-[20rem] rounded-xl"/>
        </div>
        
        </div>



        </div>

    </>
  )
}
