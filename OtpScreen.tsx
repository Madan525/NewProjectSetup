import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet,Image } from 'react-native';

interface OTPScreenProps {
  route: any; 
}

const OTPScreen: React.FC<OTPScreenProps> = ({ route }) => {
  const [otp, setOTP] = useState<string>('');

  const handleVerify = () => {
    Alert.alert('Success', 'Your details have been submitted');
  };

  return (
    <View style={styles.container}>
      {/* <Image source={require('../Images/imge.jpg')} style={styles.image} resizeMode='contain'/> */}
      <Text>Phone Number: {route.params.mobileNo}</Text>
      <TextInput
        placeholder="Enter OTP"
        style={styles.input}
        maxLength={4}
        onChangeText={(text) => setOTP(text)}
      />
      <Button title="Verify OTP" onPress={handleVerify} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
    padding: 10,
  },
  image: {
    width: 350,
    height: 200, 
    marginBottom: 20,
  },
});

export default OTPScreen;