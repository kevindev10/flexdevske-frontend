import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './contact.css';
import banner from './banner.jpg';
import Scroll from '../Scroll';


const intialState ={
			sent:1,
			email:'',
			companyType:'sme-website',
			phone:'',
			message:'',
			websiteType:'new-website',
			pages:'1-5',
			urgency:'1-2-weeks',
			companyName:'',
			yourName:'',
			
		}
class Contact extends Component {
	


	constructor(props){
		super(props);
		this.state = intialState;
	}


	
	onYourNameChange = (event) =>{
		this.setState({yourName:event.target.value})
		
	}

	onEmailChange = (event) =>{
		this.setState({email:event.target.value})
	}

	onCompanyTypeChange = (event) =>{
		this.setState({companyType:event.target.value})
	}

	onPhoneChange = (event) =>{
		this.setState({phone:event.target.value})
	}

	onMessageChange = (event) =>{
		this.setState({message:event.target.value})
	}

	onWebsiteTypeChange = (event) => {
		this.setState({websiteType:event.target.value})
	}

	onPagesChange = (event) =>{
		this.setState({pages:event.target.value})
	}

	onUrgencyChange = (event) =>{
		this.setState({urgency:event.target.value})
	}

	onCompanyNameChange  = (event) =>{
		this.setState({companyName:event.target.value})

	}

	handleFruitChange = (event) => {
		
    this.setState({fruitType: event.target.value});
    
  }





	onButtonSubmit = (event) =>{

		 event.preventDefault();
		fetch('https://core.server10.flexdevske.co.ke/sent', {
			method:'post',
			headers:{'Content-Type':'application/json'},
			body:JSON.stringify({
			


			email:this.state.email,
			companyType:this.state.companyType,
			phone:this.state.phone,
			message:this.state.message,
			websiteType:this.state.websiteType,
			pages:this.state.pages,
			urgency:this.state.urgency,
			companyName:this.state.companyName,
			yourName:this.state.yourName,
			fruitType:this.state.fruitType
			})
		})
		.then(response =>response.json())
		.then(data => {
			if (data==="success"){
				this.setState({sent:true})
				
			}else{
				this.setState({sent:false})
				
			}

			
		})

		this.setState(intialState);

	}


	render(){
		return(
			<div>
					<div>
			    		<div className ='spacer '></div>
						
						 <h3 className='top-banner-size 'style={{"backgroundImage": "url(" + banner + ") ",  }}>
			                    
			                    <p className=' pt6 f2  tc top-header   tracked ' style={{'fontFamily':'audiowide','color':'#D7D5D5'}} >
			                     	We are here to help
			                    </p>
			                    <div className='flex white f4 mh2 top-links pv4 ph5 fw1 tc tracked-l '>
			                    	<p>
			                    	<Link exact to='/' className='ph2 white pointer no-underline dim'>Home</Link>
			                    	</p>
			                    	<p>/</p>
			                    	<p>
			                    	<Link to='/contact' className='ph2 white pointer no-underline dim'>Contact </Link>
			                    	</p>
			                    </div>
			                 

			              </h3>  
			    	</div>



			    	<div className='pv4 flex contact-main-flex' style={{'width':'96%' ,'marginLeft':'auto', 'marginRight':'auto'}}>
			    	
			    	<div className='contact-getintouch-width' style={{'width':'40%'}}>
			    			<header className="  ">
							    <h1 className="f2 lh-title fw9 mb3 mt4 tl contact-getintouch-font" style={{'fontSize':'45px', 'fontFamily': 'Audiowide'}}>
							      Get in touch
							    </h1>
							    <h2 className="f4 lh-title mt0  fw9  mb3 " style={{'color':'#3F1717'}}>
							      Telephone
							    </h2>
							    <time className="f4   gray   ">(+254) 0789563415</time>
							    <div style={{'borderTop':'1px solid #B8B8B8 '}}  className='mv4  mr5 linez'/>

							    <h2 className="f4 mid-gray lh-title mt0  fw9 mb3  " style={{'color':'#3F1717'}}>
							      Email
							    </h2>
							    <p className='pv3 email-us'>
									<a href="mailto:sales@flexdevske.co.ke"  className='f4 gray no-underline dim email-us-font '  style={{"wordWrap": "breakWord"}} >sales@flexdevske.co.ke </a>							
								</p>
							    <time className="f4   gray  " style={{"wordWrap": "breakWord"}}>flexdevske@gmail.com</time>
							    <p className='pv3 email-us'>
									<a href="mailto:support@flexdevske.co.ke"  className='f4 gray no-underline dim email-us-font '  style={{"wordWrap": "breakWord"}} >support@flexdevske.co.ke </a>							
								</p>
							    <div style={{'borderTop':'1px solid #B8B8B8 '}}  className='mv4  mr5 linez'/>
							    <h2 className="f4 mid-gray lh-title mt0  fw9 mb3" style={{'color':'#3F1717'}}>
							      Address
							    </h2>
							    <time className="f4   gray  " > Nairobi,Kenya </time>
							    <div style={{'borderTop':'1px solid #B8B8B8 '}}  className='mv4  mr5 linez'/>
							    	
							    
							    
							  </header>
			    	</div>


			    	<div className='contact-getfreequote-width' style={{'width':'60%'}} >
			    			
			    	<p  className="f2 lh-title fw9 mb3 mt4 tl contact-getfreequote-font" style={{'fontSize':'45px', 'fontFamily': 'Audiowide'}}>Get a free quote</p>

			    	<div >
				    		{this.state.sent === 1 ? 
			    		(

			    		<div>

			    			<article className="br2 ba dark-gray  b--black-10 mv4    getfreequote-main" style={{'backgroundColor':'#FBFBFB'}} >
								<main className="pa4 black-80  ">
								  <div className="" >
								    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
								      <legend className="f4 fw6 ph0 mh0" style={{'color':'#3F1717'}}>
								      	Thanks for contacting Flex DevsKe. How can we help you today
								      </legend>






								      <div className=' pv2 tl fw6 lh-copy f4 mt4 select-options-property-font' style={{'color':'#3F1717'}}>


						    				 Type of website :
									          <select value={this.state.websiteType} onChange={this.onWebsiteTypeChange} className=" select-bx-stylin ml2 gray br2 pv2  f4 athelas ph2" >
									            <option value="new-website">I need a new website</option>
									            <option value="website-redesign">I need  a redesign of my current website</option>
									            
									          </select>

						    		
						    		    </div>




									

									<div className='pv2 tl fw6 lh-copy f4 mt4 select-options-property-font' style={{'color':'#3F1717'}}>


						    				Website category :
									          <select value={this.state.companyType} onChange ={this.onCompanyTypeChange} className=" select-bx-stylin ml2 gray br2 pv2  f4 athelas ph2" >
									            <option value="personal-website">Personal website</option>
									            <option value="startup-website">Startup business </option>
									            <option value="sme-website">Small and medium-sized enterprises ( SME )</option>
									            <option value="corporate-website">Corporate</option>
									            <option value="ngo-local-website">Non profit organization ( LOCAL ) </option>
									            <option value="ngo-intenational-website">Non profit organization ( INTERNATIONAL ) </option>
									            <option value="e-commerce-website">E-commerce ( COMING SOON!)</option>
									          </select>

						    		
						    		    </div>







								      <div className="mt5 ">
								        <label className="db fw6 lh-copy f4 pb3 select-options-property-font" htmlFor="message" style={{'color':'#3F1717'}}> Okay great — We'd love to help you with this project. Can you explain a little more about what you exactly need?</label>
								        <textarea
								         onChange ={this.onMessageChange}
								         className="input-box-styling tl  br2 shadow-5 f4 gray athelas pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
								         type="text" 
								         name="message"
								         placeholder="Your message. "
								         id="message" 
								         
								         rows="15"
								         cols="50"
								        >
								        </textarea>

								      </div>







								      <div className='pv2 tl fw6 lh-copy f4 mt4 select-options-property-font' style={{'color':'#3F1717'}}>


						    				Number of website pages - Estimate :
									          <select value={this.state.pages} onChange ={this.onPagesChange} className=" select-bx-stylin ml2 gray br2 pv2  f4 athelas ph2" >
									            <option value="1-5"> 1 to 5</option>
									            <option value=" 6-10">6 to 10 </option>
									            <option value="11-20">11 to 20</option>
									           
									          </select>

						    		
						    		    </div>







									          <div className='pv2 tl fw6 lh-copy f4 mt4 select-options-property-font' style={{'color':'#3F1717'}}>


							    				How soon do you require the website :
										          <select value={this.state.urgency} onChange ={this.onUrgencyChange} className=" select-bx-stylin ml2 gray br2 pv2  f4 athelas ph2" >
										            <option value="1-2-weeks"> 1 to 2 weeks</option>
										            <option value=" 3-4-weeks">3 to 4 weeks </option>
										            <option value="1-2-months">1 to 2 months</option>
										           
										          </select>

							    		
							    		    </div>







								      <div className="mv3 flex input-boxes-flex-on-mobile " >
								        <label className="w-30 db fw6 lh-copy f4 select-options-property-font " htmlFor="companyName" style={{'color':'#3F1717'}}>Organization name :</label>
								        <input
								        	 onChange ={this.onCompanyNameChange}
									         className="input-box-styling f4 gray br2 shadow-5 pa3 input-reset ba bg-transparent hover-bg-black hover-white w-70" 
									         type="text" 
									         name="companyName" 
									          id="companyName"
									          
									     />
								      </div>



								      <div className="mt3 flex input-boxes-flex-on-mobile">
								        <label className="w-30 db fw6 lh-copy f4 select-options-property-font" htmlFor="yourName" style={{'color':'#3F1717'}}>Your Name :</label>
								        <input
								         onChange ={this.onYourNameChange}
								         className="input-box-styling f4 gray br2 shadow-5 pa3 input-reset ba bg-transparent hover-bg-black hover-white w-70" 
								         type="name" 
								         name="yourName" 
								          id="yourName" 
								          />

								      </div>




								      <div className="mt3 flex input-boxes-flex-on-mobile">
								        <label className="w-30 db fw6 lh-copy f4 select-options-property-font" htmlFor="email-address" style={{'color':'#3F1717'}}>Email :</label>
								        <input 

								        	onChange ={this.onEmailChange}
									        className=" input-box-styling f4 gray br2 shadow-5 pa3 input-reset ba bg-transparent hover-bg-black hover-white w-70" 
									        type="email"
									        name="email-address"  
									        id="email-address"
									        
									      />
								      </div>



								      	<div className="mv3 flex input-boxes-flex-on-mobile">
								        <label className="w-30 db fw6 lh-copy f4 select-options-property-font " htmlFor="phone" style={{'color':'#3F1717'}}>Phone :</label>
								        <input
								        	 onChange ={this.onPhoneChange}
									         className="input-box-styling f4 gray br2 shadow-5 pa3 input-reset ba bg-transparent hover-bg-black hover-white w-70 " 
									         type="tel" 
									         name="phone" 
									          id="phone"
									          
									     />
								      </div>




								      <p className='f5 red pv4 dim athelas fw8'>* Fill in all details before sending.</p>

								     
								    </fieldset>
								    <div className="">
								       
								      <input
								        onClick ={this.onButtonSubmit}
								       className="buttonMiddle-styling2 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f3 dib athelas fw8" 
								       type="submit" 
								      
								       value="Send"/> 
								      
								    </div>
								    
								  </div>
								</main>
							</article>
				
			    	   </div>
				






			    		) : !this.state.sent ?

							(





								<div>	
									

									<h1 className='f1 red athelas dim not-sent-on-mobile'>*Not sent. Kindly fill in all the details.</h1>	

								<div>

					    			<article className="br2 ba dark-gray  b--black-10 mv4   center getfreequote-main" style={{'backgroundColor':'#FBFBFB'}} >
										<main className="pa4 black-80">
										  <div className="" >
										    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
										      <legend className="f4 fw6 ph0 mh0" style={{'color':'#3F1717'}}>
										      	Thanks for contacting Flex DevsKe. How can we help you today
										      </legend>






								      <div className='pv2 tl fw6 lh-copy f4 mt4 select-options-property-font' style={{'color':'#3F1717'}}>


						    				 Type of website :
									          <select value={this.state.websiteType} onChange={this.onWebsiteTypeChange} className=" select-bx-stylin ml2 gray br2 pv2  f4 athelas ph2" >
									            <option value="new-website">I need a new website</option>
									            <option value="website-redesign">I need  a redesign of my current website</option>
									            
									          </select>

						    		
						    		    </div>




									

									<div className='pv2 tl fw6 lh-copy f4 mt4 select-options-property-font' style={{'color':'#3F1717'}}>


						    				Website category :
									          <select value={this.state.companyType} onChange ={this.onCompanyTypeChange} className=" select-bx-stylin ml2 gray br2 pv2  f4 athelas ph2" >
									            <option value="personal-website">Personal website</option>
									            <option value="startup-website">Startup business </option>
									            <option value="sme-website">Small and medium-sized enterprises ( SME )</option>
									            <option value="corporate-website">Corporate</option>
									            <option value="ngo-local-website">Non profit organization ( LOCAL ) </option>
									            <option value="ngo-intenational-website">Non profit organization ( INTERNATIONAL ) </option>
									            <option value="e-commerce-website">E-commerce ( COMING SOON!)</option>
									          </select>

						    		
						    		    </div>







								      <div className="mt5 ">
								        <label className="db fw6 lh-copy f4 pb3 select-options-property-font" htmlFor="message" style={{'color':'#3F1717'}}> Okay great — We'd love to help you with this project. Can you explain a little more about what you exactly need?</label>
								        <textarea
								         onChange ={this.onMessageChange}
								         className="input-box-styling tl  br2 shadow-5 f4 gray athelas pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
								         type="text" 
								         name="message"
								         placeholder="Your message. "
								         id="message" 
								         
								         rows="15"
								         cols="50"
								        >
								        </textarea>

								      </div>







								      <div className='pv2 tl fw6 lh-copy f4 mt4 select-options-property-font' style={{'color':'#3F1717'}}>


						    				Number of website pages - Estimate :
									          <select value={this.state.pages} onChange ={this.onPagesChange} className=" select-bx-stylin ml2 gray br2 pv2  f4 athelas ph2" >
									            <option value="1-5"> 1 to 5</option>
									            <option value=" 6-10">6 to 10 </option>
									            <option value="11-20">11 to 20</option>
									           
									          </select>

						    		
						    		    </div>







									          <div className='pv2 tl fw6 lh-copy f4 mt4 select-options-property-font' style={{'color':'#3F1717'}}>


							    				How soon do you require the website :
										          <select value={this.state.urgency} onChange ={this.onUrgencyChange} className=" select-bx-stylin ml2 gray br2 pv2  f4 athelas ph2" >
										            <option value="1-2-weeks"> 1 to 2 weeks</option>
										            <option value=" 3-4-weeks">3 to 4 weeks </option>
										            <option value="1-2-months">1 to 2 months</option>
										           
										          </select>

							    		
							    		    </div>







								      <div className="mv3 flex input-boxes-flex-on-mobile " >
								        <label className="w-30 db fw6 lh-copy f4 select-options-property-font " htmlFor="companyName" style={{'color':'#3F1717'}}>Organization name :</label>
								        <input
								        	 onChange ={this.onCompanyNameChange}
									         className="input-box-styling f4 gray br2 shadow-5 pa3 input-reset ba bg-transparent hover-bg-black hover-white w-70" 
									         type="text" 
									         name="companyName" 
									          id="companyName"
									          
									     />
								      </div>



								      <div className="mt3 flex input-boxes-flex-on-mobile">
								        <label className="w-30 db fw6 lh-copy f4 select-options-property-font" htmlFor="yourName" style={{'color':'#3F1717'}}>Your Name :</label>
								        <input
								         onChange ={this.onYourNameChange}
								         className="input-box-styling f4 gray br2 shadow-5 pa3 input-reset ba bg-transparent hover-bg-black hover-white w-70" 
								         type="name" 
								         name="yourName" 
								          id="yourName" 
								          />

								      </div>




								      <div className="mt3 flex input-boxes-flex-on-mobile">
								        <label className="w-30 db fw6 lh-copy f4 select-options-property-font" htmlFor="email-address" style={{'color':'#3F1717'}}>Email :</label>
								        <input 

								        	onChange ={this.onEmailChange}
									        className=" input-box-styling f4 gray br2 shadow-5 pa3 input-reset ba bg-transparent hover-bg-black hover-white w-70" 
									        type="email"
									        name="email-address"  
									        id="email-address"
									        
									      />
								      </div>



								      	<div className="mv3 flex input-boxes-flex-on-mobile">
								        <label className="w-30 db fw6 lh-copy f4 select-options-property-font " htmlFor="phone" style={{'color':'#3F1717'}}>Phone :</label>
								        <input
								        	 onChange ={this.onPhoneChange}
									         className="input-box-styling f4 gray br2 shadow-5 pa3 input-reset ba bg-transparent hover-bg-black hover-white w-70 " 
									         type="tel" 
									         name="phone" 
									          id="phone"
									          
									     />
								      </div>



								      <h1 className='f1 red athelas dim not-sent-on-mobile'>*Not sent. Kindly fill in all the details.</h1>
								      <p className='f5 red pv4 dim athelas fw8'>* Fill in all details before sending.</p>

								     
								    </fieldset>
								    <div className="">
								      <input
								       onClick ={this.onButtonSubmit}
								       className="buttonMiddle-styling2 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f3 dib athelas fw8" 
								       type="submit" 
								       value="Send"/>
								    </div>
								    
								  </div>
								</main>
							</article>
				
			    	   </div>
				
							

								</div>







							):

				    		 (




				    		 	<div>
				    				<h1 className='f2 green athelas sent-paragraph-on-mobile '>Sent. Thanks for getting in touch! Expect an answer from us in the next few hours.</h1>
				    				<div>

						    			<article className="br2 ba dark-gray  b--black-10 mv4   center getfreequote-main" style={{'backgroundColor':'#FBFBFB'}} >
											<main className="pa4 black-80">
											  <div className="" >
											    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
											      <legend className="f4 fw6 ph0 mh0" style={{'color':'#3F1717'}}>
											      	Thanks for contacting Flex DevsKe. How can we help you today
											      </legend>






											      <div className='pv2 tl fw6 lh-copy f4 mt4 select-options-property-font' style={{'color':'#3F1717'}}>


									    				 Type of website :
												          <select value={this.state.websiteType} onChange={this.onWebsiteTypeChange} className=" select-bx-stylin ml2 gray br2 pv2  f4 athelas ph2" >
												            <option value="new-website">I need a new website</option>
												            <option value="website-redesign">I need  a redesign of my current website</option>
												            
												          </select>

									    		
									    		    </div>




												

												<div className='pv2 tl fw6 lh-copy f4 mt4 select-options-property-font' style={{'color':'#3F1717'}}>


									    				Website category :
												          <select value={this.state.companyType} onChange ={this.onCompanyTypeChange} className=" select-bx-stylin ml2 gray br2 pv2  f4 athelas ph2" >
												            <option value="personal-website">Personal website</option>
												            <option value="startup-website">Startup business </option>
												            <option value="sme-website">Small and medium-sized enterprises ( SME )</option>
												            <option value="corporate-website">Corporate</option>
												            <option value="ngo-local-website">Non profit organization ( LOCAL ) </option>
												            <option value="ngo-intenational-website">Non profit organization ( INTERNATIONAL ) </option>
												            <option value="e-commerce-website">E-commerce ( COMING SOON!)</option>
												          </select>

									    		
									    		    </div>







											      <div className="mt5 ">
											        <label className="db fw6 lh-copy f4 pb3 select-options-property-font" htmlFor="message" style={{'color':'#3F1717'}}> Okay great — We'd love to help you with this project. Can you explain a little more about what you exactly need?</label>
											        <textarea
											         onChange ={this.onMessageChange}
											         className="input-box-styling tl  br2 shadow-5 f4 gray athelas pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
											         type="text" 
											         name="message"
											         placeholder="Your message. "
											         id="message" 
											         
											         rows="15"
											         cols="50"
											        >
											        </textarea>

											      </div>







											      <div className='pv2 tl fw6 lh-copy f4 mt4 select-options-property-font' style={{'color':'#3F1717'}}>


									    				Number of website pages - Estimate :
												          <select value={this.state.pages} onChange ={this.onPagesChange} className=" select-bx-stylin ml2 gray br2 pv2  f4 athelas ph2" >
												            <option value="1-5"> 1 to 5</option>
												            <option value=" 6-10">6 to 10 </option>
												            <option value="11-20">11 to 20</option>
												           
												          </select>

									    		
									    		    </div>







												          <div className='pv2 tl fw6 lh-copy f4 mt4 select-options-property-font' style={{'color':'#3F1717'}}>


										    				How soon do you require the website :
													          <select value={this.state.urgency} onChange ={this.onUrgencyChange} className=" select-bx-stylin ml2 gray br2 pv2  f4 athelas ph2" >
													            <option value="1-2-weeks"> 1 to 2 weeks</option>
													            <option value=" 3-4-weeks">3 to 4 weeks </option>
													            <option value="1-2-months">1 to 2 months</option>
													           
													          </select>

										    		
										    		    </div>







											      <div className="mv3 flex input-boxes-flex-on-mobile " >
											        <label className="w-30 db fw6 lh-copy f4 select-options-property-font " htmlFor="companyName" style={{'color':'#3F1717'}}>Organization name :</label>
											        <input
											        	 onChange ={this.onCompanyNameChange}
												         className="input-box-styling f4 gray br2 shadow-5 pa3 input-reset ba bg-transparent hover-bg-black hover-white w-70" 
												         type="text" 
												         name="companyName" 
												          id="companyName"
												          
												     />
											      </div>



											      <div className="mt3 flex input-boxes-flex-on-mobile">
											        <label className="w-30 db fw6 lh-copy f4 select-options-property-font" htmlFor="yourName" style={{'color':'#3F1717'}}>Your Name :</label>
											        <input
											         onChange ={this.onYourNameChange}
											         className="input-box-styling f4 gray br2 shadow-5 pa3 input-reset ba bg-transparent hover-bg-black hover-white w-70" 
											         type="name" 
											         name="yourName" 
											          id="yourName" 
											          />

											      </div>




											      <div className="mt3 flex input-boxes-flex-on-mobile">
											        <label className="w-30 db fw6 lh-copy f4 select-options-property-font" htmlFor="email-address" style={{'color':'#3F1717'}}>Email :</label>
											        <input 

											        	onChange ={this.onEmailChange}
												        className=" input-box-styling f4 gray br2 shadow-5 pa3 input-reset ba bg-transparent hover-bg-black hover-white w-70" 
												        type="email"
												        name="email-address"  
												        id="email-address"
												        
												      />
											      </div>



											      	<div className="mv3 flex input-boxes-flex-on-mobile">
											        <label className="w-30 db fw6 lh-copy f4 select-options-property-font " htmlFor="phone" style={{'color':'#3F1717'}}>Phone :</label>
											        <input
											        	 onChange ={this.onPhoneChange}
												         className="input-box-styling f4 gray br2 shadow-5 pa3 input-reset ba bg-transparent hover-bg-black hover-white w-70 " 
												         type="tel" 
												         name="phone" 
												          id="phone"
												          
												     />
											      </div>




											      <p className='f5 red pv4 dim athelas fw8'>* Fill in all details before sending.</p>
											      <h1 className='f2 green athelas sent-paragraph-on-mobile '>Sent. Thanks for getting in touch! Expect an answer from us in the next few hours.</h1>

											     
											    </fieldset>
											    <div className="">
											      <input
											       onClick ={this.onButtonSubmit}
											       className="buttonMiddle-styling2 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f3 dib athelas fw8" 
											       type="submit" 
											       value="Send"/>
											    </div>
											    
											  </div>
											</main>
										</article>
							
						    	   </div>
				
								
				    			</div>	




				    		)

				    	}



				    	    </div>

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
								<a href="https://web.facebook.com/Flex-DevsKe-111123327891531" target="blank" rel="noreferrer" className='no-underline gray'>	<i className=" fab fa-facebook-square fa-4x mr3  footer-social-facebook"></i> </a>
								<a href="https://twitter.com/home?logout=1625046868916" target="blank" rel="noreferrer" className='no-underline gray'>   <i className="fab fa-twitter-square  fa-4x mr3 footer-social-twitter"></i> </a>
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





			</div>

		)
	}	

}

export default Contact;