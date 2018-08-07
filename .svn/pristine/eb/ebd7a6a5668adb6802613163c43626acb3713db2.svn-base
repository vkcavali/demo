import React, { Component } from 'react';
import { HashRouter, Route, Switch , Link} from 'react-router-dom';
import NavMain from './Nav/NavMain';

class SideBar extends Component{
    render() {
        return (
            <nav id="sidebar" aria-label="Main Navigation">
                <div className="bg-header-dark">
                    <div className="content-header bg-white-10">
                        <a className="link-fx font-w600 font-size-lg text-white" href="index.html">
                            <span className="text-white-75">Dash</span>
                            <span className="text-white">mix</span>
                        </a>
                        <div>
                            <a className="js-class-toggle text-white-75" data-target="#sidebar-style-toggler" data-class="fa-toggle-off fa-toggle-on" data-toggle="layout"
                                data-action="sidebar_style_toggle" href="javascript:void(0)">
                                <i className="fa fa-toggle-off" id="sidebar-style-toggler"></i>
                            </a>
                            <a className="d-lg-none text-white ml-2" data-toggle="layout" data-action="sidebar_close" href="javascript:void(0)">
                                <i className="fa fa-times-circle"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="content-side content-side-full">
                    <NavMain/>
                </div>
            </nav>
        );
    }
}

export default SideBar;