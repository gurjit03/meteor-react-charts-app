import React , {Component} from 'react';
import ProjectDisplayContainer from './ProjectDisplayContainer';
import {ReactiveVar} from 'meteor/reactive-var';
import {filter} from './ProjectDisplayContainer';
export default class Search extends Component {

  handleFilterDataSubmit(event) {
    event.preventDefault();
    let dataToSearch = this.refs.dataToSearch.value;
    console.log(dataToSearch,"-----",ProjectDisplayContainer);
    filter.set(dataToSearch);
  }
  render() {
    return (
      <div className="search-through-data">
        <form className="filter-data" onSubmit={this.handleFilterDataSubmit.bind(this)}>
          <input type="search" ref="dataToSearch" onChange={this.handleFilterDataSubmit.bind(this)}/>
          <input type="button" value="search" />
        </form>
      </div>
    )
  }
}

Search.propTypes = {
  filter: React.PropTypes.object,
};
