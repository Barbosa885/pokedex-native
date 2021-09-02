import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Feed from './src/pages/Feed'

import { useFonts } from 'expo-font';
import {
  Inter_400Regular,
  Inter_500Medium, 
} from "@expo-google-fonts/inter";

import {
  Barlow_300Light_Italic,
  Barlow_500Medium,
  Barlow_600SemiBold,
  Barlow_700Bold,
} from "@expo-google-fonts/barlow";

export default function App() {
  let [loaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Barlow_300Light_Italic,
    Barlow_500Medium,
    Barlow_600SemiBold,
    Barlow_700Bold,
  });

if (!loaded) return null;

  return (
    <>
      <Feed />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
