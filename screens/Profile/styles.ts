import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'space-between',
  },
  avatar: {
    alignSelf: 'center',
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#C4C4C4',
    marginTop: 48,
    marginBottom: 48,
  },
  infoWrapper: {
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  infoTitle: {
    fontSize: 12,
    fontWeight: '700',
    fontFamily: 'System',
    color: '#00000075',
  },
  info: {
    fontSize: 16,
    color: '#000',
    marginTop: 4,
  },
});
