import { Text, StyleSheet, View, TouchableOpacity} from 'react-native';

const LandingPage = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Sign Up for TikTok</Text>
        
        <TouchableOpacity style={styles.cButton}>
            <Text style={styles.cText}>Continue</Text>
        </TouchableOpacity>

        <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>or</Text>
            <View style={styles.divider} />
        </View>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 30,
    fontWeight: '800',
    textAlign: 'center',
    color: 'black',
    marginBottom: 40,
  },
  cButton: {
    backgroundColor: '#FE2C55',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    width: '80%',
  },
  cText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 40,
    width: '100%',
  },
  divider: {
    flex: 1,
    backgroundColor: '#ccc',
    height: 1,
  },
  dividerText: {
    color: '#999',
    marginHorizontal: 10,
    fontSize: 16,
  },
});

export default LandingPage;