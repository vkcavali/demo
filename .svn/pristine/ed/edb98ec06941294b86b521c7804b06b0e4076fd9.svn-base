import React, { Component } from "react";

class Filter extends Component {
	render() {
		return (
			<div className="d-flex justify-content-between mb-2">
				<div className="dropdown">
					<button
						type="button"
						className="btn btn-sm btn-link font-w600 dropdown-toggle"
						id="inbox-msg-sort"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						Sort by
					</button>
					<div
						className="dropdown-menu font-size-sm"
						aria-labelledby="inbox-msg-sort"
					>
						<a className="dropdown-item" >
							<i className="fa fa-fw fa-sort-amount-down mr-1" /> Newest
						</a>
						<a className="dropdown-item">
							<i className="fa fa-fw fa-sort-amount-up mr-1" /> Oldest
						</a>
					</div>
				</div>
				<div className="dropdown">
					<button
						type="button"
						className="btn btn-sm btn-link font-w600 dropdown-toggle"
						id="inbox-msg-filter"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						Filter by
					</button>
					<div
						className="dropdown-menu dropdown-menu-right font-size-sm"
						aria-labelledby="inbox-msg-filter"
					>
						<a className="dropdown-item active">
							<i className="fa fa-fw fa-asterisk mr-1" /> New
						</a>
						<a className="dropdown-item" >
							<i className="fa fa-fw fa-certificate mr-1" /> VIP
						</a>
						<a className="dropdown-item">
							<i className="fa fa-fw fa-exclamation-circle mr-1" /> Important
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Filter;
