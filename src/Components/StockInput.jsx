import React from 'react'
import { useDispatch } from 'react-redux'
import { InputActions } from '../ReduxState/Store';
const StockInput = ({id  , StartDateValue , EndDateValue}) => {
  const dispatch = useDispatch();
  function handleInputChange(e){
    const {name , value } = e.target;
    dispatch(InputActions.updateInputField({id  , name , value}));
  }

  function handleRemove(){
    dispatch(InputActions.removeInputField({id : id}))
  }
  const maxDate = new Date().toISOString().split("T")[0];
  return (
    
          <div className='font-sans flex flex-row justify-center  text-white font-bold '>
              <div className='mx-4 my-5 flex flex-col justify-center items-center'>
                <label htmlFor="Stock">Write the name of Stock </label>
                <input type="text" name='name'  onChange={handleInputChange} className='bg-amber-100 text-black mx-1' />
              </div>
              
              <div className='mx-4 my-5 flex flex-col justify-center items-center '>
                <label htmlFor="Interval">Start Date</label>
                <input type="date" name='StartDate' max={maxDate} value={StartDateValue} onChange={handleInputChange} className='bg-amber-100 text-black mx-1' />
              </div>
              <div className='mx-4 my-5 flex flex-col justify-center items-center'>
                <label htmlFor="Interval">End Date</label>
                <input type="date" name='EndDate' max={maxDate} value={EndDateValue} onChange={handleInputChange}  className='bg-amber-100 text-black mx-1' />
              </div>
              <button onClick={handleRemove} className='bg-white my-5 font-bold text-black font-sans px-2 py-2 rounded-[5px] cursor-pointer hover:bg-amber-200 '>
              Remove this field 
              </button>
          </div>
            
            
            
            
        
  )
}

export default StockInput