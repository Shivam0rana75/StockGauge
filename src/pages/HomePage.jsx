import React from 'react'
import StockInput from '../Components/StockInput';
import { useSelector , useDispatch } from 'react-redux';
import { InputActions } from '../ReduxState/Store';
import { ChartActions } from '../ReduxState/Store';
import { useNavigate } from 'react-router-dom'; 
const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 


  const input = useSelector(state=>state.input);
  const ChartData = useSelector(state=>state.Charts)
  ;
  function handleAdd(){
    dispatch(InputActions.addInputField())
  }




  async function handleSubmit(event) {
    event.preventDefault();

    const response = await fetch('http://localhost:3000/get-info', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(input)
    });

    const data = await response.json();
    const Fetchedmeta = data.map((obj) => obj.meta);
    const Fetchedvalues = data.map((obj) => obj.values);
    
    dispatch(ChartActions.addDataforCharts({
        meta: Fetchedmeta,
        values: Fetchedvalues
    }));
    
    setTimeout(() => {
        navigate('/chart');
    }, 2000);
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