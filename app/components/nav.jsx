const React = require('react');
const {Link, IndexLink} = require('react-router');

const Nav = React.createClass({
  onSearch: function(e){
    const location = encodeURIComponent(this.refs.search.value);

    if(location.length > 0){
      this.refs.search.value = '';
      window.location.hash = `#/?location=${location}`;
    }

  },
  render: function(){
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <IndexLink to='/' activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Get Weather </IndexLink>
            </li>
            <li>
              <IndexLink to='/about' activeClassName="active" activeStyle={{fontWeight: 'bold'}}> About </IndexLink>
            </li>
            <li>
              <IndexLink to='/examples' activeClassName="active" activeStyle={{fontWeight: 'bold'}}> Examples </IndexLink>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search weather by city" ref="search"/>
              </li>
              <li>
                <input type="submit" className="button" value="Get Weather"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
})

module.exports = Nav;
