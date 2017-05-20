import '../Config'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import RootContainer from './RootContainer'
import createStore from '../Redux'
import * as firebase from 'firebase'

// create our store
const store = createStore()

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyCDGi_ct1ZtxBtf6EJeckuTTV1FDgMq7aY',
  authDomain: 'moodpaint-1a0d8.firebaseapp.com',
  databaseURL: 'https://moodpaint-1a0d8.firebaseio.com',
  projectId: 'moodpaint-1a0d8',
  storageBucket: 'moodpaint-1a0d8.appspot.com',
  messagingSenderId: '659933779260'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )
  }
}

export default App
