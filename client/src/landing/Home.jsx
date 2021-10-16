import React ,{useState, useEffect} from 'react';
import '../styles/Home.css';
import Header from './Header';
import Footer from './Footer';
import Aos from "aos";
import "aos/dist/aos.css"



const Home = (props) =>{

	const quotes = {
		0:{
			client: "Lorem ipsum",
			quote: "HLorem ipsum dolor sit amet, consectetur adipiscing elit. Ac volutpat vestibuluisLorem ipsum dolor sit amet, consectetur adipiscing elit. Ac volutpat vestibulu",
		},
		1: {
			client: "Ipsum Lorem",
			quote: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac volutpat vestibulutly began helping Inventory and I know for them it is a huge help. You always have a smile and jokes for the office super important in making sure the environment is friendly and healthy"
		},   
		2: {
			client: "Ipsum Lorem",
			quote: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac volutpat vestibulutly began helping Inventory and I know for them it is a huge help. You always have a smile and jokes for the office super important in making sure the environment is friendly and healthy"
		},   
		3: {
			client: "Ipsum Lorem",
			quote: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac volutpat vestibulutly began helping Inventory and I know for them it is a huge help. You always have a smile and jokes for the office super important in making sure the environment is friendly and healthy"
		},   
		4: {
			client: "Ipsum Lorem",
			quote: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac volutpat vestibulutly began helping Inventory and I know for them it is a huge help. You always have a smile and jokes for the office super important in making sure the environment is friendly and healthy"
		},      
	};

	const [current, setCurrent] =useState(quotes[0]);

	const[ active, setActive] =  useState(0);


	const  handleClick = (e) =>{
		setCurrent(quotes[e.target.getAttribute("data-quote")]);
		setActive(e.target.getAttribute("data-quote"));
	}

	useEffect(() =>{
		Aos.init({duration: 2000})
	},[])


	return(
		<div>
			<div data-aos="fade-down" className="home-container">
				<Header/>				
				<div className="main-content">
					<div className="left-main-content">
						<h1 className="main-h1">A CUTTING EDGE FUTURE INVENTORY SYSTEM </h1>
						<h2>Management made it more easier.</h2>
						<button className="btn-getstarted">GET STARTED NOW</button>
					</div>
					
					<div className="right-main-content">
						<img src="/images/investment-data/amico.svg" alt="business-person"/>	
					</div>	
				</div>	
			</div>

			<div className="sub-container">
				<div data-aos="zoom-in-down" className="sub-content-card">
					<img src="/images/product-tour/bro.svg" alt="conmputer analytics" />
					<h4>LOREM</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac volutpat vestibulum hendrerit aliquam urna, luctus. Quam non tellus nulla mollis eget sem netus.</p>
				</div>
				<div data-aos="zoom-in-down" data-aos-delay="500" className="sub-content-card">
					<img src="/images/charts/bro.svg" alt="conmputer analytics" />
					<h4>LOREM</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac volutpat vestibulum hendrerit aliquam urna, luctus. Quam non tellus nulla mollis eget sem netus.</p>
				</div>
				<div data-aos="zoom-in-down" data-aos-delay="800" className="sub-content-card">
					<img src="/images/address/bro.svg" alt="conmputer analytics" />
					<h4>LOREM</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac volutpat vestibulum hendrerit aliquam urna, luctus. Quam non tellus nulla mollis eget sem netus.</p>
				</div>
			</div>
			<div data-aos="fade-up" className="sub-text">
				<div>
					<h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis adipiscing elit cras aliquam. Tortor in non scelerisque pretium, scelerisque hac cursus leo. </p>
					<button className="btn-getstarted">GET FREE TRIAL</button>
				</div>
			</div>
			<div data-aos="fade-up" className="services-container">
			<h1>WHY ALYH INVENTORY MANAGEMENT SYSTEM?</h1>
				<div className="services-grid">
			
				<div data-aos="fade-down" className="services-card">
					<img src="images/ri_customer-service-2-fill.svg" alt="" className=""/>
					<p>Customer Support Friendly</p>
				</div>
				<div data-aos="fade-down"  className="services-card">
					<img src="images/ri_truck-line.svg" alt="" className=""/>
					<p>Warehouse Tracking System</p>
				</div>
				<div data-aos="fade-down"  className="services-card">
					<img src="images/ri_secure-payment-line.svg" alt="" className=""/>
					<p>Fast amd Secured Billing Management</p>
				</div>
				<div data-aos="fade-down" className="services-card">
					<img src="images/ri_arrow-up-down-fill.svg" alt="" className=""/>
					<p>Great Referral and Leads Feature</p>
				</div>
				<div data-aos="fade-down" className="services-card">
					<img src="/images/ri_admin-line.svg" alt="" className=""/>
					<p>Administrator Dashboard</p>
				</div>
				<div data-aos="fade-down" className="services-card">
					<img src="/images/ri_money-dollar-circle-line.svg" alt="" className=""/>
						<p>Cash Revenue Increase</p>
				</div>
				</div>
			
			</div>

			<div data-aos="fade-up" className="testimonials-container">
				<div className="carousel-container">
				<p className="quote-font">"{current.quote}"</p>
				<p className="client-font">-{current.client}</p>
				<div className="carousel-btn">
					{
						Object.keys(quotes).map(index => (
							active?
										<span onClick={e => handleClick(e)} data-quote={index} key={index}
								/>
							:<span onClick={e => handleClick(e)} data-quote={index} key={index}
							/>
						))
					
					}
				</div>	
				
				</div>
					
			</div>

			
			<Footer/>
		</div>
	)
}

export default Home;