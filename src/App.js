import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchExchanges } from './actions/exchangeActions'
import ExchangeList from './components/ExchangeList'
import ExchangeListAdmin from './components/ExchangeListAdmin'
import ExchangeListAdminDelete from './components/ExchangeListAdminDelete'
import ExchangeChooseAdmin from './components/ExchangeChooseAdmin'
import CommodityAddAdmin from './components/CommodityAddAdmin'
import CurrencyAddAdmin from './components/CurrencyAddAdmin'

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

  handleExchangeListAdminLoading = () => {
    if(this.props.loading) {
      return <div>Loading...</div>
    } else {
      return <ExchangeListAdmin exchangeData={this.props.exchangeData} />
    }
  }

  handleExchangeListAdminDeleteLoading = () => {
    if(this.props.loading) {
      return <div>Loading...</div>
    } else {
      return <ExchangeListAdminDelete exchangeData={this.props.exchangeData} />
    }
  }

  handleExchangeProps = (props) => {
    if(this.props.loading) {
      return <div>Loading...</div>
    } else {
      // console.log(props.math.params.id)
      // console.log(props.match.params.id)
      // console.log(this.props.exchangeData)
      const foundExchange = this.props.exchangeData.find(p=> p.id === Number(props.match.params.id))
      // console.log(foundExchange)
      // console.log('Here')
      return <ExchangeChooseAdmin exchange={foundExchange}/>
    }
  }

  handleAddCommodityProps = (props) => {
    if(this.props.loading) {
      return <div>Loading...</div>
    } else {
      const foundExchange = this.props.exchangeData.find(p=> p.id === Number(props.match.params.id))
      return <CommodityAddAdmin exchange={foundExchange}/>
    }
  }

  handleAddCurrencyProps = (props) => {
    if(this.props.loading) {
      return <div>Loading...</div>
    } else {
      const foundExchange = this.props.exchangeData.find(p=> p.id === Number(props.match.params.id))
      return <CurrencyAddAdmin exchange={foundExchange}/>
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
                <a>Admin Login</a>
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
                <a>Log Out </a>
              </Link>
              <Link to="/admin/add">
                <a>Add Data </a>
              </Link>
              <Link to="/admin/remove">
                <a>Remove Data </a>
              </Link>
              <h1>Welcome Administrator</h1>
            </Route>

            <Route exact path="/admin/add">
              <Link to="/admin">
                <a>Back</a>
              </Link>
              <div className="app__body"> 
                <div className="app__container">
                  {this.handleExchangeListAdminLoading()}
                </div>
              </div>
            </Route>

            <Route path="/admin/add/:id" component={this.handleExchangeProps} />

            <Route path="/admin/add_commodity/:id" component={this.handleAddCommodityProps} />

            <Route path="/admin/add_currency/:id" component={this.handleAddCurrencyProps} />

            <Route exact path="/admin/remove">
              <Link to="/admin">
                <a>Back</a>
              </Link>
              <div className="app__body"> 
                <div className="app__container">
                  {this.handleExchangeListAdminDeleteLoading()}
                </div>
              </div>
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
