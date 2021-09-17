import React, {useEffect, useState} from 'react';
import {FlatList, View, Text, SafeAreaView, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import getCommits from '../api/GetCommits';
import CommitComponent from '../components/CommitComponent';

const CommitContainer = async () => {
  const [commitHistory, setCommitHistory] = useState(null);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  useEffect(() => {
    const getHistory = async () => {
      const test = [{hash: '1', message: 'test', name: 'testing'}]; //await getCommits();
      console.log('test', test);
      setCommitHistory(test);
      console.log('hist', commitHistory);
    };
    getHistory();
  }, []);
  return (
    // <SafeAreaView>
    <View style={backgroundStyle}>
      <Text style={{color: 'red'}}>Hello world</Text>
      <View style={{flex: 1}}>
        <FlatList
          contentContainerStyle={{flexGrow: 1}}
          data={commitHistory}
          renderItem={({history}) => <CommitComponent history={history} />}
        />
      </View>
      <Text style={{color: 'red'}}>Hello world</Text>
    </View>
    // </SafeAreaView>
  );
};

export default CommitContainer;
