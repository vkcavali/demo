import React from 'react';
// import SideBar from '../Base/SideBar' ;

class Header extends React.Component{

     render() {
         return (
            <header id="page-header">
                <div className="content-header">
                    <div>
                        <button type="button" className="btn btn-dual mr-1" data-toggle="layout" data-action="sidebar_toggle">
                            <i className="fa fa-fw fa-bars"></i>
                        </button>
                        <button type="button" className="btn btn-dual" data-toggle="layout" data-action="header_search_on">
                            <i className="fa fa-fw fa-search"></i>
                            <span className="ml-1 d-none d-sm-inline-block">Search</span>
                        </button>
                    </div>
                    <div>
                        <div className="dropdown d-inline-block">
                            <button type="button" className="btn btn-dual" id="page-header-user-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-fw fa-user d-sm-none"></i>
                                <span className="d-none d-sm-inline-block">Admin</span>
                                <i className="fa fa-fw fa-angle-down ml-1 d-none d-sm-inline-block"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right p-0" aria-labelledby="page-header-user-dropdown">
                                <div className="bg-primary-darker rounded-top font-w600 text-white text-center p-3">
                                    User Options
                                </div>
                                <div className="p-2">
                                    <a className="dropdown-item" href="be_pages_generic_profile.html">
                                        <i className="far fa-fw fa-user mr-1"></i> Profile
                                    </a>
                                    <a className="dropdown-item d-flex align-items-center justify-content-between" href="be_pages_generic_inbox.html">
                                        <span>
                                            <i className="far fa-fw fa-envelope mr-1"></i> Inbox</span>
                                        <span className="badge badge-primary">3</span>
                                    </a>
                                    <a className="dropdown-item" href="be_pages_generic_invoice.html">
                                        <i className="far fa-fw fa-file-alt mr-1"></i> Invoices
                                    </a>
                                    <div role="separator" className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="javascript:void(0)" data-toggle="layout" data-action="side_overlay_toggle">
                                        <i className="far fa-fw fa-building mr-1"></i> Settings
                                    </a>
                                    <div role="separator" className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="op_auth_signin.html">
                                        <i className="far fa-fw fa-arrow-alt-circle-left mr-1"></i> Sign Out
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown d-inline-block">
                            <button type="button" className="btn btn-dual" id="page-header-notifications-dropdown" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                <i className="fa fa-fw fa-bell"></i>
                                <span className="badge badge-secondary badge-pill">5</span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0" aria-labelledby="page-header-notifications-dropdown">
                                <div className="bg-primary-darker rounded-top font-w600 text-white text-center p-3">
                                    Notifications
                                </div>
                                <ul className="nav-items my-2">
                                    <li>
                                        <a className="text-dark media py-2" href="javascript:void(0)">
                                            <div className="mx-3">
                                                <i className="fa fa-fw fa-check-circle text-success"></i>
                                            </div>
                                            <div className="media-body font-size-sm pr-2">
                                                <div className="font-w600">App was updated to v5.6!</div>
                                                <div className="text-muted font-italic">3 min ago</div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-dark media py-2" href="javascript:void(0)">
                                            <div className="mx-3">
                                                <i className="fa fa-fw fa-user-plus text-info"></i>
                                            </div>
                                            <div className="media-body font-size-sm pr-2">
                                                <div className="font-w600">New Subscriber was added! You now have 2580!</div>
                                                <div className="text-muted font-italic">10 min ago</div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-dark media py-2" href="javascript:void(0)">
                                            <div className="mx-3">
                                                <i className="fa fa-fw fa-times-circle text-danger"></i>
                                            </div>
                                            <div className="media-body font-size-sm pr-2">
                                                <div className="font-w600">Server backup failed to complete!</div>
                                                <div className="text-muted font-italic">30 min ago</div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-dark media py-2" href="javascript:void(0)">
                                            <div className="mx-3">
                                                <i className="fa fa-fw fa-exclamation-circle text-warning"></i>
                                            </div>
                                            <div className="media-body font-size-sm pr-2">
                                                <div className="font-w600">You are running out of space. Please consider upgrading your plan.</div>
                                                <div className="text-muted font-italic">1 hour ago</div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-dark media py-2" href="javascript:void(0)">
                                            <div className="mx-3">
                                                <i className="fa fa-fw fa-plus-circle text-primary"></i>
                                            </div>
                                            <div className="media-body font-size-sm pr-2">
                                                <div className="font-w600">New Sale! + $30</div>
                                                <div className="text-muted font-italic">2 hours ago</div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                <div className="p-2 border-top">
                                    <a className="btn btn-light btn-block text-center" href="javascript:void(0)">
                                        <i className="fa fa-fw fa-eye mr-1"></i> View All
                                    </a>
                                </div>
                            </div>
                        </div>
                        <button type="button" className="btn btn-dual" data-toggle="layout" data-action="side_overlay_toggle">
                            <i className="far fa-fw fa-list-alt"></i>
                        </button>
                    </div>
                </div>
                <div id="page-header-search" className="overlay-header bg-primary">
                    <div className="content-header">
                        <form className="w-100" action="https://demo.pixelcave.com/dashmix/be_pages_generic_search.html" method="post">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <button type="button" className="btn btn-primary" data-toggle="layout" data-action="header_search_off">
                                        <i className="fa fa-fw fa-times-circle"></i>
                                    </button>
                                </div>
                                <input type="text" className="form-control border-0" placeholder="Search or hit ESC.." id="page-header-search-input" name="page-header-search-input"/>
                            </div>
                        </form>
                    </div>
                </div>
                <div id="page-header-loader" className="overlay-header bg-primary-darker">
                    <div className="content-header">
                        <div className="w-100 text-center">
                            <i className="fa fa-fw fa-2x fa-sun fa-spin text-white"></i>
                        </div>
                    </div>
                </div>
            </header>
         );
     }
 }
 
 export default Header;