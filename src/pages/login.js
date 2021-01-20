import React,{Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
} from 'react-native';
import LoginForm from './LoginForm';


export default class Login extends Component {
  render() {
    return (
      <View style={styles.container} >
        <View style={styles.headerBack}>
          <View style={{paddingVertical: 40}}>
            <Text style={styles.logo}>METGE</Text>
            <Text style={styles.logoDesc}>Metge Tech</Text>
          </View>
        </View>
        <KeyboardAvoidingView behavior={'position'}>
          <ScrollView style={{paddingVertical: 80}}>
            <View style={styles.loginArea}>
              <Text style={styles.loginAreaTitle}>Metge Yazılım Limited Şirketi</Text>
              <Text style={styles.loginAreaSubTitle}>Metge yazılım ve limited şirketi react native üzerinde sunucu çözümleri sunmaya devam etmektedir</Text>
              <LoginForm />
            </View>
          </ScrollView>
          <View style={styles.signUpArea}>
            <Text style={styles.signUpDescription}>Don't have an account?</Text>
            <TouchableOpacity>
              <Text style={styles.signUpText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    backgroundColor: 'lightgrey',
  },
  headerBack: {
    width: '100%',
    position: 'absolute',
    top: 0,
    height: 250,
    backgroundColor: '#1572de',
  },
  logo: {
    textAlign: 'center',
    fontSize:40,
    fontWeight: 'bold',
    color: '#f2f2f2',
  },
  logoDesc: {
    textAlign: 'center',
    color: '#f2f2f2',
  },
  loginArea: {
    marginVertical: 40,
    marginHorizontal: 40,
    backgroundColor: 'seagreen',
    padding: 20,
    borderRadius: 5,
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 10,
  },
  loginAreaTitle: {
    fontSize: 20,
    textAlign: 'center',
  },
  loginAreaSubTitle: {
    fontSize: 14,
    color: 'blue',
    textAlign: 'center'
  },
  signUpArea: {
    alignItems: 'center'
  },
  signUpDescription: {
    color: '#999'
  },
  signUpText: {
    color: '#666'
  }
});
