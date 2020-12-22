import React from 'react';
import './Cart.scss';
import CartItem from './components/CartItem/index'
import { useState ,useEffect} from 'react';
import Pagination from '@material-ui/lab/Pagination';
const Cart = props => {
	const [wasShopping, setWasShopping] = useState(false);
	const [count, setCount] = useState(0);
	const [perPage, setPerPage] = useState(3)
	const [page, setPage] = useState(1);

	const handleChangePage = (event,value)=>{
		setPage(value);
	}
	const toggleCartHandle = ()=>{
		setWasShopping(false);
	
	}
	const onShopping = ()=>{
		alert('order sucessfull !');
		setWasShopping(true);
	}
	const onChangeValue =(data)=> {
	}
	const deleteCart = (id)=>{
	}
	// const tbodyContent = ()=>{
	// 	let value = [];
	// 	let lastPage = count;
	// 	if(cart.length>3&&page<lastPage){
	// 		for(let i=perPage*page-perPage; i<perPage*page;i++){
	// 			value.push(<CartItem key={i} item = {cart[i]} onChangeValue={onChangeValue} deleteCart={deleteCart}/>);
	// 		}
	// 	}else{
	// 		for(let i=perPage*page-perPage; i<cart.length;i++){
	// 			value.push(<CartItem key={i} item = {cart[i]} onChangeValue={onChangeValue} deleteCart={deleteCart}/>);
	// 		}
	// 	}
	// 	return value;
	// }
	let content;
	if(!wasShopping){
		content = (
			<div>
				<div className="table cart-table table-responsive-sm">
					<table>
						<thead>
							<tr>
								<th className="product-th" scope="col">Sản Phẩm</th>
								<th scope="col">Giá tiền</th>
								<th scope="col">Số lượng</th>
								<th scope="col" className="total-th">Tất cả</th>
								<th scope="col"></th>
							</tr>
						</thead>
							{/* {
								tbodyContent()
							} */}
					</table>
				</div>
				<div className="row">
					<div className="cart-buttons">	
						{/* <div className={cart.length>0?"btn btn-outline-danger btn-shopping":"btn btn-secondary disabled btn-shopping"}
							onClick = {onShopping}
							>Đặt hàng ngay
						</div> */}
					</div>
				</div>
				<div className="pagination">
					<Pagination count={count} page={page} onChange ={handleChangePage} color="primary" />
				</div>
			</div>
		);
	}else{
		content = <h1>Dat hang thanh cong</h1>
	}
    return (
    <div className={"page-area cart-page spad cart"}>
		<div className="container">
			<div className="close" 
				// onClick={toggleCartHandle}
			><i className="fas fa-times">
			</i></div>
				{content}
		</div>
	</div>
	);
};

export default Cart;