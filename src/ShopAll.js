import React from 'react';
import {useHistory, useParams} from 'react-router-dom';


function ShopAll(props){


    return(
        <div className='container shop-all--container'>
          <div className='row'>
            {   
                props.data.map((a, i)=>{
                    return<div className="col-md-3 position-relative">
                            <img src={props.data[i].img} className='card--img product-list--img'/>
                            {props.data[i].status == false
                            ? <span className='d-none'>{props.data[i].status}</span>
                            :<span className='tag'>{props.data[i].status}</span>}
                            <h4>{props.data[i].title}</h4>
                            <p> $ {props.data[i].price}</p>
                        </div>
                })
            }
         </div>
        </div>
    )

}; 

export default ShopAll