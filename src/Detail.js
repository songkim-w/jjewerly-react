import React from 'react';
import {useHistory, useParams} from 'react-router-dom';
import './Detail.scss';
import {connect} from 'react-redux';

function Detail(props){



    let{id} = useParams();
    let productId = props.data.find(x => x.id == id);

    let history = useHistory();

    



    return(
        <div className="container detail-container">
            <div className="row">
                <div className="col-md-6 img-con">
                <img src={productId.img} className='card--img detail-img'/>
                </div>
                <div className="col-md-6 mt-4">
                <title></title>
                <h4 className="pt-5">{productId.title}</h4>
                <p>{productId.content}</p>
                <p>$ {productId.price}</p>
                <button className="btn order" onClick={()=>{
            
                    props.dispatch({type:'addItem', payload:{id:productId.id, img:productId.img ,name:productId.title, price:productId.price, quan: 1}});
                    history.push('/cart');

                    }}>Add to cart</button> 
                <button className="btn back" onClick={()=>{
                      history.goBack();
                }}>Back</button> 
                </div>
            </div>

        </div>
  

    )
  } 

  function stateData(state){
    return{
        state:state.reducer
    }
    }

  export default connect(stateData)(Detail)