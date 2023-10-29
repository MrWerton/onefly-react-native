import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavLink } from '../../components/NavLink';
export const HomePage = () => {
 
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hello,</Text>
      <Text style={styles.profileName}>Werton</Text>
      <NavLink/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#afa',
      padding: 16,
      gap: 8,
    },
    greeting:{
        fontSize: 16,
        color: '#222',
    },
    profileName:{
        fontSize: 32,
        color: '#222'
    }
    
   
});