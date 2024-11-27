import React from 'react'
import img9 from "../images/img9.jpg"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import img10 from "../images/img10.jpg"
function Time() {
  return (
    <div>
      <section className='mt-28'>
        <div className='flex flex-col-reverse lg:flex-row items-center justify-between mx-auto py-24 px-6 lg:px-16 mx-w-[1400] '> 

          <div className='flex-1 items-start'>
          <img className='w-full h-auto max-w-lg rounded-2xl  ' src={img9} alt=""/>
          </div>

        {/* Right side Code */}
          <div className='flex flex-1 flex-col gap-3 '>
        <h1 className='mb-3 font-semibold md:text-2xl sm:text-4xl lg:text-6xl max-w-lg  text-xl'>Make more time for the work</h1>

        <p className=' text-black text-lg '><CheckCircleIcon className='text-green-400 me-2'></CheckCircleIcon>
        <span> Many ways to use illustrations in design </span>
        </p>

        <p className='1 text-black text-lg '><CheckCircleIcon className='text-green-400 me-2' ></CheckCircleIcon>
        <span> Simply explained with illustrations  </span>
        </p>

        <p className=' text-black text-lg '><CheckCircleIcon className='text-green-400 me-2' ></CheckCircleIcon>
        <span> Make more time for the work </span>
        </p>

        <div>
          
        <button className="bg-[#5F62E226]  px-4 py-2 mt-9 rounded-lg hover:bg-indigo-500 font-semibold  bg-indigo-700 hover:text-white transition duration-150 ease-out hover:ease-in ">
        Learn more
            <ArrowForwardIcon   sx={{ fontSize: 24 }} />
          </button>
        </div>
    </div>
        </div>




{/* Section 2222 */}
      </section>
      <section className='-mt-11 '>
        <div className='flex flex-col lg:flex-row items-center justify-between mx-auto py-24 px-6 lg:px-16 mx-w-[1400] space-x-40 ml-12 '> 
{/* 
          <div className='flex-1 items-start'>
          <img className='w-full h-auto max-w-lg rounded-2xl ' src={img9} alt=""/>
          </div> */}
                 <div className='flex flex-1 flex-col gap-3 '>
        <h1 className='mb-3 font-semibold md:text-2xl sm:text-4xl lg:text-6xl max-w-lg  text-xl'>Make more time for the work</h1>

        <p className=' text-black text-lg '><CheckCircleIcon className='text-green-400 me-2'></CheckCircleIcon>
        <span> Many ways to use illustrations in design </span>
        </p>

        <p className='1 text-black text-lg '><CheckCircleIcon className='text-green-400 me-2' ></CheckCircleIcon>
        <span> Simply explained with illustrations  </span>
        </p>

        <p className=' text-black text-lg '><CheckCircleIcon className='text-green-400 me-2' ></CheckCircleIcon>
        <span> Make more time for the work </span>
        </p>

        <div>
          
        <button className="bg-[#5F62E226]  px-4 py-2 mt-9 rounded-lg text-indigo-500 font-semibold  hover:bg-indigo-700 hover:text-white transition duration-150 ease-out hover:ease-in ">
        Learn more
            <ArrowForwardIcon   sx={{ fontSize: 24 }} />
          </button>
        </div>





          </div>


        {/* Right side Code */}
          
          <div className='flex-1   w-full items-center mx-auto flex-col mt-3 '>
          <img className='w-full cursor-pointer hover:animate-spin -ml-16 h-auto max-w-lg rounded-2xl  items-center ' src={img10} alt=""/>
          </div>


        </div>

      </section>

    </div>
  )
}

export default Time