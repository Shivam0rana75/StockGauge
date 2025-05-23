import { configureStore , createSlice } from "@reduxjs/toolkit";


const initialInputValue = {id: crypto.randomUUID()  , name : '' , StartDate : undefined , EndDate : undefined} ;

const initialValueForCharts = {meta : [] , values : []}


const InputSlice = createSlice({
    name : 'Input Values',
    initialState : [initialInputValue],
    reducers : {
        addInputField(state){
            state.push({id: crypto.randomUUID()  , name : '' , StartDate : undefined , EndDate : undefined})
        },
        removeInputField(state , action){
            const target = state.findIndex((item)=> item.id ==action.payload.id)
            if(state.length >1){
                state.splice(target , 1)
            }
            
        },
        updateInputField(state , action ){
            const {id , name , value} = action.payload;
            const target = state.findIndex((item)=> item.id==id);
            if(target !==-1){
                state[target][name] =value;
            }
        }

    }
})


const ChartSlice = createSlice({
    name : 'DataForCharts' ,
    initialState :  initialValueForCharts ,
    reducers : {
        addDataforCharts(state , action){
            const {meta , values} = action.payload;
            state.meta = meta;
            state.values = values

        }
    }
})




const Store = configureStore({
    reducer : {
        input : InputSlice.reducer,
        Charts : ChartSlice.reducer
    }
})

export default Store ;
export const InputActions = InputSlice.actions;
export const ChartActions = ChartSlice.actions