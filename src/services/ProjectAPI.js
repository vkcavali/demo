import React, { Component } from 'react';

const ButtonType = ({ BtnType }) => {
    return (
        <i className={`fa fa-${BtnType} mr-1`}></i>
    )
}

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            BtnTypes: [
                "save",
            ]
        };
    }

    render() {
        const { BtnTypes } = this.state;

        return (
            <button type="button" className="btn btn-primary">
                {BtnTypes.map((BtnType, index) =>
                 <ButtonType
                  key={index}
                  type={BtnType}>
                  </ButtonType>)}
            </button>
        )
    }
}

export default Button;