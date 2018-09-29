/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import * as React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import Home from './containers/HomeContainer/index'
import DetailView from './containers/DetailViewContainer/index'

const Navigation = StackNavigator(
  {
    Home: { screen: Home },
    DetailView: { screen: DetailView },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'screen',
  }
)

// iPhone X safe area (top and bottom color)
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
})

export interface Props {}
export interface State {
  store: Object,
}
export default class Setup extends React.Component<Props, State> {
  render () {
    return <SafeAreaView style={styles.safeArea}>
      <Provider store={configureStore()}>
        <Navigation />
      </Provider>
    </SafeAreaView>
  }
}
