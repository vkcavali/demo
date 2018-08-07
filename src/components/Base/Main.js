import React from 'react';
import Background from '../../images/bg_dashboard.jpg';
import avatar1 from '../../assets/media/avatars/avatar1.jpg';
import avatar6 from '../../assets/media/avatars/avatar6.jpg';
import avatar13 from '../../assets/media/avatars/avatar13.jpg';
import avatar14 from '../../assets/media/avatars/avatar14.jpg';
// import Dashmix from '../../%PUBLIC_URL%/assest/js/dashmix.core.min-1.2.js';

class Main extends React.Component{
    
    // componentDidMount(){
    //     window.Dashmix.helpers('sparkline');
    // }

    constructor(props) {
        super(props);
       // Dashmix.helpers('sparkline');
      }

     render() {
         return (
            <main id="main-container">
                <div className="bg-image" style={{'backgroundImage': "url("+ Background +")"}}>
                    <div className="bg-white-90">
                        <div className="content content-full">
                            <div className="row">
                                <div className="col-md-6 d-md-flex align-items-md-center">
                                    <div className="py-4 py-md-0 text-center text-md-left" data-toggle="appear">
                                        <h1 className="font-size-h2 mb-2">Dashboard</h1>
                                        <h2 className="font-size-lg font-w400 text-muted mb-0">Today is a great one!</h2>
                                    </div>
                                </div>
                                <div className="col-md-6 d-md-flex align-items-md-center">
                                    <div className="row w-100 text-center">
                                        <div className="col-6 col-xl-4 offset-xl-4" data-toggle="appear" data-timeout="300">
                                            <p className="font-size-h3 font-w600 text-body-color-dark mb-0">
                                                67
                                            </p>
                                            <p className="font-size-sm font-w700 text-uppercase mb-0">
                                                <i className="far fa-chart-bar text-muted mr-1"></i> Sales
                                            </p>
                                        </div>
                                        <div className="col-6 col-xl-4" data-toggle="appear" data-timeout="600">
                                            <p className="font-size-h3 font-w600 text-body-color-dark mb-0">
                                                $980
                                            </p>
                                            <p className="font-size-sm font-w700 text-uppercase mb-0">
                                                <i className="far fa-chart-bar text-muted mr-1"></i> Earnings
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="row">
                        <div className="col-md-6 col-xl-3" data-toggle="appear">
                            <a className="block block-rounded block-link-pop" href="javascript:void(0)" >
                                <div className="block-content block-content-full d-flex align-items-center justify-content-between">
                                    <div>
                                        <span className="js-sparkline" datnpma-type="line" data-points="[340,330,360,340,360,350,370,360]" data-width="90px" data-height="40px"
                                            data-line-color="#82b54b" data-fill-color="transparent" data-spot-color="transparent"
                                            data-min-spot-color="transparent" data-max-spot-color="transparent" data-highlight-spot-color="#82b54b"
                                            data-highlight-line-color="#82b54b" data-tooltip-suffix="Users"></span>
                                    </div>
                                    <div className="ml-3 text-right">
                                        <p className="text-muted mb-0">
                                            Users
                                        </p>
                                        <p className="font-size-h3 font-w300 mb-0">
                                            +350
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-6 col-xl-3" data-toggle="appear" data-timeout="200">
                            <a className="block block-rounded block-link-pop" href="">
                                <div className="block-content block-content-full d-flex align-items-center justify-content-between">
                                    <div>
                                        <span className="js-sparkline" data-type="line" data-points="[21,17,19,25,24,25,18,27]" data-width="90px" data-height="40px"
                                            data-line-color="#e04f1a" data-fill-color="transparent" data-spot-color="transparent"
                                            data-min-spot-color="transparent" data-max-spot-color="transparent" data-highlight-spot-color="#e04f1a"
                                            data-highlight-line-color="#e04f1a" data-tooltip-suffix="Tickets"></span>
                                    </div>
                                    <div className="ml-3 text-right">
                                        <p className="text-muted mb-0">
                                            Tickets
                                        </p>
                                        <p className="font-size-h3 font-w300 mb-0">
                                            28
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-6 col-xl-3" data-toggle="appear" data-timeout="400">
                            <a className="block block-rounded block-link-pop" href="">
                                <div className="block-content block-content-full d-flex align-items-center justify-content-between">
                                    <div>
                                        <span className="js-sparkline" data-type="line" data-points="[7,9,5,2,3,4,8,3]" data-width="90px" data-height="40px" data-line-color="#3c90df"
                                            data-fill-color="transparent" data-spot-color="transparent" data-min-spot-color="transparent"
                                            data-max-spot-color="transparent" data-highlight-spot-color="#3c90df" data-highlight-line-color="#3c90df"
                                            data-tooltip-suffix="Projects"></span>
                                    </div>
                                    <div className="ml-3 text-right">
                                        <p className="text-muted mb-0">
                                            Projects
                                        </p>
                                        <p className="font-size-h3 font-w300 mb-0">
                                            6
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-6 col-xl-3" data-toggle="appear" data-timeout="600">
                            <a className="block block-rounded block-link-pop" href="">
                                <div className="block-content block-content-full d-flex align-items-center justify-content-between">
                                    <div>
                                        <span className="js-sparkline" data-type="line" data-points="[68,25,36,62,59,80,75,89]" data-width="90px" data-height="40px"
                                            data-line-color="#343a40" data-fill-color="transparent" data-spot-color="transparent"
                                            data-min-spot-color="transparent" data-max-spot-color="transparent" data-highlight-spot-color="#343a40"
                                            data-highlight-line-color="#343a40" data-tooltip-suffix="Sales"></span>
                                    </div>
                                    <div className="ml-3 text-right">
                                        <p className="text-muted mb-0">
                                            Sales
                                        </p>
                                        <p className="font-size-h3 font-w300 mb-0">
                                            +89
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="block block-rounded block-mode-loading-refresh" data-toggle="appear">
                        <div className="block-header block-header-default">
                            <h3 className="block-title">Earnings</h3>
                            <div className="block-options">
                                <div className="btn-group btn-group-sm btn-group-toggle mr-2" data-toggle="buttons" role="group" aria-label="Earnings Select Date Group">
                                    <label className="btn btn-light" data-toggle="dashboard-chart-set-week">
                                        <input type="radio" name="dashboard-chart-options" id="dashboard-chart-options-week"/> Week
                                    </label>
                                    <label className="btn btn-light" data-toggle="dashboard-chart-set-month">
                                        <input type="radio" name="dashboard-chart-options" id="dashboard-chart-options-month"/> Month
                                    </label>
                                    <label className="btn btn-light active" data-toggle="dashboard-chart-set-year">
                                        <input type="radio" name="dashboard-chart-options" id="dashboard-chart-options-year" defaultChecked/> Year
                                    </label>
                                </div>
                                <button type="button" className="btn-block-option align-middle" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                                    <i className="si si-refresh"></i>
                                </button>
                            </div>
                        </div>
                        <div className="block-content block-content-full overflow-hidden">
                            <div className="pull-x pull-b">
                                <canvas className="js-chartjs-dashboard-earnings" style={{'height': '340px'}}></canvas>
                            </div>
                        </div>
                    </div>
                    <div className="row row-deck">
                        <div className="col-xl-6" data-toggle="appear">
                            <div className="block block-rounded block-mode-loading-refresh">
                                <div className="block-header block-header-default">
                                    <h3 className="block-title">Users</h3>
                                    <div className="block-options">
                                        <button type="button" className="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                                            <i className="si si-refresh"></i>
                                        </button>
                                        <button type="button" className="btn-block-option">
                                            <i className="si si-cloud-download"></i>
                                        </button>
                                        <div className="dropdown">
                                            <button type="button" className="btn-block-option" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="si si-wrench"></i>
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="">
                                                    <i className="far fa-fw fa-user mr-1"></i> New Users
                                                </a>
                                                <a className="dropdown-item" href="">
                                                    <i className="far fa-fw fa-bookmark mr-1"></i> VIP Users
                                                </a>
                                                <div role="separator" className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="">
                                                    <i className="fa fa-fw fa-pencil-alt"></i> Manage
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="block-content block-content-full block-content-sm bg-body-dark">
                                    <form action="https://demo.pixelcave.com/dashmix/be_pages_dashboard.html" method="post" onSubmit={(e) =>{return false;}}>
                                        <input type="text" className="form-control form-control-alt" placeholder="Search Users.."/>
                                    </form>
                                </div>
                                <div className="block-content">
                                    <table className="table table-striped table-hover table-borderless table-vcenter font-size-sm">
                                        <thead>
                                            <tr className="text-uppercase">
                                                <th className="font-w700 text-center" style={{'width': '120px'}}>Avatar</th>
                                                <th className="font-w700">Name</th>
                                                <th className="d-none d-sm-table-cell font-w700">Access</th>
                                                <th className="font-w700 text-center" style={{'width': '60 px'}}></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="text-center">
                                                    <img className="img-avatar img-avatar32 img-avatar-thumb" src={avatar1} alt=""/>
                                                </td>
                                                <td>
                                                    <div className="font-w600 font-size-base">Lori Grant</div>
                                                    <div className="text-muted">carol@example.com</div>
                                                </td>
                                                <td className="d-none d-sm-table-cell font-size-base">
                                                    <span className="badge badge-dark">VIP</span>
                                                </td>
                                                <td className="text-center">
                                                    <a href="" data-toggle="tooltip" data-placement="left" title="Edit User">
                                                        <i className="fa fa-fw fa-pencil-alt"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">
                                                    <img className="img-avatar img-avatar32 img-avatar-thumb" src={avatar14} alt=""/>
                                                </td>
                                                <td>
                                                    <div className="font-w600 font-size-base">Jose Wagner</div>
                                                    <div className="text-muted">smith@example.com</div>
                                                </td>
                                                <td className="d-none d-sm-table-cell font-size-base">
                                                    <span className="badge badge-secondary">Pro</span>
                                                </td>
                                                <td className="text-center">
                                                    <a href="" data-toggle="tooltip" data-placement="left" title="Edit User">
                                                        <i className="fa fa-fw fa-pencil-alt"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">
                                                    <img className="img-avatar img-avatar32 img-avatar-thumb" src={avatar14} alt=""/>
                                                </td>
                                                <td>
                                                    <div className="font-w600 font-size-base">Adam McCoy</div>
                                                    <div className="text-muted">john@example.com</div>
                                                </td>
                                                <td className="d-none d-sm-table-cell font-size-base">
                                                    <span className="badge badge-dark">VIP</span>
                                                </td>
                                                <td className="text-center">
                                                    <a href="" data-toggle="tooltip" data-placement="left" title="Edit User">
                                                        <i className="fa fa-fw fa-pencil-alt"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">
                                                    <img className="img-avatar img-avatar32 img-avatar-thumb" src={avatar6} alt=""/>
                                                </td>
                                                <td>
                                                    <div className="font-w600 font-size-base">Sara Fields</div>
                                                    <div className="text-muted">lori@example.com</div>
                                                </td>
                                                <td className="d-none d-sm-table-cell font-size-base">
                                                    <span className="badge badge-secondary">Pro</span>
                                                </td>
                                                <td className="text-center">
                                                    <a href="" data-toggle="tooltip" data-placement="left" title="Edit User">
                                                        <i className="fa fa-fw fa-pencil-alt"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">
                                                    <img className="img-avatar img-avatar32 img-avatar-thumb" src={avatar13} alt=""/>
                                                </td>
                                                <td>
                                                    <div className="font-w600 font-size-base">Jose Parker</div>
                                                    <div className="text-muted">jack@example.com</div>
                                                </td>
                                                <td className="d-none d-sm-table-cell font-size-base">
                                                    <span className="badge badge-success">Free</span>
                                                </td>
                                                <td className="text-center">
                                                    <a href="" data-toggle="tooltip" data-placement="left" title="Edit User">
                                                        <i className="fa fa-fw fa-pencil-alt"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6" data-toggle="appear" data-timeout="200">
                            <div className="block block-rounded block-mode-loading-refresh">
                                <div className="block-header block-header-default">
                                    <h3 className="block-title">Purchases</h3>
                                    <div className="block-options">
                                        <button type="button" className="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                                            <i className="si si-refresh"></i>
                                        </button>
                                        <button type="button" className="btn-block-option">
                                            <i className="si si-cloud-download"></i>
                                        </button>
                                        <div className="dropdown">
                                            <button type="button" className="btn-block-option" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="si si-wrench"></i>
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="javascript:void(0)">
                                                    <i className="fa fa-fw fa-sync fa-spin text-warning mr-1"></i> Pending
                                                </a>
                                                <a className="dropdown-item" href="javascript:void(0)">
                                                    <i className="far fa-fw fa-times-circle text-danger mr-1"></i> Cancelled
                                                </a>
                                                <a className="dropdown-item" href="javascript:void(0)">
                                                    <i className="far fa-fw fa-check-circle text-success mr-1"></i> Cancelled
                                                </a>
                                                <div role="separator" className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="javascript:void(0)">
                                                    <i className="fa fa-fw fa-eye mr-1"></i> View All
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="block-content block-content-full block-content-sm bg-body-dark">
                                    <form action="https://demo.pixelcave.com/dashmix/be_pages_dashboard.html" method="post" onSubmit={(e) =>{return false;}}>
                                        <input type="text" className="form-control form-control-alt" placeholder="Search Purchases.."/>
                                    </form>
                                </div>
                                <div className="block-content">
                                    <table className="table table-striped table-hover table-borderless table-vcenter font-size-sm">
                                        <thead>
                                            <tr className="text-uppercase">
                                                <th className="font-w700">Product</th>
                                                <th className="d-none d-sm-table-cell font-w700">Date</th>
                                                <th className="font-w700">State</th>
                                                <th className="d-none d-sm-table-cell font-w700 text-right" style={{'width': '120px'}}>Price</th>
                                                <th className="font-w700 text-center" style={{'width': '60 px'}}></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <span className="font-w600">iPhone X</span>
                                                </td>
                                                <td className="d-none d-sm-table-cell">
                                                    <span className="font-size-sm text-muted">today</span>
                                                </td>
                                                <td>
                                                    <span className="font-w600 text-warning">Pending..</span>
                                                </td>
                                                <td className="d-none d-sm-table-cell text-right">
                                                    $999,99
                                                </td>
                                                <td className="text-center">
                                                    <a href="" data-toggle="tooltip" data-placement="left" title="Manage">
                                                        <i className="fa fa-fw fa-pencil-alt"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="font-w600">MacBook Pro 15"</span>
                                                </td>
                                                <td className="d-none d-sm-table-cell">
                                                    <span className="font-size-sm text-muted">today</span>
                                                </td>
                                                <td>
                                                    <span className="font-w600 text-warning">Pending..</span>
                                                </td>
                                                <td className="d-none d-sm-table-cell text-right">
                                                    $2.299,00
                                                </td>
                                                <td className="text-center">
                                                    <a href="" data-toggle="tooltip" data-placement="left" title="Manage">
                                                        <i className="fa fa-fw fa-pencil-alt"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="font-w600">Nvidia GTX 1080 Ti</span>
                                                </td>
                                                <td className="d-none d-sm-table-cell">
                                                    <span className="font-size-sm text-muted">today</span>
                                                </td>
                                                <td>
                                                    <span className="font-w600 text-warning">Pending..</span>
                                                </td>
                                                <td className="d-none d-sm-table-cell text-right">
                                                    $1200,00
                                                </td>
                                                <td className="text-center">
                                                    <a href="" data-toggle="tooltip" data-placement="left" title="Manage">
                                                        <i className="fa fa-fw fa-pencil-alt"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="font-w600">Playstation 4 Pro</span>
                                                </td>
                                                <td className="d-none d-sm-table-cell">
                                                    <span className="font-size-sm text-muted">today</span>
                                                </td>
                                                <td>
                                                    <span className="font-w600 text-danger">Cancelled</span>
                                                </td>
                                                <td className="d-none d-sm-table-cell text-right">
                                                    $399,00
                                                </td>
                                                <td className="text-center">
                                                    <a href="" data-toggle="tooltip" data-placement="left" title="Manage">
                                                        <i className="fa fa-fw fa-pencil-alt"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="font-w600">Nintendo Switch</span>
                                                </td>
                                                <td className="d-none d-sm-table-cell">
                                                    <span className="font-size-sm text-muted">yesterday</span>
                                                </td>
                                                <td>
                                                    <span className="font-w600 text-success">Completed</span>
                                                </td>
                                                <td className="d-none d-sm-table-cell text-right">
                                                    $349,00
                                                </td>
                                                <td className="text-center">
                                                    <a href="" data-toggle="tooltip" data-placement="left" title="Manage">
                                                        <i className="fa fa-fw fa-pencil-alt"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="font-w600">iPhone X</span>
                                                </td>
                                                <td className="d-none d-sm-table-cell">
                                                    <span className="font-size-sm text-muted">yesterday</span>
                                                </td>
                                                <td>
                                                    <span className="font-w600 text-success">Completed</span>
                                                </td>
                                                <td className="d-none d-sm-table-cell text-right">
                                                    $999,00
                                                </td>
                                                <td className="text-center">
                                                    <a href="" data-toggle="tooltip" data-placement="left" title="Manage">
                                                        <i className="fa fa-fw fa-pencil-alt"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="font-w600">Echo Dot</span>
                                                </td>
                                                <td className="d-none d-sm-table-cell">
                                                    <span className="font-size-sm text-muted">yesterday</span>
                                                </td>
                                                <td>
                                                    <span className="font-w600 text-success">Completed</span>
                                                </td>
                                                <td className="d-none d-sm-table-cell text-right">
                                                    $39,99
                                                </td>
                                                <td className="text-center">
                                                    <a href="" data-toggle="tooltip" data-placement="left" title="Manage">
                                                        <i className="fa fa-fw fa-pencil-alt"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <span className="font-w600">Xbox One X</span>
                                                </td>
                                                <td className="d-none d-sm-table-cell">
                                                    <span className="font-size-sm text-muted">yesterday</span>
                                                </td>
                                                <td>
                                                    <span className="font-w600 text-success">Completed</span>
                                                </td>
                                                <td className="d-none d-sm-table-cell text-right">
                                                    $499,00
                                                </td>
                                                <td className="text-center">
                                                    <a href="" data-toggle="tooltip" data-placement="left" title="Manage">
                                                        <i className="fa fa-fw fa-pencil-alt"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
         );
     }
 }
 
 export default Main;