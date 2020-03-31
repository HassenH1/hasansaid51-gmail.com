import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Signup from './components/Signup'
import Signin from './components/Signin'
import Tabs from './components/Tabs'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from './reducers/reducer'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const store = createStore(reducer)

const Stack = createStackNavigator()

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen
            name="signup"
            component={Signup}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="signin"
            component={Signin}
            options={{
              headerShown: false
            }}
          />

          <Stack.Screen
            name="tabs"
            component={Tabs}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}