import React from 'react';
import NavBar from '../navBar';
import Footer from '../footer';

class landingpage extends React.Component{
    state={};


    render(){
        return(
            <div className='Cont'>
                <NavBar />
                <div className='content'>
                    <div className="wrapper gifs" style={{backgroundImage:`url(`+process.env.PUBLIC_URL+`'assets/images/video.gif')`}}>
                        {/* <h1 stlye={{verticalAlign:'middle'}}>ETH Entertainment</h1> */}
                    </div>
                    <div className='wrapper2'>
                        <h3 className='header'>Services</h3>
                    </div>
                    <div className='wrapper'>
                        <div className='block'>
                            <div className='card1'>
                                <p className='card1Header'>Video Production</p>
                                <img alt='pic' className='cardImage' src={process.env.PUBLIC_URL+'/assets/images/image1.png'} />
                                <p className='paragraph'>
                                From concept to delivery, we help you create dynamic, effective and engaging videos.
                                 Our clients have included marketing agencies, ad firms, large corporations, small businesses,
                                  and out of town clients looking for dependable camera crews and professional production
                                   facilities. 
                                </p>
                            </div>
                            <div className='card1'>
                                <p className='card1Header'>Areial Videography</p>
                                <img alt='pic' className='cardImage' src={process.env.PUBLIC_URL+'/assets/images/image2.png'} />
                                <p className='paragraph'>
                                The drones are here! Unmanned Aerial Systems (UAS) allow filmmakers and videographers to get
                                 the shots we used to dream about. Token Media flies on the cutting edge of this exciting
                                  technology. Let our experienced pilots help you navigate the safety, legal and liability 
                                  issues inherent in this new technology. 
                                </p>
                            </div>
                            <div className='card1'>
                                <p className='card1Header'>Video Editing</p>
                                <img alt='pic' className='cardImage' src={process.env.PUBLIC_URL+'/assets/images/image.png'} />
                                <p className='paragraph'>
                                A great editor can bring your project to life. Our experienced editors are great communicators; 
                                ready to help you get your message across. We use the latest software and technique to ensure 
                                you’re getting the most efficient use of your time and the best quality possible.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='wrapper'>
                    <button type="button" className="btn btn-outline-primary">Learn More</button>
                    </div>
                    <div className='wrapper2'>
                        <h3 className='header'>Community Engagement</h3>
                    </div>
                    <div className='wrapper'>
                        <div className='block'>
                            <p className='paragraph'>
                            We are striving to make an impact on the world around us. 
                            Our Community Engagement drive seeks to benefit organizations 
                            and individuals build ongoing, permanent relationships for the 
                            purpose of applying a collective vision.To us, it is about ensuring 
                            meaningful engagement with our communities.
                            </p>
                        </div>
                    </div>
                    <div className='wrapper'>
                        <div className='card1'>
                            <img alt='pic' className='cardImage' src={process.env.PUBLIC_URL+'/assets/images/image1.png'} />
                        </div>
                        <div className='card1'>
                            <img alt='pic' className='cardImage' src={process.env.PUBLIC_URL+'/assets/images/image1.png'} />
                        </div>
                        <div className='card1'>
                            <img alt='pic' className='cardImage' src={process.env.PUBLIC_URL+'/assets/images/image1.png'} />
                        </div>
                    </div>
                    <div className='wrapper2' style={{paddingTop:'0'}}>
                        <button type="button" className="btn btn-outline-secondary">Learn More</button>
                    </div>
                    <div className='wrapper2' style={{paddingBottom:'0'}}>
                        <h3 className='header'>Businesses who trust our work</h3>
                    </div>
                    <div className='wrapper'>
                        <div className='card2'>
                            <p className='card1Header'>Minneapolis Park and Rec</p>
                            <img alt='pic' className='cardImage' src={process.env.PUBLIC_URL+'/assets/images/parksAndRec.png'} />
                        </div>
                        <div className='card2'>
                            <p className=''>Brooklyn&nbsp;Center Highschool</p>
                            <img alt='pic' className='cardImage' src={process.env.PUBLIC_URL+'/assets/images/brooklynPark.png'} />
                        </div>
                        <div className='card2'>
                            <p className='card1Header'>Rayito de sol</p>
                            <img alt='pic' className='cardImage' src={process.env.PUBLIC_URL+'/assets/images/soccer.png'} />
                        </div>
                        <div className='card2'>
                            <p className='card1Header'>World&nbsp;Bank Africa</p>
                            <img alt='pic' className='cardImage' src={process.env.PUBLIC_URL+'/assets/images/world.png'} />
                        </div>
                    </div>
                    <div className='wrapper2'style={{paddingTop:'0'}}>
                        <button type="button" className="btn btn-outline-secondary">Portfolio</button>
                    </div>

                </div>
                <div style={{backgroundColor:'#1f1f1f'}} className='wrapper'><Footer/></div>
            </div>
        )
    }
}
export default landingpage;