import photo1 from '../../../assets/media/photos/photo1.jpg'
import React, { Component } from "react";
import photo2 from '../../../assets/media/photos/photo2.jpg'
import photo3 from '../../../assets/media/photos/photo3.jpg'
import avatar7 from '../../../assets/media/avatars/avatar7.jpg'

class Detail extends Component {
    render(){
        const message = this.props.message;
        console.log(message);
        if(message){
            return (<div className="col-lg-7 col-xl-9 bg-body-dark">
                    <div className="content">
                        <div className="block block-fx-pop">
                            <div className="block-content block-content-sm block-content-full bg-body-light">
                                <div className="media py-3">
                                    <div className="mr-3 ml-2 overlay-container overlay-right">
                                        <img className="img-avatar img-avatar48" src={avatar7} alt=""/>
                                        <i className="far fa-circle text-white overlay-item font-size-sm bg-success rounded-circle"></i>
                                    </div>
                                    <div className="media-body">
                                        <div className="row">
                                            <div className="col-sm-7">
                                                <a className="font-w600 link-fx" href="javascript:void(0)">{message.author}</a>
                                                <div className="font-size-sm text-muted">{message.email}</div>
                                            </div>
                                            <div className="col-sm-5 d-sm-flex align-items-sm-center">
                                                <div className="font-size-sm font-italic text-muted text-sm-right w-100 mt-2 mt-sm-0">
                                                    <p className="mb-0">{message.datetime}</p>
                                                    <p className="mb-0">
                                                        {new Date(message.datetime).getHours() + ":" + new Date(message.datetime).getMinutes()}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="block-content">
                                <h2>{message.title}</h2>
                                <p>{message.detail}</p>
                            </div>
                            <div className="block-content bg-body-light">
                                <div className="row gutters-tiny">
                                    { <Image image={message.fileAttach} />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );

        }

        return null
    }
}

class Image extends Component{
    render(){
        const image = this.props.image;
        console.log(image)
        if(!image) return null

        return(
            <React.Fragment>
                {image.map((fileAttach, index) => {
                    return (
                        <div className="col-4 col-xl-2" key={index}>
                            <div className="options-container fx-item-rotate-r">
                                <img className="img-fluid options-item" src={photo1} alt=""/>
                                <div className="options-overlay bg-black-75">
                                    <div className="options-overlay-content">
                                        <a className="btn btn-sm btn-primary" href="javascript:void(0)">
                                            <i className="fa fa-download"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <p className="font-size-sm text-muted pt-2">
                                <i className="fa fa-paperclip"></i> {fileAttach.name} {fileAttach.detail}
                            </p>
                        </div>
                    );
                })}
            </React.Fragment>
        )}
}
export default Detail;
