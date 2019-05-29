import React from 'react';
import Navbar from '../navBar'
import Footer from '../footer';

class about extends React.Component{
    state={}



    render(){
        return (
            <div className='cont'>
                <Navbar/>
                <div className='mainCont'>
                    <div className='wrapper2'>
                        <h3 className='header'>About us</h3>
                    </div>
                    <div className='wrapper'>
                        <div className='block' style={{width:"50%"}}>
                            <p className='paragraph'>
                            End Time Harvest Productions (ETH) is a Minnesota based video production and film
                            company. Since 2009 ETH has made constructive social criticism pieces such as ‘Boys
                            Cry’ and ‘Bound: Africans vs. African Americans’. ETH also works closely on many
                            levels with multiple facets of local government, including the Brooklyn Center School
                            District and Police Department,  to promote community relations and effect social
                            change.
                            </p>
                        </div>
                    </div>
                    <div className='wrapper'>
                        <div className='block'>
                            <div className='ourTeam'>
                                <ul>
                                    <li>Production Team</li>
                                    <li>Marketing Team</li>
                                    <li>Production Team</li>
                                    <li>Production Team</li>
                                </ul>
                            </div>
                        </div>
                    </div>


                </div>
                <Footer />
            </div>
        )
    }
}
export default about;