import React , {Component} from 'react';
import ProjectDataForm from '../components/ProjectDataForm';
import ProjectDisplayContainer from '../components/ProjectDisplayContainer';
import {FlowRouter} from 'meteor/kadira:flow-router';

export default class Home extends Component {
  renderComponent() {
    if(FlowRouter.getRouteName() == 'homePage') {
      return (<ProjectDataForm />);
    }else if(FlowRouter.getRouteName() == 'homePageDisplayData') {
      return (<ProjectDisplayContainer />);
    }
  }
  render() {
    return (
      <div className="home-page-wrapper">
        <a href="/display-projects">Review Data</a>
        {this.renderComponent()}
      </div>
    )
  }
}
