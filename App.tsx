import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Animated, {useAnimatedStyle, useSharedValue, withTiming} from 'react-native-reanimated';
export default function App() {
  const squadSize = {
    w: useSharedValue(0),
    h: useSharedValue(0)
  }

  const squadStyle = useAnimatedStyle(()=>({
    width: squadSize.w.value,
    height: squadSize.h.value
  }))
  useEffect(()=>{
    squadSize.h.value = withTiming(200, {duration:1000})
    squadSize.w.value = withTiming(200, {duration:1000})
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.card, squadStyle]}/>      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    backgroundColor: '#afa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card:{
    backgroundColor: "#f9f9f9",
    borderRadius: 20
  }
});
