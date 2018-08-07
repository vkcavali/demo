import React , {Component} from "react";
import ProjectList from './ProjectList';
import ProjectDetail from './ProjectDetail';

class ContentProject extends Component{
    constructor(props) {
        super(props);
        this.state = {
            itemProject:null
        };
        this.onClickProject = this.onClickProject.bind(this);
    }
    
    onClickProject(itemProject){
        this.setState({itemProject:itemProject});
    }

    render(){
        const itemProject  = this.state.itemProject;
        return(
            <main id="main-container">
                    <div className="row no-gutters flex-lg-10-auto">
                        <ProjectList onClick={this.onClickProject} />
                        <ProjectDetail itemProject = {itemProject}  />
                        
                </div>
            </main>
        )
    }
}
export default ContentProject;