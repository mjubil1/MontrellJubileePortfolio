import React from 'react';
//import {NavLink} from 'react-router-dom';
//import { Link } from "react-router-dom";

const Footer = () => {
    return (
   	/* <li><Link to="/admin">Admin Login</Link></li> */

    <section className="newCss" id="footer">
		<div className="container">
			<div className="row text-center text-xs-center text-sm-left text-md-left">
				<div className="col-xs-12 col-sm-4 col-md-4">
					<h5> Quick Links</h5>
					<ul className="list-unstyled quick-links">
						<li><a href="#about"><i className="fa fa-angle-double-right"></i> About Me</a></li>
						<li><a href="#education"><i className="fa fa-angle-double-right"></i> Education</a></li>
						<li><a href="#experience"><i className="fa fa-angle-double-right"></i> Internship Experience</a></li>
						<li><a href="#technical"><i className="fa fa-angle-double-right"></i> Technical Skills</a></li>
						{/* <li><a href="#projects"><i className="fa fa-angle-double-right"></i> Projects</a></li>
						<li><a href="#references"><i className="fa fa-angle-double-right"></i> References</a></li> */}
						<li><a href="#contact"><i className="fa fa-angle-double-right"></i> Contact Me</a></li>
						<li><a href="http://www.hilotech.co"><i className="fa fa-angle-double-right"></i> Ask me about</a></li>
						{/* <li><NavLink exact ={true} to ='/admin'><i className="fa fa-angle-double-right"></i>Admin Login</NavLink></li> */}

                    </ul>
				</div>
				<div className="col-xs-12 col-sm-8 col-md-8">
					<h5> More About Me</h5>
					{/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
					   nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					   reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					   pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
					   qui officia deserunt mollit anim id est laborum Lorem ipsum dolor sit
					   amet, consectetur adipiscing elit,
					   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
					   nisi ut aliquip ex ea commodo consequat.

					</p> */}
					<p id="textLink">
						I attended High School on the Eastern Shore of Maryland in Worcester County
						(same county as Ocean City) at Pocomoke High School.Upon graduating High School in 2015,
						I accepted my offer from Towson University to pursue my Bachelor's in Computer Science.
						I graduated Towson University in December 2018. My hobbies include playing/watching sports,
						playing video games with friends, learning new technologies through the likes of Udemy and Codecademy,
						and traveling. My current career goal is focusing on being the best Software Engineer
						that I can possibly be and maximizing my potential while still at a young age. I am proud to
						say that most of the technologies and tools I have learned besides Java, and OOP concepts
						have all been self taught. The technologies used for the construction of this portfolio
						include Axios, expressJS, NodeJS, ReactJS, FontAwesome, Bootstrap, and Redux. I am always
						open to discussing potential opportunities via phone, email, or over a cup of coffee.
						So if you are looking for a young, and ambitious Junior Engineer, <a href="#contact">please reach out to me today!</a>

					</p>
				</div>
			</div>
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
					<ul className="list-unstyled list-inline social text-center">
						<li className="list-inline-item"><a href="https://www.facebook.com/mjubilee1"><i className="fa fa-facebook"></i></a></li>
						<li className="list-inline-item"><a href="https://github.com/mjubil1"><i className="fa fa-github"></i></a></li>
						<li className="list-inline-item"><a href="https://www.linkedin.com/in/montrell-jubilee-2a5a1910a/"><i className="fa fa-linkedin"></i></a></li>
						<li className="list-inline-item"><a href="mailto:mjubil96@gmail.com"><i className="fa fa-envelope" id="email"></i></a></li>
					</ul>
				</div>
				<hr></hr>
			</div>
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
					<p className="h6">This Portfolio was constructed by Towson University Graduate, Montrell Jubilee </p>
				</div>
				<hr></hr>
			</div>
		</div>
	</section>


    );
};

export default Footer;