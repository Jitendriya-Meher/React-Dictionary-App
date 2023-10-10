import React, { useContext, useState } from 'react'
import { InputContext } from '../App';

const Header = () => {

    const [value,setValue] = useState(""); 
    const { inputValue, setInputValue} = useContext(InputContext);

    const handleChange = (e) => {
        setValue( e.target.value );
    }

    const handleSubmit = () => {

        setInputValue(value);
        setValue("");
    }

    const handleKeyDown = (e) => {

        if( e.key === 'Enter' ) {
            setInputValue(value);
            setValue("");
        }
    }

  return (
    <div className='bg-gray-700 relative'>
      
      <div className="container mx-auto py-8">

        <h1 className="text-3xl font-bold text-center text-white">
            Dictionary App
        </h1>
        <p className='text-center mt-1 mb-10 text-slate-300 text-lg'>
            Find definisions for word
        </p>

        <div className="flex items-center justify-center mt-5">
            <div className="flex border-2 border-gray-200 rounded">

                <input type="text" placeholder='Search...' className='px-4 py-2 md:w-80 outline-0'
                value={value} onChange={handleChange} onKeyDown={handleKeyDown}
                 />

                <button className='bg-blue-500 border-0 outline-0 px-4 py-2 text-white active:scale-95 active:bg-gray-700 hover:bg-blue-600'
                onClick={handleSubmit}
                >
                    Search
                </button>
            </div>
        </div>

       {
            inputValue &&  <h3 className="text-center mt-4 text-gray-50">
                Result for: <span className='text-white font-bold'>{inputValue}</span>
            </h3>
       }

      </div>

      <div className=" absolute bottom-2 right-4 text-gray-300 text-md">
        Created By Jitendriya Meher
      </div>
    </div>
  )
}

export default Header