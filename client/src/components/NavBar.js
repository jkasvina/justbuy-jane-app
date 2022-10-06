import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useHistory} from 'react-router-dom'
import icon from './icon.ico'
const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <div style={{marginLeft: '16px'}}>
                    <img style={{height: '46px', marginRight: '10px', filter: 'invert(1)'}} src={icon} alt="this is car image" />
                    <NavLink style={{color:'white', fontSize: '32px'}} to={SHOP_ROUTE}>JUST BUY</NavLink>
                    <div style={{color:'white', marginTop: '3px', fontSize: '13px'}}>Телефон: +7(900)833-00-00</div>
                    <div style={{color:'white', fontSize: '13px'}}>Часы работы: 10:00-22:00</div>
                </div>

                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white', flexDirection: 'column'}}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => history.push(ADMIN_ROUTE)}
                            style={{marginBottom: '7px', marginLeft: '8px', width: '150px'}}
                        >
                            Админ панель
                        </Button>
                        <Button
                            variant={"outline-light"}
                            onClick={() => logOut()}
                            className="ml-2"
                            style={{width: '150px'}}
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>

    );
});

export default NavBar;
