import React,{useEffect} from 'react';
import Scroll from '../Scroll';
import './Home.css';
import {Link} from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import BannerSlider from './BannerSlider/BannerSlider';
import whyus from './whyus.jpg';
import socialmedia from './socialmedia.png';
import impDes from './impDes.gif';
import resWebDes from './resWebDes.gif';





 function Home() {
	useEffect(() =>{
		Aos.init({});

	},[]);

	return(

		<div>


			<div className='pb4 banner-slider' style={{ }}>
		       	<BannerSlider/>
		    </div>

		    <div className='pv6 first-heading-and-paragraph-on-mobile'>
		    	<h1 className='tc  ph4 heading-on-mobile' style={{'fontSize':'45px', 'fontFamily': 'Audiowide'}}>Web Design & Development Specialists</h1>
		    	<div className='tl pb4 ph5 paragraph-on-mobile gray  ' style={{'fontSize':'30px', }} >Every website we create is perfectly targeted 
			    	to your business, whether that is generating more leads
			    	, increasing your traffic, selling products online, or 
			    	simply to raise awareness of your brand. Our beautifully 
			    	crafted websites will help you stand out from the crowd
			    	 and help to convert your visitors into customers.
		    	 </div>
		    </div>
			

			<div className=' mb4 pv6 get-your-website-main-mobile-view test-skewing' style={{'backgroundColor':'#010101', }}>
				<div className='flex  pv4 get-your-website-flex-mobile-view' style={{'width':'80%', 'marginLeft':'auto', 'marginRight':'auto'}} >
					<p className=' white pr4 tl lh-title athelas get-your-website-paragraph-mobile-view'  style={{'width':'50%', 'fontSize':'64px'}}>
					Get your website in front of the right customers at
					 the right time with the right message.</p>
					<div className='pl4 get-your-website-image-mobile-view'  style={{'width':'50%'}}>
						<img src={socialmedia} alt='social media banner'/>
					</div>
				</div>
			</div>
			
			
 
			<div className=''>
				<article data-name="article-full-bleed-background">
				  <div className="cf full-bleed-image" style ={{ backgroundImage: "url("+whyus+")" }} >
				    <div className="   white ph4 pv7 f3 full-bleed-transparent-cover " >
				      <header className=" pt7 full-bleed-text-main">
				        <h3 className=" fw8 ttu tracked lh-title mt7 mb3 full-bleed-text-header" style={{'fontSize':'65px'}}>WHY CHOOSE US</h3>
				        <h4 className="f3 fw4  lh-title mt0 full-bleed-text-paragraph-1">Hire the Best – That’s Us!</h4>
				      </header>
				      <section className="pt5 ">
				        <p className=" lh-copy  f3 mt0 full-bleed-text-paragraph-2">
				          Built with professionalism and zeal – you’ll appreciate our clean,
				          sophisticated, and unparalleled designs. We take pride in crafting
				          exquisite solutions that will drive business growth and help you
				          stand out from the competition.
				        </p>
				         <p className="mt4  lh-copy  f3 mt0 full-bleed-text-paragraph-3">
				          Now that’s something to shout about!.
				        </p>
				      </section>
				    </div>
				  </div>
				</article>
			</div>


			<div className='pv4' style={{'backgroundColor':'#F8F9F9', }}>
				<div className=''>
					<h1 className='tc pb4 tracked ideal-web-heading-on-mobile'  style={{'fontSize':'40px'}} >The Ideal Website With Everything You Need</h1>
				</div>
				<div className='flex ideal-web-flex-on-mobile ' style={{'width':'80%', 'marginLeft':'auto', 'marginRight':'auto'}}>
					<div className='w-50 pa4 mt6 tl ideal-web-headNpara-on-mobile'>
						<h1 className='tracked impre-des-heading-on-mobile' style={{'fontSize':'40px'}}>Impressive Design</h1>
						<p className='gray tracked impre-des-paragraph-on-mobile' style={{'fontSize':'20px'}}>We have a professional web design 
						 and web development team to create for
						 you an awesome interface to ensure your visitors 
						 have the best user experience, and
						 come back for more (repeat visits, repeat sales).
						</p>
					</div>

					<div className='w-50 pa3 mb4 ideal-web-image-on-mobile'>
						<img className='br2 ' src={impDes} alt='impressive design gif'  />
			       </div>
			   </div>
			</div>




			<div className='pv4' style={{'backgroundColor':'white'}}>
				
				<div className='flex  ideal-web-flex-on-mobile' style={{'width':'80%', 'marginLeft':'auto', 'marginRight':'auto'}}>
					<div className='w-50 pa3 mt4 impre-des-image-on-mobile'>
						<img className='br2 ' src={resWebDes} alt='impressive design gif'  />
			       </div>


					<div className='w-50 pa4 mt5 tl ideal-web-headNpara-on-mobile'>
						<h1 className='tracked impre-des-heading-on-mobile' style={{'fontSize':'40px'}}>Responsive Web Design</h1>
						<p className='gray tracked impre-des-paragraph-on-mobile' style={{'fontSize':'20px'}}>We build responsive
						 websites that looks great no matter it’s viewed on a computer, mobile
						 or tablet. Delight and impress your visitors with a highly user-friendly
						 website.
						</p>
					</div>

					
			   </div>
			</div>
				


			<div className='  pv6  ' style={{'backgroundColor':'#251919', }}>

				<div className='flex  pv4 Our-approach-flex  ' style={{'width':'80%', 'marginLeft':'auto', 'marginRight':'auto'}} >

					<p className=' white pr2 tl tracked athelas Our-approach-flex-paragraph-1 '  style={{'width':'45%', 'fontSize':'51px'}}>
					Our approach is easy. We work with you to understand your business
					to help you become more successful.
					 </p>
					 <div className='vertical-line2 ml5 mr2 ' style={{'width':'10%'}}></div>
					<div className=' Our-approach-flex-paragraph-2-main-div'  style={{'width':'45%'}}>
						<p className=' white pr2 tl tracked athelas Our-approach-flex-paragraph-2'  style={{'fontSize':'37px'}}>
					At Flex DevsKe we aren't like other web design companies. We are hands 
					on with every client, working with you to plan and launch your website
					and then regular maintenance to ensure it is still delivering.
					 </p>
					</div>
				</div>
			</div>	


			
			<div className='pb1 did-you-know-container  ' style={{'backgroundColor':'#251919', }}>
				<div className='flex white did-you-know-flex '>
					<div data-aos="flip-left"  data-aos-offset="200" data-aos-delay="200"  data-aos-duration="11000"  className=' did-you-know-each-div' style={{'width':'33.3%', 'height':'500px','backgroundColor':'#100B0B'}}>
						<div className='Our-approach-is-easy-flex-icons'>
							<i className="fas fa-thumbs-up fa-10x  grow"></i>
						</div>

						<div>
							<p className='f4 Our-approach-is-easy-flex-paragraph athelas'>DID YOU KNOW? 100% OF OUR CUSTOMERS WOULD RECOMMEND US FOR WEB DESIGN.</p>
						</div>
						
					</div>
			
					<div  data-aos="flip-down" data-aos-offset="200" data-aos-delay="600"  data-aos-duration="11000"  className='did-you-know-each-div ' style={{'width':'33.3%', 'height':'500px', 'backgroundColor':'black','overFlow':'hidden'}}>
						<div>
							<i className="fas fa-money-bill-wave fa-10x Our-approach-is-easy-flex-icons  "></i>
						</div>
						<div>
						 <p className='f4 Our-approach-is-easy-flex-paragraph athelas'>WE DEVELOP COMPETITIVELY PRICED WEBSITES THAT IGNITE YOUR BUSINESS.</p>
						</div> 
					</div>
			
					<div data-aos="flip-right" data-aos-offset="200" data-aos-delay="1000"  data-aos-duration="11000" className='did-you-know-each-div ' style={{'width':'33.3%', 'height':'500px', 'backgroundColor':'#100B0B'}}>
						<div>
						  <i className="fas fa-lightbulb fa-10x Our-approach-is-easy-flex-icons dim"></i>
						</div>
						<div> 
						  <p className='f4 Our-approach-is-easy-flex-paragraph athelas'>WE WON'T LEAVE YOU. WE CONTINUE TO SUGGEST NEW IDEAS AND FEATURES TO HELP YOU GROW.</p>
						</div>
			       </div>
			
				</div>
			

			</div>
			


			<div className='mv4 grow-your-business-main' style={{'width':'90%', 'marginLeft':'auto', 'marginRight':'auto'}}>
				<div className='flex mb3 pt6 grow-your-business-flex' style={{'justifyContent':'center' }}>
					<h1 className='  pr3 ttu  tracked  grow-your-business-grow'  style={{ 'fontSize':'45px' , }}>Grow Your Business With  </h1>
					<h1 className='  grow-your-business-flex-devke'  style={{ 'fontSize':'45px' ,'fontFamily':'Audiowide' }}> Flex DevsKe </h1>
				</div>
				
				<div data-aos="zoom-in-right" data-aos-offset="200" data-aos-delay="200"  data-aos-duration="11000" className='slideInParagraph '>
				    <p className=' ph5 mh5 tl lh-title  fw1 gray slideInParagraph-on-mobile' style={{ 'fontSize':'35px' , }} >
				    	With our clear and transparent approach, 
				    	our aim is to build a website to help
				    	deliver the results you need with excellent
				    	value for money. 
				    	Based in Nairobi our in-house team of web designers and developers 
				    	offer a full agency service to any size business throughout the Kenya.
				    	We pride ourselves on our creativity and our outstanding ability to build
				    	you any web platform that your business needs. 
				    </p>	
				</div>

				
			</div>
			<div className='pt4 mt4 tc'>
				<Link to='/contact'> <button className='dib f3 pa3 grow  white buttonMiddle-styling' >GET A QUOTE</button> </Link>
			</div>

			
			<div className='footer mt6'>

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
						

						<div className='w-50-r ml4   width-100-phn-no'>
							<a href="tel:+254789563415" className='no-underline	white phn-no fw8 dim athelas  ' style={{ 'fontSize':'58px' }}>+254 789 563 415</a><br/>
							<p className='pv3 email-us'>
								<a href="mailto:sales@flexdevske.co.ke"  className='  white no-underline dim email-us-font athelas' style={{ 'fontSize':'25px' , }}>sales@flexdevske.co.ke </a>							
							</p>
							<p className='mv3 nairob-kenya' style={{ 'fontSize':'15px' ,'fontFamily':'Audiowide' }}>Flex DevsKe - NAIROBI, KENYA </p>


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









	)
}


export default Home;