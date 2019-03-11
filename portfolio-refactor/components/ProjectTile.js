import React, { Component } from "react";

export default class ProjectTile extends Component {
  // constructor(props){
  //   super(props);
  // }

  render(){
    return (
      <div className="project-box">
        <ul>Diag:
          <li>Project: {this.props.name}</li>
          <li>Made with: {this.props.tech}</li>
          <li>{this.props.date}</li>
          <li>
            <ul>
              {this.props.descr.map((e,i) => <li key={i}>{e}</li>)}
            </ul>
          </li>
          <li>Open Demo App: {this.props.demoUrl}</li>
          <li>Open Code Repository: {this.props.repoUrl}</li>
        </ul>
      </div>
    )
  }


}