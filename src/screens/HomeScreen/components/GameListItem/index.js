import React, { useState } from 'react';
import { Text, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const GameListItem = (props) => {
  const { name, bronze, silver, gold, platinum, lastPlayed } = props.game;
  const [platinumCollected, setPlatinumCollected] = useState(false);

  console.log({ name }, { platinumCollected });
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Ionicons name="skull" size={24} />
      <View style={styles.trophyContainer}>
        <Text>Bronze: {bronze}</Text>
        <Text>Silver: {silver}</Text>
        <Text>Gold: {gold}</Text>
        <Text>Platinum:</Text>
        {platinum ? <Ionicons name="skull-outline" size={24} /> : null}
      </View>
      <Text>Last Played: {lastPlayed}</Text>

      <BouncyCheckbox onPress={(isChecked: boolean) => {}} />
    </View>
  );
};

export default GameListItem;
