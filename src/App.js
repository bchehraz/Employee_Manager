import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAkIWrLQpoGLW6_iaMoS6ResGTgFyZEtMQ',
      authDomain: 'employee-manager-38d36.firebaseapp.com',
      databaseURL: 'https://employee-manager-38d36.firebaseio.com',
      projectId: 'employee-manager-38d36',
      storageBucket: 'employee-manager-38d36.appspot.com',
      messagingSenderId: '294836656548'
  };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
