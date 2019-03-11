import React, { Component } from "react";
import ProjectTile from "./ProjectTile";
import projectsData from "../assets/projectsData";

export default class ProjectGallery extends Component {
  constructor(){
    super();
    this.state = {
      projects : projectsData
    }
  }

  render(){
    return(
      <div>
        {this.state.projects.map(p => <ProjectTile key={p.id}
        name={p.name}
        name={p.name}
        date={p.date}
        tech={p.tech}
        descr={p.descr}
        demoUrl={p.demoUrl}
        repoUrl={p.repoUrl}
        techThumb={p.techThumb}
        projThumb={p.projThumb}
        special={p.special}
        />
        )}
      </div>
    )
  }

}