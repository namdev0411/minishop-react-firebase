import React from 'react';
import ProductItem from './components/ProductItem/index';
import './Products.scss';
import Topic from 'components/Topic';
import useFirestore from '../../hooks/useFirestore';

const Products = props => {
    const products = useFirestore("products");

    const content = products.map((product,index)=>
        <ProductItem key={index} product={product}/>
    );
    return (
        <div>
            <Topic/>
            <section className="product-section spad">
                <div className="container">
                    <ul className="product-filter controls">
                        <li className="control" data-filter=".new">Sản phẩm mới</li>
                        <li className="control" data-filter="all" >Khuyên dùng</li>
                        <li className="control" data-filter=".best">Bán chạy</li>
                    </ul>
                    <div className="row" id="product-filter">
                        {content}
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Products;
