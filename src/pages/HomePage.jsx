import React from 'react'
import StockInput from '../Components/StockInput';
import { useSelector , useDispatch } from 'react-redux';
import { InputActions } from '../ReduxState/Store';

const HomePage = () => {
  const dispatch = useDispatch();
  
  const input = useSelector(state=>state.input);
  function handleAdd(){
    dispatch(InputActions.addInputField())
  }
  function handleSubmit(event){
    event.preventDefault()
    console.log(input);
  }

  return (
    <div>
        <div className='flex flex-row justify-center items-center'>
              <button onClick={handleAdd}  className='bg-white my-5 mx-5 font-bold font-sans px-2 py-2 rounded-[5px] cursor-pointer hover:bg-amber-200 '>
              Add a field
              </button>
          </div>
          <form action="">


            {input.map((obj) =>  <StockInput key={obj.id} id={obj.id} NameValue = {obj.name}  StartDateValue={obj.StartDate} EndDateValue={obj.EndDate}  />)}
            
            <div className='flex flex-row justify-center items-center'>
              <button onClick={handleSubmit} className='bg-white my-5 font-bold font-sans px-2 py-2 rounded-[5px] cursor-pointer hover:bg-amber-200 '>
              Submit
              </button>
            </div>
          </form>
        

    </div>
  )
}

export default HomePage