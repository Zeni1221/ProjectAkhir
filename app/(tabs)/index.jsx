import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React, { useRef, useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
   <ScrollView>
    <View style={styles.view}>
      <Image style={styles.image}
        source={require('../../assets/images/meong.png')} />
      <Text style={styles.title}>Welcome to Our Apps</Text>
      <TextInput style={styles.textinput} placeholder='Masukkan email disini'
      onChangeText={(text) => setEmail(text)}/>
      <TextInput style={styles.textinput} placeholder='Masukkan password disini' 
      onChangeText={(text) => setPassword(text)}/>
      <Text style={{textAlign: 'center', color: 'red', fontSize: 12, marginTop: 12}}>Forgot Password?</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.title2}>Sign In</Text>
      </TouchableOpacity>
      <Text style={styles.or}>Or login with</Text>
      <View style={styles.viewSosmed}>
        <TouchableOpacity style={styles.sosmed}>
          <Text style={styles.sosmedText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sosmed}>
          <Text style={styles.sosmedText}>Facebook</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title3}>don't have an account? <Text style={{color: 'red', fontSize: 12, marginLeft: 8}}> Sign Up</Text></Text>
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
  title1: {
    textAlign: 'center',
    fontSize: 12,
    color: 'black',
    paddingTop: 16,
    paddingBottom: 16,
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
  or: {
    textAlign: 'center',
    fontSize: 12,
    paddingTop: 24,
  },
  title3: {
    textAlign: 'center',
    fontSize: 12,
    marginTop: 56,
    paddingBottom: 16,
  },
  viewSosmed: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  sosmed: {
    marginTop: 12,
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
  },
  sosmedText: {
    fontSize: 12,
  },
});
