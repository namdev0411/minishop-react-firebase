import React, { useState } from 'react';
import './ProductItem.scss';
import { Alert } from 'reactstrap';

const ProductItem = ({product}) => {
    const{id,name, price,description,imageUrl,stock} = product;
    const [messageIsActive, setmessageIsActive] = useState(false);
    let timeOut;
    const addCartHandle = (event)=>{
        const item = JSON.parse(event.target.value);

        //Active message
        setmessageIsActive(true);
        if(timeOut){
            clearTimeout(timeOut);
        }
         timeOut = setTimeout(()=>{
            setmessageIsActive(false);
        },3000)
    }
    if(product)return (
            <div className="mix col-lg-2 col-md-3 col-sm-6 best">
                <Alert className={!messageIsActive ? "add-message" : "add-message active"} color="primary">
                    Dã thêm sản phẩm vào giỏ hàng
                </Alert>
                <div className="product-item">
                    <figure>
                        <div>
                            <img src={imageUrl} alt=" ...opp"/>
                        </div>
                        <h6 className="product-name">{name}</h6>
                        <div className="pi-meta">
                            <p className="text">{description}</p>
                        </div>
                    </figure>
                    <div className="product-info">
                        <p>{`${price} VND`}</p>
                        <button className="site-btn btn-line" value = {JSON.stringify(product)} onClick={addCartHandle}>ADD TO CART</button>
                    </div>
                </div>
            </div>
    );
    return  <div>Oop...! Không có sản phẩm nào cả</div>
};

export default ProductItem;