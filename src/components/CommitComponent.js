import React from 'react';
import {View, Text, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const CommitComponent = ({history}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const {author, hash, message} = history;
  return (
    <View style={backgroundStyle}>
      <Text style={{color: 'red'}}>{author}</Text>
      <Text>{hash}</Text>
      <Text>{message}</Text>
    </View>
  );
};

export default CommitComponent;
