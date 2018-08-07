import React, { Component } from "react";
import ItemMess from "./ItemMess";
import axios from 'axios';

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: []
        };
        this.callApi = this.callApi.bind(this);
        // get du lieu khi khoi tao component
        this.callApi();
    }

    callApi() {
        const _this = this;
        axios
            .get(
                "http://211.109.9.61:8080/de-tool/public/data/quality/getMessage",
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Methods": "GET",
                        "Access-Control-Allow-Origin": "*"
                    }
                }
            )
            .then(function(response) {
                // handle success
                console.log(response);
                // goi api r set State de render ra list Message

                _this.setState({ datas: response.data.data });
                _this.props.handler(response.data.data[0]);
            })
            .catch(function(error) {
                // handle error
                console.log(error);
            });
    }

    render() {
        const datas = this.state.datas;
        const handler = this.props.handler;
        return (
            <React.Fragment>
                {datas.map((item, index) => {
                    return (
                        <ItemMess
                            itemMess={item}
                            key={index}
                            handlerOnClick={handler}
                        />
                    );
                })}
            </React.Fragment>
        );
    }
}


export default Message;