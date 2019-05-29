import React from 'react';
import NavBar from '../navBar';
import Footer from '../footer';

class Portfolio extends React.Component{
    state={

    }



    render(){
        return (
            <div className='Cont'>
                <NavBar/>
                <div className='mainCont'>
                    <div className='wrapper2'>
                        <h3 className='header'>Portfolio</h3>
                    </div>
                    <div className='wrapper'>

                        <iframe width="560" height="315" src="https://www.youtube.com/embed/D_aHGyhNQ-g" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className='wrapper'>
                        <div className='caro'>
                        {/* <i class="fas fa-arrow-left"></i> */}
                            <table>
                                <th><iframe width="400" className='carouselItems' height="215" src="https://www.youtube.com/embed/D_aHGyhNQ-g" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></th>
                                <th><iframe width="400" className='carouselItems' height="215" src="https://www.youtube.com/embed/D_aHGyhNQ-g" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></th>
                                <th><iframe width="400" className='carouselItems' height="215" src="https://www.youtube.com/embed/D_aHGyhNQ-g" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></th>
                                <th><iframe width="400" className='carouselItems' height="215" src="https://www.youtube.com/embed/D_aHGyhNQ-g" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></th>
                                <th><iframe width="400" className='carouselItems' height="215" src="https://www.youtube.com/embed/D_aHGyhNQ-g" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></th>
                            </table>
                            {/* <i class="fas fa-arrow-right"></i> */}
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Portfolio;