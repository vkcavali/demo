import React, { Component } from "react";
import axios from 'axios';
import NavMainItem from "./NavMainItem";

class NavData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: []
        };
    }

    componentDidMount() {
        this.callApi(this.setResult);
    }
    
    setResult(res) {
        console.log(res);
        this.setState({ datas: res.data });
    }

    callApi(callback) {
        axios.get('http://211.109.9.61:8080/de-tool/public/data/quality/getTrees')
           .then(res => {
             const datas = res.data.data;
             this.setState({ datas });
           })
    }

    render() {
        const { datas } = this.state;   
        return (
            <React.Fragment>
                <li className="nav-main-heading">Base</li>
                    {datas.map((item, index) => {
                        return (
                            <NavMainItem
                                itemNavMain={item}
                                key={index}
                            />
                        );
                    })}
            </React.Fragment>
        );
    }
}
export default NavData;