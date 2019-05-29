import React from 'react';

class NavBar extends React.Component{
    state={};



    render(){
        return(
            <div className='wrapper rnt'>
            <div className='nav'>
                <div className='centerTxt'>
                    <a href='/' style={{textDecoration:'none'}}><h3 className='navItem navTitle'> ETH Media and Advertising</h3></a>
                    <i className="fas fa-bars ham"></i>
                </div>
                <div className='navigators'>
                    <a href='/'><p className='navItem'>Home</p></a>
                    <a href='/about'><p className='navItem'>About us</p></a>
                    <a href='/services'><p className='navItem'>Services</p></a>
                    <a href='/community'><p className='navItem'>Comunity Engagement</p></a>
                    <a href='/portfolio'><p className='navItem'>Portfolio</p></a>
                    <a href='/contact'><p className='navItem'>Contact Us</p></a>
                </div>
            </div>
            </div>
        )
    }
}
export default NavBar;