import React from 'react';

class NavMainSubItem extends React.Component{
    
    render() {
        const childrens = this.props.childrens;

        return (
            <React.Fragment>
                {childrens.map((children, i) => {
                    if(children.childrens.length == 0){
                        return (
                            <li className="nav-main-item" key = {i}>
                                <a className="nav-main-link" href={children.name}>
                                    <span className="nav-main-link-name">{children.name}</span>
                                </a>
                            </li>
                        );
                    }
                    else{
                        return (
                            <li className="nav-main-item" key = {i}>
                                <a className="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                                    <span className="nav-main-link-name">{children.name}</span>
                                </a>
                                <ul className="nav-main-submenu">
                                    <NavMainSubItem
                                        childrens = {children.childrens}
                                    />
                                </ul>
                            </li> 
                        );
                    }
                    
                })}
            </React.Fragment>
        );
    }
}

export default NavMainSubItem;