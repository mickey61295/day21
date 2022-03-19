import React from 'react'

export default function Prices({ priceList }) {
	const pricePlans = Object.keys(priceList)
	return (
		<>
			{pricePlans.map((plan) => {
				return (
					<div className="price_plan" key={plan}>
						<div className="price_plan_header">
							<h4>{priceList[plan].name}</h4>
							<h1>
								${`${priceList[plan].price}`}
								<span className="period">/month</span>
							</h1>
							<hr />
						</div>
						<div className="price_plan_body">
							<div className="price_plan_body_row">
								<div className="price_plan_body_row_item">
									{priceList[plan].noUsers == 1 ? (
										<p>&#128504; {priceList[plan].noUsers} User</p>
									) : (
										<h4>&#128504; {priceList[plan].noUsers} Users</h4>
									)}
								</div>
								<div className="price_plan_body_row_item">
									<p>&#128504; {priceList[plan].storageSize} Storage</p>
								</div>
							</div>
							<div className="price_plan_body_row">
								<div className="price_plan_body_row_item">
									<p>&#128504; {priceList[plan].publicProj} Public Projects</p>
								</div>
								<div
									className={`price_plan_body_row_item ${priceList[plan].communityAccess}`}
								>
									<p>&#128504; Community Access</p>
								</div>
							</div>
							<div className="price_plan_body_row">
								<div
									className={`price_plan_body_row_item ${priceList[plan].unlimiterPvtProj}`}
								>
									<p>
										{`${
											priceList[plan].unlimiterPvtProj == 'Yes' ? '🗸 ' : '🗴 '
										}`}
										Unlimited Private Projects
									</p>
								</div>
								<div
									className={`price_plan_body_row_item ${priceList[plan].dedicatedPhnsupport}`}
								>
									<p>
										{`${
											priceList[plan].dedicatedPhnsupport == 'Yes' ? '🗸 ' : '🗴 '
										}`}
										Dedicated Phone Support
									</p>
								</div>
							</div>
							<div
								className={`price_plan_body_row ${priceList[plan].freeSubDomain}`}
							>
								<div className="price_plan_body_row_item">
									{plan == 'free' ? (
										<p>&#128500; Free Subdomain</p>
									) : plan == 'basic' ? (
										<p>&#128504; 1 Free Subdomain</p>
									) : (
										<strong>
											<p>&#128504; Unlimited Subdomains</p>
										</strong>
									)}
								</div>
								<div
									className={`price_plan_body_row_item ${priceList[plan].monthlyReports}`}
								>
									<p>
										{`${priceList[plan].monthlyReports == 'Yes' ? '🗸 ' : '🗴 '}`}
										Monthly Reports
									</p>
								</div>
								<div className="subButton">
									<button>
										<h3>Subscribe</h3>
									</button>
								</div>
							</div>
						</div>
					</div>
				)
			})}
		</>
	)
}
