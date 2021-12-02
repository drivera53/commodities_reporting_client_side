import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchExchanges } from './actions/exchangeActions'
import ExchangeList from './components/ExchangeList'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import logo from './logo.svg';
import './App.css';

class App extends Component {

  fetchEverything = () => {
    this.props.fetchExchanges()
  }

  componentDidMount() {
    this.fetchEverything()
  }

  handleExchangeListLoading = () => {
    if(this.props.loading) {
      return <div>Loading...</div>
    } else {
      return <ExchangeList exchangeData={this.props.exchangeData} />
    }
  }

  render() {
    return (
      <>
        <div className="App">
        <Router>
          <div className="app__navBar">
            {/* <NavBar /> */}
          </div>
          <Switch>
            <Route exact path="/">
              <Link to="/admin">
                <a>Admin</a>
              </Link>  
              <div className="app__body"> 
                <div className="app__container">
                  {/* <Dashboard current_user={this.props.current_user}/> */}
                  {this.handleExchangeListLoading()}
                </div>
              </div>
            </Route>

            <Route exact path="/admin">
              <Link to="/">
                <a>Home</a>
              </Link>
                {/* <LoginForm /> */}
            </Route>

          </Switch>
        </Router>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    exchangeData: state.exchange.exchanges,
    loading: state.exchange.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchExchanges: () => dispatch(fetchExchanges())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
