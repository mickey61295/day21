import './App.css'
import Prices from './Prices.js'
function App() {
	const priceList = {
		free: {
			price: 0,
			name: 'FREE',
			noUsers: 1,
			storageSize: '5GB',
			publicProj: 'Unlimited',
			communityAccess: 'Yes',
			unlimiterPvtProj: 'No',
			dedicatedPhnsupport: 'No',
			freeSubDomain: 'No',
			monthlyReports: 'No',
		},
		basic: {
			price: 9,
			name: 'BASIC',
			noUsers: 5,
			storageSize: '50GB',
			publicProj: 'Unlimited',
			communityAccess: 'Yes',
			unlimiterPvtProj: 'Yes',
			dedicatedPhnsupport: 'Yes',
			freeSubDomain: 'Yes',
			monthlyReports: 'No',
		},
		pro: {
			price: 49,
			name: 'PRO',
			noUsers: 'Unlimited',
			storageSize: '150GB',
			publicProj: 'Unlimited',
			communityAccess: 'Yes',
			unlimiterPvtProj: 'Yes',
			dedicatedPhnsupport: 'Yes',
			freeSubDomain: 'Yes',
			monthlyReports: 'Yes',
		},
	}

	return (
		<div className="App">
			{/* title */}
			<header className="App-header">
				<h1>3-Tier Pricing Table</h1>
			</header>
			<div className="priceList_container">
				<Prices priceList={priceList} />
			</div>
		</div>
	)
}

export default App
