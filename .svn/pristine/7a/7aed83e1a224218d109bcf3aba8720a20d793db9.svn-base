import React, { Component } from "react";
import Detail from "./Detail";
import LeftContent from "./LeftContent";

class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: null
        };
        this.clickMessage = this.clickMessage.bind(this);//clickMessage là function được quản lý bởi Content , phải dùng bind để có thể 
                                                        // sử dụng state , các khai báo được trong function clickMessage bên dưới
    }

    clickMessage(item) {
        this.setState({ message: item });
    }
    render() {
        const message = this.state.message;
        return (
            <main id="main-container">
                <div className="content">
                    <div className="row no-gutters flex-lg-10-auto">
                        <LeftContent handler={this.clickMessage} /> {/* Cơ chế truyền props từ cha vào component con */}
                        <Detail message={message} />
                    </div>
                </div>
            </main>
        );
    }
}
export default MainContent;
