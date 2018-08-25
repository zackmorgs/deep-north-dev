import React, { Component } from 'react';

// lib
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// data
import SiteMap from './../Data/Sitemap.json';

// pages : contain data & components
// import Page.} from './../Pages/Home/Home';

// components & contain data & link to pages
import Background from '../Components/Background/Background';
import Frame from '../Components/Frame/Frame';
import Nav from '../Components/Nav/Nav';

// function Page() {
//   let object = {};
//   object.Setup(Path, Name)
//     this.Path = arg_Path;
//     this.Name = arg_Path;

//     this.Path = this.Path.bind();
//     this.Name = this.Name.bind();
//   }
//   object.getLink(LinkText){
//     return (
//       <Link to={this.Path}>Link</Link>
//     );
//   }
//   object.getRoute() {
//     return (
//       <Route exactPath={ this.Path } component={ this.Name }/>
//     );
//   }

//   return object;
// };

// {
//   /* <Route exactPath='/' component = { Home } />
// <Route exactPath='/about' component={About} />
// <Route exactPath='/contact' component={Contact} />
// <Route exactPath='/services' component={Services} /> */
// }

export default class Website extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      currentPage: 'Home'
    };

    // todo
    // this.Navigation = Pages.map( (Webpage) =>{
    //   Webpage
    // });
  }
  componentDidMount() {
    this.setState({
      isLoaded: true
    });
  }
  render() {
    let Container = {
      CssClass: 'container'
    };

    this.state.isLoaded
      ? (Container.CssClass += 'is-loaded')
      : console.log('loading...');

    return (
      <div id="deep-north" classsName={Container.CssClass}>
        <Background Angle={0} Width={24} Height={24}>
          <Frame>
            <Router>
              <React.Fragment>
                {/* {this.Navigation} */}
                <div className="nav-container">
                  <nav>
                    <ul>
                      {/* todo : consolidate */}
                      {SiteMap.map(Page => {
                        return (
                          <li>
                            <Link to={Page.Path} component={Page.Name}>
                              <span className="Icon">{Page.LinkIcon}</span>
                              <span className="caption">{Page.Name}</span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </nav>
                </div>

                {SiteMap.map(page => {
                  return <Route exactPath={page.Path} component={page.Name} />;
                })}
              </React.Fragment>
            </Router>
          </Frame>
        </Background>
      </div>
    );
  }
}
