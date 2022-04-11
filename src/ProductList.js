import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './ProductList.scss';

function ProductList(props){

    let history = useHistory();

    return(


        <div className='container shop-all--container'>
       


        <div  className='row'>
          {
            props.data.map((a, i) => {
              return(
                

            <div className="col-md-3 product-item" onClick={()=>{history.push('/detail/' + a.id)}} key={i}>
              
                <div>
                <img src={a.img} className='card--img product-list--img'/>
                {props.data[i].status == false
                ? <span className='d-none'>{a.status}</span>
                :<span className='tag'>{a.status}</span>}
                </div>
                <h4>{a.title}</h4>
                <p> $ {a.price}</p>

            </div>
              )


            })
          }


            </div>
        </div>
    )

}; 


export default ProductList