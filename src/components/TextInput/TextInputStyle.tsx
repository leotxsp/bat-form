import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxWidth: 400,
    color: '#e5e7eb',
  },
  inputer: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#333333',
    color: '#e5e7eb',
    fontSize: 20,
    borderRadius: 5,
    textAlign: 'center',
    minWidth: '80%',
  },
  label: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 17,
    color: '#ffffffff',
  },
});