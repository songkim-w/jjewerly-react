import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import { createStore } from 'redux';
import Data from './data';


let defaultState = []

function reducer(state=defaultState, action){

  if(action.type === 'addItem'){

    let order = state.findIndex((a)=>{ return a.id === action.payload.id});
    let dataCopy = [...Data];


    if( order >= 0){

      let copy = [...state];
      
      copy[order].quan++;
      copy[order].price = dataCopy[action.payload.id].price * copy[order].quan;
      
      return copy;
      
    } else{

      let copy = [...state];
      copy.push(action.payload);
      return copy;

    }
    

  }

  if (action.type === 'plus'){
    
    let copy = [...state];
    let check = state.findIndex((a)=>{
      return a.id === action.data;
    });
    let dataCopy = [...Data];
    let id = copy[check].id;
    copy[check].quan++;


    copy[check].price = dataCopy[id].price * copy[check].quan;


    return copy

  } else if(action.type === 'minus'){
   
    let copy = [...state];
    let check = state.findIndex((a)=>{
      return a.id === action.data;
    });
    let dataCopy = [...Data];
    let id = copy[check].id;
    copy[check].quan--;

    copy[check].price = copy[check].price - dataCopy[id].price;

    if(copy[check].quan == 0){
      copy.splice(check, 1)
    }
    return copy

  } 
  
  if (action.type === 'delete'){

    let copy = [...state];
    let check = state.findIndex((a)=>{
      return a.id === action.data;
    });
    copy.splice(check, 1)

      return copy

  } else { 
  return state
  }


}


let store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
