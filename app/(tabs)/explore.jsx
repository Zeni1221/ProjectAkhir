import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React, { useRef, useState } from 'react'

const Login = () => {
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
   <ScrollView>
    <View style={styles.view}>
      <Image style={styles.image} source={require('../../assets/images/meong.png')} />
      <Text style={styles.title}>Welcome to Our Apps</Text>
      <TextInput style={styles.textinput} placeholder='Masukkan username anda'
      onChangeText={(text) => setUser(text)}/>
      <TextInput style={styles.textinput} placeholder='Masukkan email anda'
      onChangeText={(text) => setEmail(text)}/>
      <TextInput style={styles.textinput} placeholder='Masukkan password anda'
      onChangeText={(text) => setPassword(text)}/>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.title2}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.title3}>Already have an account?
       <Text style={{color: 'red', fontSize: 12, marginLeft: 8}}>  Sign In</Text></Text>
    </View>
    </ScrollView>
  );
}

export default Login;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    justifyContent: 'center',
    width: 400,
    height: 200,
    alignSelf: 'center',
    marginTop: 36,
    marginBottom: 36,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 24,
    marginBottom: 58,
    textAlign: 'center',
  },
  textinput: {
    fontSize: 16,
    borderColor: 'black',
    padding: 8,
    paddingBottom: 8,
    paddingRight: 24,
    paddingLeft: 24,
    marginTop: 8,
    marginBottom: 8,
    marginRight: 24,
    marginLeft: 24,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#dddddd',
    backgroundColor: '#ffffff',
  },
  button: {
    backgroundColor: '#FF8225',
    justifyContent: 'center',
    padding: 10,
    marginTop: 24,
    marginRight: 24,
    marginLeft: 24,
    borderRadius: 10,
    alignItems: 'center',
  },
  title2: {
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
  },
  title3: {
    textAlign: 'center',
    fontSize: 12,
    marginTop: 130,
    // paddingBottom: 24,
  },
});
