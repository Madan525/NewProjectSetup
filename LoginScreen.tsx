import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image } from 'react-native';

interface LoginScreenProps {
  navigation: any; // You can define a more specific navigation type if needed
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [mobileNo, setMobileNo] = useState('+91 ');
  

  return (
    <View style={styles.container}>
    {/* <Image source={require('../Images/imge.jpg')} style={styles.image} resizeMode='contain'/> */}
      <TextInput
        placeholder="Mobile Number"
        style={styles.input}
        value={mobileNo}
        onChangeText={(text) => setMobileNo(text)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('OTPScreen', { mobileNo })}
      >
        <Text style={styles.buttonText}>Get OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 350,
    height: 200, 
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
    padding: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default LoginScreen;