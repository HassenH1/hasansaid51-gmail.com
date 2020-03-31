import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import { Button } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux'
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const fetchFonts = () => {
  return Font.loadAsync({
    'JuliusSansOne-regular': require('../../assets/fonts/JuliusSansOne-Regular.ttf'),
    'SixCaps-regular': require('../../assets/fonts/SixCaps-Regular.ttf')
  });
};

const Signin = (props) => {
  const dispatch = useDispatch()
  const { auth, user, loading } = useSelector((state) => { /////////////////////< accesses the redux state
    return state
  })

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [font, setFont] = useState(false)

  if (!font) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFont(true)}
      />
    )
  }

  const handleSubmit = () => {
    if (email === "" || password === "") {
      setError("All Fields Must be Completed")
      setTimeout(() => {
        setError("")
      }, 5000)
      return
    }
    let obj = { email, password }
    dispatch({ type: "GET_USER", payload: obj })
    dispatch({ type: "AUTH", payload: true })
    props.navigation.navigate("tabs")
    setEmail("")
    setPassword("")
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <View style={styles.container}>
        <View>
          <Text style={styles.header}>
            Lenses
          </Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.innerText}>
            Sign In
          </Text>

          <TextInput
            style={styles.input}
            onChangeText={text => setEmail(text)}
            value={email}
            placeholder="Email"
            name="email"
          />

          <TextInput
            style={styles.input}
            onChangeText={text => setPassword(text)}
            value={password}
            placeholder="Password"
          />
          <Button
            title="Submit"
            raised={true}
            onPress={handleSubmit}
          />
          <Text style={{ marginTop: 5, color: "red" }}>{error}</Text>

        </View>

        <View>
          <Text>
            Don't have an Account? <Text style={{
              color: "blue"
            }}
              onPress={() => props.navigation.navigate("signup")}
            >
              Sign up
              </Text>
          </Text>
        </View>

      </View>
    </KeyboardAvoidingView>
  )
}

export default Signin

const styles = StyleSheet.create({
  header: {
    fontSize: 70,
    height: "auto",
    fontFamily: "SixCaps-regular"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderWidth: 7,
    borderColor: "#efefef",
  },
  input: {
    color: "black",
    height: 55,
    borderColor: '#ededed',
    width: "80%",
    margin: 15,
    padding: 10,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    color: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0
    },

    elevation: 10,
  },
  form: {
    width: 350,
    alignItems: "center"
  },
  innerText: {
    fontFamily: "JuliusSansOne-regular"
  }
})