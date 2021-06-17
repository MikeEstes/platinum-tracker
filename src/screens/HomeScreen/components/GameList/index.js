import React from 'react';
import {FlatList, Text, View} from 'react-native';
import GameListItem from '../GameListItem';
import styles from './styles';

// Test Data
import games from './games';

const GameList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={games}
        keyExtractor={(item) => item.name}
        renderItem={({item}) => {
          return <GameListItem game={item} />;
        }}
      />
    </View>
  );
};

export default GameList;
