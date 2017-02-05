import {Meteor} from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Projects } from '../../api/projects/projects.js';
import {ProjectDisplay} from './ProjectDisplay';
import {ReactiveVar} from 'meteor/reactive-var';

export const filter = new ReactiveVar(null);

export default ProjectDisplayContainer = createContainer(({ params }) => {
  const subscription = Meteor.subscribe('project-data');
  const loading = !subscription.ready();
  let projects = Projects.find().fetch();

  let filterData = function(searchInput,selectorName) {
    if(searchInput) {
      if(selectorName == 'hours' || selectorName == 'price') {
        projects = Projects.find({ selectorName : { $gt: searchInput } }).fetch();
      }else if(selectorName == 'course' || selectorName == 'classes') {
        console.log(Projects.find({selectorName : searchInput}).fetch());
        projects = Projects.find({selectorName : searchInput}).fetch();
      }else {
        const selector = {};
        selector.name = {
          $regex: new RegExp(`.*${searchInput}.*`, 'i')
        }
        projects = Projects.find(selector).fetch();
      }
    }
  }

  console.log(params,"sdkjfslfjlj")
  console.log(projects);

  return { loading, projects ,filterData};
}, ProjectDisplay);
