import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchLoggedInUser } from './actions/userActions'
import { logOutUser } from './actions/userActions'
import { fetchExchanges } from './actions/exchangeActions'
import { fetchCommodities } from './actions/exchangeActions'
import { fetchCurrencies } from './actions/exchangeActions'
import LoginForm from './containers/loginForm'
import ExchangeList from './components/ExchangeList'
import CommodityList from './components/CommodityList'
import CurrencyList from './components/CurrencyList'
import AdminAddDataList from './components/AdminAddDataList'
import ExchangeListAdminDelete from './components/ExchangeListAdminDelete'
import CommodityListAdminDelete from './components/CommodityListAdminDelete'
import CurrencyListAdminDelete from './components/CurrencyListAdminDelete'
import ExchangeChooseAdmin from './components/ExchangeChooseAdmin'
import CommodityAddAdmin from './components/CommodityAddAdmin'
import CurrencyAddAdmin from './components/CurrencyAddAdmin'
import NavBar from './components/NavBar'
import NotLoggedInNavBar from './components/NotLoggedInNavBar'
import WelcomeUser from './components/WelcomeUser'
import WelcomeAdmin from './components/WelcomeAdmin'
import AdminInfo from './components/AdminInfo'
import AdminDeleteDataList from './components/AdminDeleteDataList'
import Loading from './svg/Loading'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import './App.css';

class App extends Component {

  fetchEverything = () => {
    this.props.fetchLoggedInUser()
    this.props.fetchExchanges()
    this.props.fetchCommodities()
    this.props.fetchCurrencies()
  }

  componentDidMount() {
    this.fetchEverything()
  }

  handleExchangeListLoading = () => {
    if(this.props.loading) {
      return <Loading />
    } else {
      return <ExchangeList exchangeData={this.props.exchangeData} />
    }
  }

  handleCommodityListLoading = () => {
    if(this.props.loading) {
      return <Loading />
    } else {
      return <CommodityList commodityData={this.props.commodityData} />
    }
  }

  handleCurrencyListLoading = () => {
    if(this.props.loading) {
      return <Loading />
    } else {
      return <CurrencyList currencyData={this.props.currencyData} />
    }
  }

  handleExchangeListAdminLoading = () => {
    if(this.props.loading) {
      return <Loading />
    } else {
      return <AdminAddDataList exchangeData={this.props.exchangeData} />
    }
  }

  handleExchangeListAdminDeleteLoading = () => {
    if(this.props.loading) {
      return <Loading />
    } else {
      return <ExchangeListAdminDelete exchangeData={this.props.exchangeData} />
    }
  }

  handleCommodityListAdminDeleteLoading = () => {
    if(this.props.loading) {
      return <Loading />
    } else {
      return <CommodityListAdminDelete commodityData={this.props.commodityData} />
    }
  }
  
  handleCurrencyListAdminDeleteLoading = () => {
    if(this.props.loading) {
      return <Loading />
    } else {
      return <CurrencyListAdminDelete currencyData={this.props.currencyData} />
    }
  }

  handleExchangeProps = (props) => {
    if(this.props.loading) {
      return <Loading />
    } else {
      const foundExchange = this.props.exchangeData.find(p=> p.id === Number(props.match.params.id))
      return <ExchangeChooseAdmin exchange={foundExchange}/>
    }
  }

  handleAddCommodityProps = (props) => {
    if(this.props.loading) {
      return <Loading />
    } else {
      const foundExchange = this.props.exchangeData.find(p=> p.id === Number(props.match.params.id))
      return <CommodityAddAdmin exchange={foundExchange}/>
    }
  }

  handleAddCurrencyProps = (props) => {
    if(this.props.loading) {
      return <Loading />
    } else {
      const foundExchange = this.props.exchangeData.find(p=> p.id === Number(props.match.params.id))
      return <CurrencyAddAdmin exchange={foundExchange}/>
    }
  }

  handleWelcomeAdminLoading = () => {
    if(this.props.user_loading) {
      return <Loading />
    } else {
      return <WelcomeAdmin current_user={this.props.current_user} />
    }
  }

  handleAdminInfoLoading = () => {
    if(this.props.user_loading) {
      return <Loading />
    } else {
      return <AdminInfo current_user={this.props.current_user} />
    }
  }

  logOut = () => {
    localStorage.removeItem("token")
    this.props.logOutUser()
    alert("Succesfully log out!")
  }

  render() {
    return (
      <>
        <Router>
          {this.props.login? <><div className="App">
            <NavBar logOut = {this.logOut}/>
            {this.handleWelcomeAdminLoading()}
            <Switch>  

              <Route exact path="/">
                {this.handleAdminInfoLoading()}
              </Route>

              <Route exact path="/admin/add">
                {this.handleExchangeListAdminLoading()}
              </Route>

              <Route path="/admin/add/:id" component={this.handleExchangeProps} />

              <Route path="/admin/add_commodity/:id" component={this.handleAddCommodityProps} />

              <Route path="/admin/add_currency/:id" component={this.handleAddCurrencyProps} />

              <Route exact path="/admin/delete">
                <AdminDeleteDataList />
              </Route>

              <Route exact path="/admin/delete_exchange">
                {this.handleExchangeListAdminDeleteLoading()}
              </Route>
              
              <Route exact path="/admin/delete_commodity">
                {this.handleCommodityListAdminDeleteLoading()}
              </Route>
              
              <Route exact path="/admin/delete_currency">
                {this.handleCurrencyListAdminDeleteLoading()}
              </Route>

              <Route path="/">
                {this.handleAdminInfoLoading()}
              </Route>

            </Switch>
          </div>
          </>
          : <div className="App">
              <NotLoggedInNavBar />
              <WelcomeUser />
          <Switch>

          <Route exact path="/">
            {this.handleExchangeListLoading()}
          </Route>

          <Route exact path="/commodities">  
            {this.handleCommodityListLoading()}
          </Route>
          
          <Route exact path="/currencies"> 
            {this.handleCurrencyListLoading()}
          </Route>

          <Route exact path="/login">
            <LoginForm />
          </Route>

          <Route path="/">
            {this.handleExchangeListLoading()}
          </Route>

          </Switch> </div>} 
        </Router>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    exchangeData: state.exchange.exchanges,
    commodityData: state.exchange.commodities,
    currencyData: state.exchange.currencies,
    loading: state.exchange.loading,
    login: state.user.login,
    current_user: state.user.user,
    user_loading: state.user.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchExchanges: () => dispatch(fetchExchanges()),
    fetchCommodities: () => dispatch(fetchCommodities()),
    fetchCurrencies: () => dispatch(fetchCurrencies()),
    fetchLoggedInUser: () => dispatch(fetchLoggedInUser()),
    logOutUser: () => dispatch(logOutUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
