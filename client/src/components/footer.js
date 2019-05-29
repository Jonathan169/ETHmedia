import React from 'react';

class footer extends React.Component{
    state={};


    render(){
        return(
            <div className="footer">
                {/* <div className='footerDiv'>
                <h4 style={{color:'white'}}>Connect with ETH Entertainment</h4>
                </div> */}
                <div className='footerDiv'>
                    <i class="fab fa-facebook-square"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-vimeo"></i>
                </div>
            </div>
        )
    }
}
export default footer;