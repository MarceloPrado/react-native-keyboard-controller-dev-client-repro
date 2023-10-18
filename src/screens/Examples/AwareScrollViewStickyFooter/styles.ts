import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  pageContainer: {
    ...StyleSheet.absoluteFillObject,
  },

  input: {
    borderWidth: 1,
    borderColor: 'black',
    width: '100%',
    height: 50,
    marginTop: 50,
    backgroundColor: 'yellow',
  },

  footer: {
    backgroundColor: '#d4e4ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: '100%',
    gap: 10,
  },
  footerText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
