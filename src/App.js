import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchExchanges } from './actions/exchangeActions'
import { fetchCommodities } from './actions/exchangeActions'
import { fetchCurrencies } from './actions/exchangeActions'
import ExchangeList from './components/ExchangeList'
import CommodityList from './components/CommodityList'
import CurrencyList from './components/CurrencyList'
import ExchangeListAdmin from './components/ExchangeListAdmin'
import ExchangeListAdminDelete from './components/ExchangeListAdminDelete'
import CommodityListAdminDelete from './components/CommodityListAdminDelete'
import CurrencyListAdminDelete from './components/CurrencyListAdminDelete'
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
    this.props.fetchCommodities()
    this.props.fetchCurrencies()
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

  handleCommodityListLoading = () => {
    if(this.props.loading) {
      return <div>Loading...</div>
    } else {
      return <CommodityList commodityData={this.props.commodityData} />
    }
  }

  handleCurrencyListLoading = () => {
    if(this.props.loading) {
      return <div>Loading...</div>
    } else {
      return <CurrencyList currencyData={this.props.currencyData} />
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

  handleCommodityListAdminDeleteLoading = () => {
    if(this.props.loading) {
      return <div>Loading...</div>
    } else {
      return <CommodityListAdminDelete commodityData={this.props.commodityData} />
    }
  }
  
  handleCurrencyListAdminDeleteLoading = () => {
    if(this.props.loading) {
      return <div>Loading...</div>
    } else {
      return <CurrencyListAdminDelete currencyData={this.props.currencyData} />
    }
  }

  handleExchangeProps = (props) => {
    if(this.props.loading) {
      return <div>Loading...</div>
    } else {
      const foundExchange = this.props.exchangeData.find(p=> p.id === Number(props.match.params.id))
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
  
            <Route exact path="/commodities">
              <Link to="/admin">
                <a>Admin Login</a>
              </Link>  
              <div className="app__body"> 
                <div className="app__container">
                  {this.handleCommodityListLoading()}
                </div>
              </div>
            </Route>
            
            <Route exact path="/currencies">
              <Link to="/admin">
                <a>Admin Login</a>
              </Link>  
              <div className="app__body"> 
                <div className="app__container">
                  {this.handleCurrencyListLoading()}
                </div>
              </div>
            </Route>

            <Route exact path="/admin">
              <Link to="/">
                <a>Log Out </a>
              </Link>
              <h1>Welcome Administrator</h1>
              <div className="cryptoList">
                <Link to={"/admin/add"}>
                    <div id="commodity" className="row">
                        <div className="row__intro">
                            <h1>Add Data</h1>
                        </div>
                    </div>
                </Link>
                <Link to={"/admin/delete"}>
                    <div id="commodity" className="row">
                        <div className="row__intro">
                            <h1>Delete Data</h1>
                        </div>
                    </div>
                </Link>
              </div>
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

            <Route exact path="/admin/delete">
              <Link to="/">
                <a>Log Out </a>
              </Link>
              <h1>Welcome Administrator</h1>
              <div className="cryptoList">
                <Link to={"/admin/delete_exchange"}>
                    <div id="commodity" className="row">
                        <div className="row__intro">
                          <h1>Delete Exchange</h1>
                        </div>
                    </div>
                </Link>
                <Link to={"/admin/delete_commodity"}>
                    <div id="commodity" className="row">
                        <div className="row__intro">
                          <h1>Delete Commodity</h1>
                        </div>
                    </div>
                </Link>
                <Link to={"/admin/delete_currency"}>
                    <div id="commodity" className="row">
                        <div className="row__intro">
                          <h1>Delete Currency</h1>
                        </div>
                    </div>
                </Link>
              </div>
            </Route>

            <Route exact path="/admin/delete_exchange">
              <Link to="/admin">
                <a>Back</a>
              </Link>
              <div className="app__body"> 
                <div className="app__container">
                  {this.handleExchangeListAdminDeleteLoading()}
                </div>
              </div>
            </Route>
            
            <Route exact path="/admin/delete_commodity">
              <Link to="/admin">
                <a>Back</a>
              </Link>
              <div className="app__body"> 
                <div className="app__container">
                  {this.handleCommodityListAdminDeleteLoading()}
                </div>
              </div>
            </Route>
            
            <Route exact path="/admin/delete_currency">
              <Link to="/admin">
                <a>Back</a>
              </Link>
              <div className="app__body"> 
                <div className="app__container">
                  {this.handleCurrencyListAdminDeleteLoading()}
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
    commodityData: state.exchange.commodities,
    currencyData: state.exchange.currencies,
    loading: state.exchange.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchExchanges: () => dispatch(fetchExchanges()),
    fetchCommodities: () => dispatch(fetchCommodities()),
    fetchCurrencies: () => dispatch(fetchCurrencies())
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
