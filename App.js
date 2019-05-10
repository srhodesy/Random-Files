import React, { Component, Fragment } from "react";
class App extends Component {
	constructor(props) {
		super(props);
		//const data = [];
		// for (let h = 0; h < 3; h++) {
		// 	for (let i = 0; i < 3; i++) {
		// 		data.push({
		// 			name: mainItems.mainItems[h].name.replace( 'Collection', ''),
		// 			count: mainItems.mainItems[h].skus.numberOfBottles,
		// 			price: mainItems.mainItems[h].skus.salePrice,
		// 		})
		// 	}
		// }
		this.state = { mainItems: [] };
	}
	componentDidMount() {
		fetch("https://www.wsjwine.com/api/offer/0033008")
			.then(response => {
				return response.json();
			})
			.then(data => {
				console.log("data.response.mainItems", data.response.mainItems);

				this.setState({ mainItems: data.response.mainItems });
			});
	}
	render() {
		const mainItems = this.state.mainItems;
		return (
			<div>
				{mainItems.length ? (
					<Fragment>
						<div className="section-header section-header-1">
							<h2>Which Case Would You Like?</h2>
						</div>
						<div className="wine-select">
							<p>
								Whatever you choose, we'll add in two bonus Cabs and two crystal
								glasses and you'll have the complete package - worth over
								<i>$250</i> - for ONLY <i>$69.99</i> (plus <i>$19.99</i>{" "}
								shipping &amp; applicable tax; please allow 5-10 days for
								delivery, depending on shipping state).
							</p>
							{mainItems.map(item => {
								console.log("item", item);

								return (
									<label key={item.itemCode}>
										<input
											type="radio"
											name="wineSelect"
											value="all-reds"
											checked=""
										/>
										<b>{item.product.name.replace("Collection", "")}</b>+ 2
										BONUS Bottles &amp; Glasses
										<b> JUST ${item.listPrice.toString()} </b>
										<a href="#">view wines</a>
									</label>
								);
							})}
						</div>{" "}
					</Fragment>
				) : null}
			</div>
		);
	}
}
export default App;
