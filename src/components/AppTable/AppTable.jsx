import AddButton from "../AddButton/AddButton";
import OnlineStatus from "../OnlineStatus/OnlineStatus";
import filterArray from "../../utils/filterArray";

import { connect } from "react-redux";

import { TABLE_HEADERS } from "../../_const";
import "./AppTable.scss";

function AppTable({ items, filterQuery }) {
	const filteredArray = filterQuery
		? filterArray(items, filterQuery, "client")
		: items;

	return (
		<table className="app-table">
			<caption className="app-table__caption">
				<h1 className="app-table__headline">Packages</h1>
				<output htmlFor="search" className="app-table__subtitle">
					{filteredArray.length} entries
				</output>
				<AddButton label="Add package" className="app-table__button" />
			</caption>

			<thead>
				<tr className="app-table__head">
					{TABLE_HEADERS.map((header) => (
						<th key={header}>{header}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{filteredArray.map((item) => (
					<tr className="app-table__row" key={item.id}>
						<td className="app-table__id">{item.id}</td>
						<td>{item.client}</td>
						<td>{item.pickup_address}</td>
						<td>{item.dropoff_address}</td>
						<td>{item.courier}</td>
						<td>
							<OnlineStatus online={item.status} />
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

function mapStateToProps(state) {
	return {
		filterQuery: state.filter.filterString,
	};
}

function mapDispatchToProps() {
	return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(AppTable);
