import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Home'
import Signup from '../Signup'

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home"
        component={Home}
      />

      <Tab.Screen 
        name="Signup"
        component={Signup}
      />
    </Tab.Navigator>
  )
}

export default Tabs

const styles = StyleSheet.create({})