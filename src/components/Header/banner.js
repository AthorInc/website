import React from 'react'

import logoBanner from 'src/assets/images/logo-full-big-colored.png'
import logoBanner2x from 'src/assets/images/logo-full-big-colored2x.png'
// import Socials from  'components/Header/socials';
// import NewsletterBox from 'components/newsletter-box'

const Banner = ({ siteTitle }) => (
	<div id="header" className="banner">
		<div className="ui-shape ui-shape-light ui-shape-header"></div>
		<div className="container">
			<div className="banner-content">
				<div className="row align-items-center text-center justify-content-center">
					<div className="col-sm-10 col-md-12 col-lg-10">
						<div className="header-txt tab-center mobile-center">
							<img className="logo-banner" alt="logo" src={logoBanner} srcSet={logoBanner2x + ' 2x'} />
							<div className="gaps size-1x d-md-block"></div>
							<h2>{siteTitle}</h2>
							<h5>We’re building a DApp to return peer-to-peer creative collaboration to the center of book publishing. Our hope is to refashion how books are produced, funded, publicized, sold, and shared globally. It should be fun.</h5>
							<h5>(More info, plus a whole new landing page, coming soon.)</h5>
							<h6>Questions? Please <a href="mailto:hello@athor.io?subject=So%20what's%20this%20about?">get in touch</a>!</h6>
							<div className="gaps size-1x d-md-block"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		{ /* <Socials /> */ }
	</div>
)

export default Banner
