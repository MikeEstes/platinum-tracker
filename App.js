/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import GlobalStyles from './src/GlobalStyles';
import React from 'react';
import type { Node } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';

// Pretty sure this is a bug in VS
const App: () => Node = () => {
  return (
    <SafeAreaView style={GlobalStyles.AndroidSafeArea}>
      <HomeScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
