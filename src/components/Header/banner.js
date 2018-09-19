import React from 'react'

import logoBanner from 'src/assets/images/logo-full-big-colored.png'
import logoBanner2x from 'src/assets/images/logo-full-big-colored2x.png'
// import Socials from  'components/Header/socials';
import NewsletterBox from 'components/newsletter-box'

const Banner = ({ siteTitle }) => (
	<div id="header" className="banner banner-zinnia">
		<div className="ui-shape ui-shape-light ui-shape-header"></div>
		<div className="container">
			<div className="banner-content">
				<div className="row align-items-center text-center justify-content-center">
					<div className="col-sm-10 col-md-12 col-lg-10">
						<div className="header-txt tab-center mobile-center">
							<img className="logo-banner" alt="logo" src={logoBanner} srcSet={logoBanner2x + ' 2x'} />
							<div className="gaps size-1x d-md-block"></div>
							<h2>{siteTitle}</h2>
							<div className="gaps size-1x d-md-block"></div>
							<NewsletterBox />
						</div>
					</div>
				</div>
			</div>
		</div>
		{ /* <Socials /> */ }
	</div>
)

export default Banner
