import React from 'react';
import { Col, Container, Row, Nav, NavLink } from 'reactstrap';
import '../Header/Header.scss';
import { useState } from 'react';
const Header = props => {
    const [scrollTop, setscrollTop] = useState(false)
    const cartToggle = ()=>{
    }
        const changeBackground = ()=>{
           if(window.pageYOffset>0){
               setscrollTop(true);
               return;
           }
           setscrollTop(false);
        }
        window.addEventListener("scroll",changeBackground);
    return (
        <header className={!scrollTop?"header":"header scroll"}>
            <Container >
                <Row className="container-fluid justify-content-center mt-3">
                    <Col>
                        <h3 className="title">HÀNG NHẬT</h3>
                    </Col>
                    <Col>
                        <Nav pills className="nav-bar">
                            <NavLink href="/">Home</NavLink>
                            <NavLink href="/Home">Mua</NavLink>
                            <NavLink href="/buyforme">Dịch vụ mua hộ</NavLink>
                            <NavLink href="/gopy">Góp ý</NavLink> 
                            <div className="cart-icon" onClick={cartToggle}>
                                <i className="fas fa-shopping-cart"></i>
                                <p className="cart-count">{2}</p>
                            </div>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default Header;