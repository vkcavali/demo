import React from 'react';
import SideBar from '../Base/SideBar';
import SideOverlay from '../Base/SideOverlay';
import Header from '../Base/Header';
import Footer from '../Base/Footer';
import Main from '../Base/Main';
// import routes from '../../routes'; 

class Dashboard extends React.Component{
    componentDidMount(){
        //window.Dashmix.helpers('sparkline');
    }

    render() {
        return (
            <div id="page-container" className="sidebar-o enable-page-overlay side-scroll page-header-fixed page-header-dark main-content-narrow">
                <SideOverlay/>
                <SideBar/>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}

export default Dashboard;