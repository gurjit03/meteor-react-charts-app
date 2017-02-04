
import { Meteor } from 'meteor/meteor';
import {Projects} from '../projects'

Meteor.publish('project-data',() => Projects.find());
