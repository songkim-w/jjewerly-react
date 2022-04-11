import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './Cart.scss'



function Cart(){
    let state = useSelector((state)=>state);
    let dispatch = useDispatch();
    let [sum, useSum] = useState(0);
    let history = useHistory();

    return (

      <div className='container cart-container' style={{marginTop: '10rem'}}>
          <h2>Cart</h2>
        <div>
            {
                state.length == 0
                ?<div className='cart-text'>Cart is empty</div>
                :null
            }
        </div>
     

        <Table responsive>
            <tbody>
                {  
                    state.map((a, i)=>{
                        return(
                            <tr key={i}>
                                <td><img src={a.img} onClick={()=>{history.push('/detail/' + a.id)}}  style={{width: '5rem', height: '5rem', objectFit: 'cover'}}></img></td>
                                <td onClick={()=>{history.push('/detail/' + a.id)}}>{a.name}</td>
                                <td>$ {a.price}</td>
                                <td className='cart-control'>
                                    <button className='minus' onClick={()=>{dispatch({type:'minus', data: a.id})}}>-</button>
                                        <span className='price'>{a.quan}</span>
                                    <button className='plus' onClick={()=>{dispatch({type:'plus', data: a.id})}}>+</button>
                                    <button  className='delete' onClick={()=>{dispatch({type:'delete', data: a.id})}}>delete</button>
                                </td>  
                            </tr>

                        )
                    })
                } 

        
                
            </tbody>
           
        </Table>
        <div className='container'>
            {
                state.length === 0
                ? null
                :
                <div className='toal-item-con'>
                    <div>Total</div>
                    <div>$ 
                        {
                        state.reduce(
                            function(a, c){
                                return a + c.price;
                            } , sum
                        )
                        }
                    </div>
                    <button className='buy'>Buy</button>
                </div>
            
            }  
                
        </div>



      </div>
    )
  }

export default Cart