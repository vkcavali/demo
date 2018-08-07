import React from 'react';
import NavMainSubItem from './NavMainSubItem';

class NavMainItem extends React.Component{
    
    render() {
        const itemNavMain = this.props.itemNavMain;
        // const index = this.props.key;
        console.log(itemNavMain);

        return (
            <React.Fragment>
                    <li className="nav-main-item">
                        <a className="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                            <i className={"nav-main-link-icon si "+ itemNavMain.icon}></i>
                            <span className="nav-main-link-name">{itemNavMain.heading}</span>
                        </a>
                        <ul className="nav-main-submenu">
                           <NavMainSubItem 
                                childrens={itemNavMain.childrens}
                           />
                        </ul>
                    </li>
            </React.Fragment>
        );
    }
}

export default NavMainItem;