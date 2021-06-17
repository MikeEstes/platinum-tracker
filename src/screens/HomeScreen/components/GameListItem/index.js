import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const GameListItem = (props) => {
  const {name, bronze, silver, gold, platinum, lastPlayed} = props.game;
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <View style={styles.trophyContainer}>
        <Text>Bronze: {bronze}</Text>
        <Text>Silver: {silver}</Text>
        <Text>Gold: {gold}</Text>
        <Text>Platinum: {platinum ? 'Yes' : 'No'}</Text>
      </View>
      <Text>Last Played: {lastPlayed}</Text>
    </View>
  );
};

export default GameListItem;
