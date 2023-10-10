import axios from 'axios';
import React, { useEffect, useState,useContext } from 'react'
import { InputContext } from '../App';
import MeaningList from './MeaningList';
import ExampleList from './ExampleList';
import Synonym from './Synonym';
import Antonym from './Antonym';

const ResultList = () => {

    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { inputValue, setInputValue} = useContext(InputContext);

    const fetdata = async () => {
        
        try{
            setLoading(true);

            const res = await axios(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`);
            setResponse(res.data);
            setError(null);
        }
        catch(err){
            setError(err);
        }
        finally{
            setLoading(false);
        }
    }

    useEffect( () => {

        if( inputValue.length){
            fetdata();
        }
    },[inputValue]);

    console.log("response",response);

    if(loading){
        return <h3 className='mt-10 font-semibold text-center text-gray-600 text-2xl'>
            Loading...
        </h3>
    }

    if( error){
        return <h3 className='mt-10 font-semibold text-center text-gray-600 text-2xl'>
            No Definisions Found 😢
        </h3>
    }

  return (
    <div  className='container mx-auto p-4 max-w-2xl'>

        

            {
                response && (
                    <div className="">
                    <h3 className="mt-4 text-2xl font-bold">
                    Meaning & Definisions:
                    </h3>
                    <MeaningList mean={response}></MeaningList>

                    <h3 className="mt-4 text-2xl font-bold">
                        Example:
                    </h3>
                    <ExampleList mean={response}></ExampleList>

                    <h3 className="mt-4 text-2xl font-bold">
                        Synonym:
                    </h3>
                    <Synonym mean={response}></Synonym>

                    <h3 className="mt-4 text-2xl font-bold">
                        Antonym:
                    </h3>
                    <Antonym mean={response}></Antonym>
                    </div>
                )
            }

      
    </div>
  )
}

export default ResultList
