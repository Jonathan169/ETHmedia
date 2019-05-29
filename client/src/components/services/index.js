import React from 'react';
import NavBar from '../navBar';
import Footer from '../footer';

class services extends React.Component{
    state={};



    render(){
        return(
            <div className='cont'>
                <NavBar />
                <div className='mainCont'>
                    <div className='wrapper2'>
                        <h3 className='header'>Services</h3>
                    </div>
                    <div className='wrapper'>
                        <div className='block'>
                            <video  height='400' style={{width:'100%'}} controls>
                                <source src={process.env.PUBLIC_URL+'assets/images/reel.mp4'} type='video/mp4'/>
                            </video>
                        </div>
                    </div>
                    <div className='wrapper'>
                            <div className='serviceImage'>
                                <img alt='pic' className='cardImage' src={process.env.PUBLIC_URL+'/assets/images/image1.png'} />
                            </div>
                            <div className='serviceInfo' style={{textAlign:'end'}}>
                                <h2 >Video Production</h2>
                                <p style={{marginTop:'1.5rem'}} className='paragraph'>From concept to delivery, we help you create dynamic, 
                                    effective and engaging videos. Our clients have included 
                                    marketing agencies, ad firms, large corporations, small 
                                    businesses, and out of town clients looking for dependable 
                                    camera crews and professional production facilities.</p>
                            </div>                            
                    </div>
                    {/* <div className="wrapper gifs" style={{backgroundImage:`url(`+process.env.PUBLIC_URL+`'assets/images/video.gif')`}}>
                        
                    </div> */}
                    <div className='wrapper' style={{backgroundColor:'#1f1f1f'}}>
                            <div className='serviceInfo'>
                                <h2 style={{color:'white'}}>Aerial Videography</h2>
                                <p style={{marginTop:'1.5rem',color:'white'}} className='paragraph'>
                                    The drones are here! Unmanned Aerial Systems (UAS) 
                                    allow filmmakers and videographers to get the shots 
                                    we used to dream about. Token Media flies on the cutting 
                                    edge of this exciting technology. Let our experienced 
                                    pilots help you navigate the safety, legal and liability 
                                    issues inherent in this new technology.</p>
                            </div>
                            <div className='serviceImage'>
                                <img alt='pic' className='cardImage' src={process.env.PUBLIC_URL+'/assets/images/image1.png'} />
                            </div>
                    </div>
                    <div className='wrapper'>
                            <div className='serviceImage'>
                                <img alt='pic' className='cardImage' src={process.env.PUBLIC_URL+'/assets/images/image1.png'} />
                            </div>
                            <div className='serviceInfo' style={{textAlign:'end'}}>
                                <h2 >Video Editing</h2>
                                <p style={{marginTop:'1.5rem'}} className='paragraph'>From concept to delivery, we help you create dynamic, 
                                    effective and engaging videos. Our clients have included 
                                    marketing agencies, ad firms, large corporations, small 
                                    businesses, and out of town clients looking for dependable 
                                    camera crews and professional production facilities.</p>
                            </div>                            
                    </div>


                </div>
                <Footer />
            </div>
        )
    }
}
export default services;