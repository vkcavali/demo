import React, { Component } from "react";
import Message from "./Message";
import Filter from "./Filter";
import Search from "./Search";

class LeftContent extends Component {
    render() {
        const handler = this.props.handler;
        return (
            <div className="col-lg-5 col-xl-3">
                <div id="side-content" className="d-none d-lg-block push">
                    <Search />
                    <Filter />
                    <Message handler={handler} />
                </div>
            </div>
        );
    }
}

export default LeftContent;
