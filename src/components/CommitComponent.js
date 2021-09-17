import React from 'react';
import {View, Text, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import styles from '../styles/StyleSheet';

const CommitComponent = ({history}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const {name, hash, message} = history;

  return (
    <View
      style={[
        styles.flatListView,
        {
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        },
      ]}>
      <Text
        style={[
          styles.nameStyle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {name}
      </Text>
      <Text
        style={[
          styles.hashStyle,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {hash}
      </Text>
      <Text
        style={[
          styles.messageStyle,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {message}
      </Text>
    </View>
  );
};

export default CommitComponent;
