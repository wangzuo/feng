var React = require('react');
var Header = require('./header');
var Footer = require('./footer');
var Nav = require('./nav');
var Grid = require('../react/grid');

var sitemap = require('./map');
var pages = require('../pages')(sitemap);

// var Panel = React.createClass({
//   displayName: 'Panel',
//
//   getPageComponent() {
//     var path = this.props.path;
//
//     if(pages[path]) return pages[path];
//
//     var ps = path.split('/');
//     if(ps.length === 3) return pages[ps[1]][ps[2]]
//     else if(ps.length === 2) return pages[ps[1]]['index'];
//   },
//
//   renderNav() {
//     return null;
//
//     var path = this.props.path;
//     var ps = path.split('/');
//
//     if(!ps[1]) return null;
//
//     var section = sections.filter(function(s) {
//       return s.path === ps[1]
//     })[0];
//
//     if(!section) return null;
//
//     return (
//       <Nav
//         title={section.text}
//         className="u-nav u-nav-y"
//         section={section}
//         pages={section.pages}
//       />
//     );
//   },
//
//   render() {
//     // var component = this.getPageComponent();
//     var component = this.props.component;
//     console.log(component);
//
//     return (
//       <Grid.Container>
//         <Grid.Row>
//           <Grid.Column d={3}>
//             {this.renderNav()}
//           </Grid.Column>
//           <Grid.Column d={9}>
//             {React.createElement(component)}
//           </Grid.Column>
//         </Grid.Row>
//       </Grid.Container>
//     );
//   }
// });

module.exports = React.createClass({
  displayName: 'App',

  renderNav() {
    return null;
  },

  render() {
    var path = this.props.path;
    var component = pages.filter((page) => (page.path === path))[0].component;

    return (
      <div className="app">
        <Header/>
        <Grid.Container>
          <Grid.Row>
            <Grid.Column d={3}>
              {this.renderNav()}
            </Grid.Column>
            <Grid.Column d={9}>
              {React.createElement(component)}
            </Grid.Column>
          </Grid.Row>
        </Grid.Container>
        <Footer/>
     </div>
    );
  }
});
