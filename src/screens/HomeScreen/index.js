import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import Header from './components/Header';
import GameList from './components/GameList';

const HomeScreen = props => {
  return (
    <View>
      <Header />
      <Text>Welcome to the Home Screen!</Text>
      <GameList />
    </View>
  );
};

export default HomeScreen;
