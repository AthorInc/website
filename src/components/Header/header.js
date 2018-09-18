import React from 'react'

import logoDark from 'src/assets/images/logo.png'
import logoLight from 'src/assets/images/logotype-white.png'
import logoDark2x from 'src/assets/images/logo2x.png'
import logoLight2x from 'src/assets/images/logotype-white2x.png'

import Banner from 'components/Header/banner';
// import Navigation from 'components/Header/navigation';
// import Presale from 'components/Header/presale';

const Header = ({ siteTitle }) => (
	<div>
		<header className="site-header is-sticky">

			<div className="navbar navbar-full navbar-expand-lg is-transparent" id="mainnav">
				<a className="navbar-brand" href="./">
					<img className="logo logo-dark" alt="logo" src={logoDark} srcSet={logoDark2x + ' 2x'} />
					<img className="logo logo-light" alt="logo" src={logoLight} srcSet={logoLight2x + ' 2x'} />
				</a>

				{ /* <Navigation /> */ }

			</div>

			<Banner siteTitle={siteTitle} />

			{ /* <Presale /> */ }
		</header>
	</div>
)

export default Header
