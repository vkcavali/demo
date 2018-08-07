import React,{Component} from 'react';
import axios from "axios";

export default class ProjectList extends Component{
    render(){
        const onClick = this.props.onClick;
        return(                     
            <div className="col-lg-5 col-xl-3">
                <div className="content">
                    <div id="side-content" className="d-none d-lg-block push">
                         <Project onClick={onClick} />
                    </div>
                </div>
            </div>    
        )
    }
}

class Project extends Component{
    constructor(props){
        super(props);
        this.state = {
                Lists :[]            
        };

        this.AgentAPI = this.AgentAPI.bind(this);
        this.AgentAPI();
    }
    AgentAPI(){
        const _this = this;

        axios .get('http://211.109.9.61:8080/de-tool/api/projects/loadProject' ,{
                    params : {
                        serverName: 'Hyundai'
                    }}
                )
            .then(function(response) {
            // handle success
            console.log(response);
            // goi api r set State de render ra list Message
            _this.setState({ Lists : response.data.data });
        })
        .catch(function(error) {
            // handle error
            console.log(error);
        });
    }
        render(){
            const projects = this.state.Lists;
            const onClick = this.props.onClick;
            return(
                <React.Fragment>
                    {projects.map((project,index) => {
                        return(
                        <ItemProject itemProject={project} key={index} onClick={onClick}/>)
                    })}
                </React.Fragment>
            )
        }
}

class ItemProject extends Component {
	render() {
        const itemProject = this.props.itemProject;
        const onClickProject = this.props.onClick;
		return (
			<div className="list-group font-size-sm" onClick={() => onClickProject(itemProject)}>
				<a className="list-group-item list-group-item-action">
                   {itemProject.projectName}
				</a>
			</div>
		);
	}
}