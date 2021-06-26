import React from 'react';
import {Link} from 'react-router-dom';
import Scroll from '../Scroll';
import './OurWork.css'
import banner from './banner.jpg'
import bottomImg1 from	'./bottomImg1.jpg';
import bottomImg2 from	'./bottomImg2.jpg';
import bottomImg3 from	'./bottomImg3.jpg';
import bottomImg4 from	'./bottomImg4.jpg';
import bottomImg5 from	'./bottomImg5.jpg';



function OurWork() {
	return(
		<div>


			<div>
	    		<div className ='spacer '></div>
				
				 <h3 className='div-background-images slider-image-size-on-mobile 'style={{"backgroundImage": "url(" + banner + ") ", "object-fit":"100%" , 'height':'350px'}}>
	                    

				 		 <div className='flex white f4  mv5 tracked  ml4 fw1 tracked-l  home-link-on-mobile ' style={{'justifyContent':'flexStart'}}>
	                    	<p>
	                    	<Link exact to='/' className='ph2 white pointer no-underline dim fw8 Interested-in-what'>Home</Link>
	                    	</p>
	                    	<p>/</p>
	                    	<p>
	                    	<Link to='/our-work' className='ph2 white pointer no-underline dim fw8 Interested-in-what'>Our Work </Link>
	                    	</p>

	                    	
	                    </div>

	                    <div className='tc  Interested-in-what' style={{'justifyContent':'center'}}>
	                    	 <p  className='ph2 white  no-underline  fw8 f2 header-paragraph-1-on-mobile '>
	                    		Interested in what we do?
	                    	</p>
	                    	<p  className='ph2 white  no-underline  fw8 f1 header-paragraph-2-on-mobile'>
	                    		This is a selection of our recent work
	                    	</p>
	                 
	                    </div>
	                   
	                   		

	              </h3>  
	    	</div>





	    		<div className='pv5 cards-padding-vertical-on-mobile' style={{'background-color':'#F5F5F5'}}>
				<div>
						<section class="portfolio-on-mobile-width" style={{'width':'89%', 'margin-left':'auto', 'margin-right':'auto'}}>
						  
						  <article class=" ph3 ph0-l portfolio-on-mobile-article-padding">
						    <div class="flex flex-column flex-row-ns portfolio-on-mobile-main">
						      <div class="w-100 w-50-ns pr3-ns order-2 order-1-ns bg-white portfolio-on-mobile-pararaph-width">
						        <h1 class="f5  mt0 lh-title tc-l mt4 mt5-m mt6-l ph3 portfolio-on-mobile-pararaph-head-padding  ">LUSHROOM FURNITURE</h1>
						        <p class="f5 f5-l lh-copy   ph4 tc pt2">
						          Website Design / Development
						        </p>
						        <div className='tc pt4'>
						        	<a target="_blank" rel="noreferrer" href="https://lushroom-furniture.herokuapp.com/"> <button className='pa2 grow  shadow-5 f7 buttonMiddle-styling2  button-links-on-mobile' >VIEW DETAILS</button> </a>
						        </div>
						        
						      </div>
						      <div class=" order-1 order-2-ns mb4 mb0-ns w-100 w-50-ns portfolio-on-mobile-img-width">
						        <img src={bottomImg1} class="db" alt="dimly lit room with a computer interface terminal."/>
						      </div>
						    </div>
						   
						  </article>
						  </section>

						  <section class="portfolio-on-mobile-width" style={{'width':'89%', 'margin-left':'auto', 'margin-right':'auto'}}>
							  
							  <article class="portfolio-on-mobile-article-second-paragraph">
							    <p class="db  ph3 ph0-l no-underline black portfolio-on-mobile-article-padding " href="#0">
							      <div class="flex flex-column flex-row-ns portfolio-on-mobile-main">
							        <div class=" mb4 mb0-ns w-100 w-50-ns portfolio-on-mobile-img-width-second-image ">
							          <img src={bottomImg2} class="db" alt=" dimly lit room with a computer interface terminal."/>
							        </div>
							        <div class="w-100 w-50-ns pl3-ns bg-white portfolio-on-mobile-pararaph-width">
							          <h1 class="f5   mt0 lh-title tc-l mt4 mt5-m mt6-l ph3 portfolio-on-mobile-pararaph-head-padding-second-paragraph">GIGA . PLANT & EQUIPMENT </h1>
							          <p class="f5 f5-l lh-copy ph4 tc pt2">
							            Website Design / Development
							          </p>
							            <div className='tc pt4'>
											<a target="_blank" rel="noreferrer" href="https://giga-plant-and-equipment.herokuapp.com/"> <button className='pa2 grow  shadow-5 f7 buttonMiddle-styling2  button-links-on-mobile' >VIEW DETAILS</button> </a>								        </div>
							         
							        </div>
							      </div>
							    </p>
							  </article>
							 </section> 

<section class="portfolio-on-mobile-width" style={{'width':'89%', 'margin-left':'auto', 'margin-right':'auto'}}>
						  
						  <article class=" ph3 ph0-l portfolio-on-mobile-article-padding">
						    <div class="flex flex-column flex-row-ns portfolio-on-mobile-main">
						      <div class="w-100 w-50-ns pr3-ns order-2 order-1-ns bg-white portfolio-on-mobile-pararaph-width">
						        <h1 class="f5  mt0 lh-title tc-l mt4 mt5-m mt6-l ph3 portfolio-on-mobile-pararaph-head-padding  ">WATER LIFE NGO</h1>
						        <p class="f5 f5-l lh-copy   ph4 tc pt2">
						         Website Design / Development
						        </p>
						        <div className='tc pt4'>
									<a target="_blank" rel="noreferrer" href="https://water-life-2021.herokuapp.com/"> <button className='pa2 grow  shadow-5 f7 buttonMiddle-styling2  button-links-on-mobile' >VIEW DETAILS</button> </a>						        </div>
						        
						      </div>
						      <div class=" order-1 order-2-ns mb4 mb0-ns w-100 w-50-ns portfolio-on-mobile-img-width">
						        <img src={bottomImg3} class="db" alt="dimly lit room with a computer interface terminal."/>
						      </div>
						    </div>
						   
						  </article>
						  </section>



							 <section class="portfolio-on-mobile-width" style={{'width':'89%', 'margin-left':'auto', 'margin-right':'auto'}}>
							  
							  <article class="portfolio-on-mobile-article-second-paragraph">
							    <p class="db  ph3 ph0-l no-underline black portfolio-on-mobile-article-padding " href="#0">
							      <div class="flex flex-column flex-row-ns portfolio-on-mobile-main">
							        <div class=" mb4 mb0-ns w-100 w-50-ns portfolio-on-mobile-img-width-second-image ">
							          <img src={bottomImg4} class="db" alt=" dimly lit room with a computer interface terminal."/>
							        </div>
							        <div class="w-100 w-50-ns pl3-ns bg-white portfolio-on-mobile-pararaph-width">
							          <h1 class="f5   mt0 lh-title tc-l mt4 mt5-m mt6-l ph3 portfolio-on-mobile-pararaph-head-padding-second-paragraph">BIONIST MERCHANTS</h1>
							          <p class="f5 f5-l lh-copy ph4 tc pt2">
							          Website Design / Development
							          </p>
							            <div className='tc pt4'>
											<a target="_blank" rel="noreferrer" href="https://bionist-merchants.herokuapp.com/about "> <button className='pa2 grow  shadow-5 f7 buttonMiddle-styling2  button-links-on-mobile' >VIEW DETAILS</button> </a>								        </div>
							         
							        </div>
							      </div>
							    </p>
							  </article>
							 </section>


							 <section class="portfolio-on-mobile-width" style={{'width':'89%', 'margin-left':'auto', 'margin-right':'auto'}}>
						  
						  <article class=" ph3 ph0-l portfolio-on-mobile-article-padding">
						    <div class="flex flex-column flex-row-ns portfolio-on-mobile-main">
						      <div class="w-100 w-50-ns pr3-ns order-2 order-1-ns bg-white portfolio-on-mobile-pararaph-width">
						        <h1 class="f5  mt0 lh-title tc-l mt4 mt5-m mt6-l ph3 portfolio-on-mobile-pararaph-head-padding">INSTRUOUS CONSTRUCTION</h1>
						        <p class="f5 f5-l lh-copy ph4 tc pt2">
						         Website Design / Development
						        </p>

					            <div className='tc pt4'>
									<a target="_blank" rel="noreferrer" href="https://instruous-construction.herokuapp.com/"> <button className='pa2 grow  shadow-5 f7 buttonMiddle-styling2  button-links-on-mobile' >VIEW DETAILS</button> </a>						        </div>

						      </div>
						      <div class=" order-1 order-2-ns mb4 mb0-ns w-100 w-50-ns portfolio-on-mobile-img-width">
						        <img src={bottomImg5} class="db" alt=" dimly lit room with a computer interface terminal."/>
						      </div>
						    </div>
						   
						  </article>
						  </section>
				</div>
			</div>





			  <div className='footer '>

				<div className='white pv5' style={{'backgroundColor':'#251919'}}>
					<p className='tc mt4' style={{'fontSize':'60px'}}>LET’S WORK </p>
					<p className='tc' style={{'fontSize':'60px'}}> TOGETHER</p>
					<div className='pt4 mt2 tc'>
						<Link to='/contact'> <button className='dib f3 pa3 tracked fw8  buttonMiddle-styling2 mb5' >CONTACT US TODAY</button> </Link>
					</div>
				</div>


				<div className='white pv6	' style={{'backgroundColor':'black'}}>
					<div className='flex footer-flex'>


						<div className='w-50-l width-100-cname'>
							<Link exact="true" to='/' className='no-underline white'  >
							<p className=' ml5 mb3 footer-company-name dim pointer'  style={{ 'fontSize':'45px' ,'fontFamily':'Audiowide' }}> Flex DevsKe </p>
							</Link>	
							<div className='gray ml5 footer-all-social-icons'>
								<i className=" fab fa-facebook-square fa-4x mr3  footer-social-facebook"></i>
								<i className="fab fa-twitter-square  fa-4x mr3 footer-social-twitter"></i>
								<i className="fab fa-instagram-square fa-4x mr3 footer-social-instagram"></i>
								<i className="fab fa-youtube-square fa-4x footer-social-youtube"></i>
							</div>
						</div>
						

						<div className='w-50-r ml4  width-100-phn-no'>
							<a href="tel:+254789563415" className='no-underline	white phn-no  fw8 dim athelas ' style={{ 'fontSize':'58px' }}>+254 789 563 415</a>
							
							<p className='pv3 email-us'>
								<a href="mailto:sales@flexdevske.co.ke"  className='  white no-underline dim email-us-font athelas' style={{ 'fontSize':'25px' , }}>sales@flexdevske.co.ke </a>							
							</p>

							<p className='mv3 nairob-kenya' style={{ 'fontSize':'15px' ,'fontFamily':'Audiowide' }}>Flex DevsKe - NAIROBI, KENYA</p>
							<div className='bb b--white footer-horizontal-line'></div>
							<div className='flex footer-terms-main'>	
								<p className='pv3 mr4 dim pointer footer-terms' style={{ 'fontSize':'12px' ,'fontFamily':'Audiowide' }}>TERMS</p>
								<p className='pv3 mr4 dim pointer footer-privacy' style={{ 'fontSize':'12px' ,'fontFamily':'Audiowide' }}>PRIVACY POLICY</p>
								<p className='pv3 dim pointer footer-google' style={{ 'fontSize':'12px' ,'fontFamily':'Audiowide' }}>OUR GOOGLE REVIEWS </p>
							</div>

						</div>	


					</div>	
				</div>

			</div>


			<Scroll showBelow={250} />


			<div class="" >
				<Link to='/contact'> <button className='footer-icon-carevolution buttonMiddle-styling2 dib f3 pa3 grow fw8  white ' >GET A QUOTE</button> </Link>
			</div>

		</div>


	);
}

export default OurWork;