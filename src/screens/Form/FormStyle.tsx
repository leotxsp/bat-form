import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  FormContainer: {
    flex: 1,
    backgroundColor: '#09080d',
  },

  content: {
    flexGrow: 1,           
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },

  header: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 16,
  },

  dados: {
    width: '99%',
    backgroundColor: '#1e1e1e',
    padding: 16,
    borderRadius: 8,
  },
});

export default styles;
