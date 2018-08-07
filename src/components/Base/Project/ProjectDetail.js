import React,{Component} from 'react';

export default class ProjectList extends Component{
    render(){
        const itemProject = this.props.itemProject;
        console.log(itemProject)
        return(
            <div className="col-lg-7 col-xl-9 bg-body-dark">
                <h2> PROJECT INFORMATION </h2>
                <ul>
                    <li>    Project Name : </li>
                    <li>    Agent number : 0</li>
                    <li>    Schedule :</li>
                    <li>   Seoul member :</li>
                    <li>   Vdc member :</li>
                </ul>    
            </div>
        )
    }
}