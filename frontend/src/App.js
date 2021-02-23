import React from 'react'
import {Container} from 'react-bootstrap'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import StudentPage from './pages/StudentPage'
import LenderPage from './pages/LenderPage'
const App = () => {
  return (
    <>
      <Router>
        <Header/>
        <main className='py-3'> 
          <Container>
            <Route path='/studentlogin' component={LoginPage}/>
            <Route path='/lenderlogin' component={LoginPage}/>
            <Route path='/signup/student' component={SignupPage} />
            <Route path='/signup/lender' component={SignupPage} />
            <Route path='/student' component={StudentPage} exact/>
            <Route path='/lender' component={LenderPage} exact/>
            <Route path='/' component={HomePage} exact/>
          </Container>
        </main>
        <Footer/>
      </Router>
    </>
  )
}

export default App
