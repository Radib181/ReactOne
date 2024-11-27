import React from 'react';
import Videoo from "../images/Videoo.png"

function VideoAdd() {
  return (
    <div>
      <h1 className='text-center text-2xl md:text-5xl font-semibold mb-7 animate-bounce'>Use illustrations in UI design</h1>
      <img
        className='items-center mx-auto md:h-[520px] md:w-[920px] w-[460px] h-[290px] bg-gray-900 rounded-2xl'
        src= {Videoo}
        alt="Illustration in UI design"
      />
    </div>
  );
}

export default VideoAdd;


