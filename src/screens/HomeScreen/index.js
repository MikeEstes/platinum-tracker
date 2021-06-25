import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import Header from './components/Header';
import GameList from './components/GameList';

const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Welcome to the Home Screen!</Text>
      <GameList />
    </View>
  );
};

export default HomeScreen;
