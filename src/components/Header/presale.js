import React from 'react'

const Presale = () => (
	<div className="presale-box">
		<div className="container">
			<div className="row no-gutters justify-content-center">
				<div className="col-xl-4 col-md-5">
					<div className="presale-countdown">
						<h5>Pre-sale is Live Now</h5>
						<h6>Pre-Sale ends in</h6>
						<div className="token-countdown" data-date="2018/12/05"></div>
					</div>
				</div>
				<div className="col-xl-6 col-md-7">
					<div className="presale-status">
						<h5>Pre Sale</h5>
						<div className="presale-bar">
							<div className="presale-bar-percent"></div>
						</div>
						<div className="presale-points d-flex justify-content-between">
							<span>15k Sold</span>
							<span>75k Sold</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
)

export default Presale
