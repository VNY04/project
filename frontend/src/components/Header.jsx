import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Navbar,Nav,NavDropdown,NavLink} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { logoutStudent } from '../actions/studentActions'
import { logoutLender } from '../actions/lenderActions'

const Header = ({history}) => {

    const dispatch=useDispatch()
    const studentLogin=useSelector(state=>state.studentLogin)
    const{studentInfo}=studentLogin
    
    const lenderLogin=useSelector(state=>state.lenderLogin)
    const{lenderInfo}=lenderLogin

    const studentLogoutHandler=()=>{
        dispatch(logoutStudent())
    }

    const lenderLogoutHandler=()=>{
        dispatch(logoutLender())
    }

    return (
        <header>

            { studentInfo ? (
            <Navbar bg='dark' variant='dark' collapseOnSelect expand='lg'>
                <LinkContainer to='/'>
                    <Navbar.Brand>{studentInfo.name}</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ml-auto'>
                    <LinkContainer to='/student/applyforloan'><NavLink >Apply For Loan</NavLink></LinkContainer>
                    <LinkContainer to='/student/myactivity'><NavLink >My Activity</NavLink></LinkContainer>
                    <LinkContainer to='/student/settings'><NavLink >Settings</NavLink></LinkContainer>
                    <LinkContainer to='/student/profile'><NavLink >Profile</NavLink></LinkContainer>
                    <LinkContainer to='/'><NavLink onClick={studentLogoutHandler}>Logout</NavLink></LinkContainer>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            ):lenderInfo ? ( 
            <Navbar bg='dark' variant='dark' collapseOnSelect expand='lg'>
                <LinkContainer to='/'>
                    <Navbar.Brand>{lenderInfo.name}</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ml-auto'>
                        <LinkContainer to='/lender/applyforloan'><NavLink >Grant Loan</NavLink></LinkContainer>
                        <LinkContainer to='/lender/myactivity'><NavLink >My Activity</NavLink></LinkContainer>
                        <LinkContainer to='/lender/settings'><NavLink >Settings</NavLink></LinkContainer>
                        <LinkContainer to='/lender/profile'><NavLink >Profile</NavLink></LinkContainer>
                        <LinkContainer to='/'><NavLink onClick={lenderLogoutHandler}>Logout</NavLink></LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>):(
                <Navbar bg='dark' variant='dark' collapseOnSelect expand='lg'>
                <LinkContainer to='/'>
                    <Navbar.Brand>Micro Loan Management</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ml-auto'>
                        <NavDropdown title='login'>
                            <LinkContainer to='/studentlogin'>
                                <NavDropdown.Item>Student</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to='/lenderlogin'>
                                <NavDropdown.Item>Lender</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            )
            }
            
        </header>
            
    )
}

export default Header
