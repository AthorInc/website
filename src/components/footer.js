import React from 'react'

import logoLight from 'src/assets/images/logo-full-white.png'
import logoLight2x from 'src/assets/images/logo-full-white2x.png'

import NewsletterBox from 'components/newsletter-box'

const Footer = () => (
	<div className="section footer-section section-pad-md no-pb">
		<div className="ui-shape ui-shape-light ui-shape-footer"></div>
		<div className="container">
			<NewsletterBox />
			<div className="footer-bottom">
				<div className="row align-items-center">
					<div className="col-sm-6 res-m-bttm">
						<a className="footer-brand" href="./">
							<img className="logo logo-light" alt="logo" src={logoLight} srcSet={logoLight2x + ' 2x'} />
						</a>
					</div>
					<div className="col-sm-6 text-sm-right">
						<span className="copyright-text"> &copy; Athor Inc., {(new Date().getFullYear())}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
)

export default Footer
