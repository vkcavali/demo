import React, { Component } from "react";

class ItemMess extends Component {
	render() {
		const itemMess = this.props.itemMess;
		const handlerOnClick = this.props.handler;
		return (
			<div
				className="list-group font-size-sm"
				onClick={() => handlerOnClick(itemMess)} // bắt sự kiện click = onClick() , sau đó truyền dl vào handler . Trong đó dl đc lấy từ component Message thông qua duyệt và truyền vào qua props
			>
				<a className="list-group-item list-group-item-action">
					<span className="badge badge-pill badge-primary m-1 float-right">
						{itemMess.newMessage}
					</span>
					<p className="font-size-h6 font-w700 mb-0">{itemMess.title}</p>
					<p className="text-muted mb-2">{itemMess.desc}</p>
					<p className="font-size-sm text-muted mb-0">
						<strong>{itemMess.author}</strong>,
						{itemMess.datetime}
					</p>
				</a>
			</div>
		);
	}
}
export default ItemMess;
