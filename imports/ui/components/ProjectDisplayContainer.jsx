import {Meteor} from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Projects } from '../../api/projects/projects.js';
import {ProjectDisplay} from './ProjectDisplay';
import {ReactiveVar} from 'meteor/reactive-var';

export const filter = new ReactiveVar(null);

export default ProjectDisplayContainer = createContainer(({ params }) => {
  console.log(params,"sdkjfslfjlj")
  console.log(this.props);
  const subscription = Meteor.subscribe('project-data');
  const loading = !subscription.ready();
  let projects;
  if(filter.get()) {
    let selector = {};
    selector.name = {
      $regex: new RegExp(`.*${filter.get()}.*`, 'i'),
    };
     projects = Projects.find(selector).fetch();
  }
  else{
     projects = Projects.find().fetch();
  }
  return { loading, projects };
}, ProjectDisplay);
