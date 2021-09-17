import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  flatListView: {
    flex: 1,
    padding: 10,
  },

  errorView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  errorStyle: {
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
    width: '100%',
  },

  seperatorStyle: {
    height: 1,
  },

  nameStyle: {
    fontSize: 24,
    fontWeight: '600',
  },

  hashStyle: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },

  messageStyle: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '700',
  },

  loadingView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '2%',
    marginRight: '2%',
  },
});
