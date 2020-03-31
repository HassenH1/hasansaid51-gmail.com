import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

const Home = () => {
  const dispatch = useDispatch()
  const { auth, user, loading } = useSelector((state) => { /////////////////////< accesses the redux state
    return state
  })

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {
        auth === true
          ? <Text>Hello world</Text> //remember to put everything here when finished
          : (
            <View style={{  }}>
              <Text>Pull up</Text>
            </View>
          )
      }
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
