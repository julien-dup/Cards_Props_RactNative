import React from 'react'
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './assets/Screen/HomeScreen';


export default function App() {
  return (
    <SafeAreaView>
      <HomeScreen />
      <StatusBar style="auto" />
    </SafeAreaView>
    
  );
}


