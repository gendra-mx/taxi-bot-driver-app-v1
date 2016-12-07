import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Router from './containers/Router'

// This app doesn't use actual APIs or dynamic data currently,
// but feel free to take this app as a starting point and build it out
const initialState = {
  recentLocations: [
    {id: 0, icon: 'home', title: 'Inicio', subtitle: '123 Spear St, San Francisco'},
    {id: 1, icon: 'recent', title: 'Ganancias', subtitle: '699 8th St, San Francisco'},
    {id: 2, icon: 'recent', title: 'Calificaciones', subtitle: '888 Brannan St, San Francisco, CA'},
    {id: 3, icon: 'recent', title: 'Cuenta', subtitle: 'Cupertino, CA'},
    {id: 4, icon: 'recent', title: '445 1st St', subtitle: 'Sunnyvale, CA'},
  ],
  menu : [
    {id: 0, icon: 'home', title: 'Inicio', subtitle: '123 Spear St, San Francisco'},
    {id: 1, icon: 'recent', title: 'Ganancias', subtitle: '699 8th St, San Francisco'},
    {id: 2, icon: 'recent', title: 'Calificaciones', subtitle: '888 Brannan St, San Francisco, CA'},
    {id: 2, icon: 'recent', title: 'Calificaciones', subtitle: '888 Brannan St, San Francisco, CA'},
  ]
}

const store = createStore((state) => state, initialState)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}
