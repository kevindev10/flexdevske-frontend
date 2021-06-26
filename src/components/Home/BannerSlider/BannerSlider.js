import React,{Component} from 'react';
import './BannerSlider.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner from './banner.jpg';

import banner2 from './banner2.jpg';
import banner3 from './banner3.jpg';



export default class AutoPlay extends Component {
  render() {
    const settings = {
      arrow:false,
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 10000,
      fade: true,
    };
    return (
      <div>
       
        
        <Slider {...settings}>


             <div >
                  <h3>
                    
                                    
                  <div className=" banner-slider-main " style={{"backgroundImage": "url(" + banner + ") ", "objectFit":"100%" ,}} >
                      <div className=" banner-slider-semi-transparent-cover cover-color-1">
                        <nav className="dt w-100 mw8 center"> 
                            <div className="dtc v-mid tr pa3">
                            </div>
                        </nav> 
                        <div className='vertical-line'></div>
                        <div className=" banner-slider-paragraph-positioning  " >
                        <h2 className="fw8 f2 white-80  mb0 slider-paragraph-on-mobile1" style={{'fontSize':'40px'}}>Let's keep it simple</h2>
                          <p className=" fw8 white-90  mt5   slider-paragraph-on-mobile2" style={{'fontSize':'50px', 'fontFamily': 'Syncopate'}}>We build websites </p>
                           <p className=" fw8 white-90 mt2  mb4 slider-paragraph-on-mobile3 " style={{'fontSize':'50px', 'fontFamily': 'Syncopate'}}>that work</p>
                            
                        </div>
                      </div>
                    </div> 
                   
                    

                  </h3>  
              </div>



             <div >
                  <h3>
                    
                                    
                  <div className=" banner-slider-main " style={{"backgroundImage": "url(" + banner2 + ") ", "objectFit":"100%" ,}} >
                      <div className=" banner-slider-semi-transparent-cover cover-color-2">
                        <nav className="dt w-100 mw8 center"> 
                            <div className="dtc v-mid tr pa3">
                            </div>
                        </nav> 
                          <div className='vertical-line'></div>
                        <div className=" banner-slider-paragraph-positioning  " >
                        <h2 className="fw8 f2 white-80  mb0 slider-paragraph-on-mobile1" style={{'fontSize':'40px'}}>Let's keep it simple</h2>
                          <p className=" fw8 white-90  mt5   slider-paragraph-on-mobile2" style={{'fontSize':'50px', 'fontFamily': 'Syncopate'}}>We build websites </p>
                           <p className=" fw8 white-90 mt2  mb4 slider-paragraph-on-mobile3 " style={{'fontSize':'50px', 'fontFamily': 'Syncopate'}}>that inspire</p>
                            
                        </div>
                      </div>
                    </div> 
                   
                    

                  </h3>  
              </div>


             <div >
                  <h3>
                    
                                    
                  <div className=" banner-slider-main " style={{"backgroundImage": "url(" + banner3 + ") ", "objectFit":"100%" ,}} >
                      <div className=" banner-slider-semi-transparent-cover cover-color-3">
                        <nav className="dt w-100 mw8 center"> 
                            <div className="dtc v-mid tr pa3">
                            </div>
                        </nav> 
                          <div className='vertical-line'></div>
                        <div className=" banner-slider-paragraph-positioning  " >
                        <h2 className="fw8 f2 white-80  mb0 slider-paragraph-on-mobile1" style={{'fontSize':'40px'}}>Let's keep it simple</h2>
                          <p className=" fw8 white-90  mt5   slider-paragraph-on-mobile2" style={{'fontSize':'50px', 'fontFamily': 'Syncopate'}}>We build websites </p>
                           <p className=" fw8 white-90 mt2  mb4 slider-paragraph-on-mobile3 " style={{'fontSize':'50px', 'fontFamily': 'Syncopate'}}>that deliver</p>
                            
                        </div>
                      </div>
                    </div> 
                   
                   
                    

                  </h3>  
              </div>




          
             


              
          

        </Slider>
      </div>
    );
  }
}
