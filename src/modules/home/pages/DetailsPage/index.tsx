import React from 'react'
import { useEffect } from 'react';
import { Dimensions, SafeAreaView, StyleSheet } from 'react-native';
import Animated, {useAnimatedStyle, useSharedValue, withDelay, withRepeat, withSpring, withTiming} from 'react-native-reanimated';

const {height, width} = Dimensions.get('screen')
export const DetailsPage = () => {

  const axisX = useSharedValue(-height/2)
  const squadProps = {
    w: useSharedValue(0),
    h: useSharedValue(0),
    rotation: useSharedValue(0),
    borderRadius: useSharedValue(20),
    color: useSharedValue('red')
  }

  const squadStyle = useAnimatedStyle(()=>({
    width: squadProps.w.value,
    height: squadProps.h.value,
    borderRadius: squadProps.borderRadius.value,
    backgroundColor: squadProps.color.value,
    
    transform: [{rotate: `${squadProps.rotation.value}deg`}, {translateX: axisX.value}]
  
  }))
  
  useEffect(()=>{
    squadProps.h.value = withTiming(200, {duration:1000})
    squadProps.w.value = withTiming(200, {duration:1000})
    squadProps.rotation.value = withRepeat(withTiming(180, {duration:1000}), -1, true)
    squadProps.borderRadius.value = withRepeat(withTiming(100, {duration:1000}), -1, true)
    axisX.value = withDelay(withSpring(height/2 - 100), 2000)
  }, [])
  return (
    <SafeAreaView style={styles.container}>
        <Animated.View style={[styles.card, squadStyle]}></Animated.View>
    </SafeAreaView>
  )
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
    }
  });