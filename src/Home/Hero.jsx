import React from 'react'
function Hero() {
  return (
    <div>
        <div className="hero">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-lg-5">
							<div className="intro-excerpt">
								<h1>Modern Interior <span clsas="d-block">Design Studio</span></h1>
								<p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
								<p><a href="shop" className="btn btn-secondary me-2">Shop Now</a><a href="https://www.kabbanifurniture.com/collections/discounts?gad_source=1&gad_campaignid=21019140154&gbraid=0AAAAA9SWHyhAA3b8-mWXEt3dbyJW1EPN8&gclid=Cj0KCQjwxJvBBhDuARIsAGUgNfjawXsAfJtcB5N9QKNxKSGQ77FUu6OuHfwJ6D3IIwHyfd9twLxJCgYaAg0kEALw_wcB" className="btn btn-white-outline">Explore</a></p>
							</div>
						</div>
						<div className="col-lg-7">
							<div className="hero-img-wrap">
								<img src="images/couch.png" className="img-fluid"/>
							</div>
							
						</div>
					</div>
				</div>
		</div>
    </div>
  )
}
export default Hero