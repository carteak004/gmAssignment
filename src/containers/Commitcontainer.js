/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Text,
  ActivityIndicator,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {getCommits} from '../api/GetCommits';
import styles from '../styles/StyleSheet';
import CommitComponent from '../components/CommitComponent';

const CommitContainer = () => {
  const [commitHistory, setCommitHistory] = useState(null);
  const [dataError, setDataError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    setIsLoading(true);
    getCommits(
      res => {
        setCommitHistory(res);
      },
      () => {
        setDataError(true);
      },
    );
    setIsLoading(false);
  }, []);

  const renderSeperator = () => {
    return <View style={styles.seperatorStyle} />;
  };
  if (!isLoading) {
    if (!dataError) {
      return (
        <FlatList
          ItemSeparatorComponent={renderSeperator}
          contentContainerStyle={{flexGrow: 1}}
          data={commitHistory}
          renderItem={({item}) => <CommitComponent history={item} />}
        />
      );
    } else {
      return (
        <View
          style={[
            styles.errorView,
            {
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            },
          ]}>
          <Text
            style={[
              // styles.errorStyle,
              styles.messageStyle,
              {
                color: isDarkMode ? Colors.white : Colors.black,
              },
            ]}>
            Error retreiving data!
          </Text>
        </View>
      );
    }
  }
  return (
    <View
      style={[
        styles.flatListView,
        {
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        },
      ]}>
      <ActivityIndicator
        size="large"
        color={isDarkMode ? Colors.white : Colors.black}
        animating={true}
      />
    </View>
  );
};

export default CommitContainer;
