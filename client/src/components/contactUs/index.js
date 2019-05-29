import React from 'react';
import NavBar from '../navBar';
import Footer from '../footer';

class Contact extends React.Component{
    state={};


    render(){
        return (
            <div className='cont'>
                <NavBar/>
                <div className='mainCont'>
                    <div className='wrapper2'>
                        <h3 className='header'>Contact</h3>
                    </div>
                    <div className='wrapper'>
                    <form>
                          <div class="form-row">
                            <div class="form-group col-md-6">
                              <label for="inputEmail4">Name</label>
                              <input type="text" class="form-control" id="inputEmail4" placeholder="John Smith"/>
                            </div>
                            <div class="form-group col-md-6">
                              <label for="inputPassword4">Email</label>
                              <input type="email" class="form-control" id="inputPassword4" placeholder="jonSmith@gmail.com"/>
                            </div>
                          </div>
                          <div class="form-group">
                            <label for="inputAddress">Address</label>
                            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                          </div>
                          <div class="form-group">
                            <label for="inputAddress">Message</label>
                            <textarea class="form-control" aria-label="With textarea"></textarea>
                          </div>
                          
                          <button type="submit" class="btn btn-primary" >Submit</button>
                        </form>
                    </div>
                
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Contact;