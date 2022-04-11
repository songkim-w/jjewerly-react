import React from 'react';
import { Link } from 'react-router-dom';
import './Search.scss';


function ProductList(props){

    let id = props.data.id;
    let detailId = `/detail/` + id;


    return(
        
            <div className="col-md-3 position-relative">
                <Link to ={detailId}>
                <img src={props.data.img} className='card--img product-list--img'/>
                {props.data.status == false
                ? <span className='d-none'>{props.data.status}</span>
                :<span className='tag'>{props.data.status}</span>}
                <h4>{props.data.title}</h4>
                <p> $ {props.data.price}</p>
                </Link>
            </div>
    )

}; 

export default ProductList