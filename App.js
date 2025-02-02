import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Platform,
  StatusBar,
  Button,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Sign Up for TikTok</Text>
        
      <TouchableOpacity style={styles.cButton}>
        <Text style={styles.cText}>Continue</Text>
      </TouchableOpacity>

      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>or</Text>
        <View style={styles.divider} />
      </View>
        
      <TouchableOpacity activeOpacity={0.5} style={styles.emailButtonContainer}>
        <Image
          source={require("./assets/mail.png")}
          style={styles.emailImage}
        />
        <Text style={styles.emailButtonText}>Continue with Email</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.facebookButtonContainer}
      >
        <Image
          source={require("./assets/facebook.png")}
          style={styles.facebookImage}
        />
        <Text style={styles.facebookButtonText}>Continue with FaceBook</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.googleButtonContainer}
      >
        <Image
          source={require("./assets/google.png")}
          style={styles.googleImage}
        />
        <Text style={styles.googleButtonText}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity
          activeOpacity={0.5}
          style={styles.alertButtonContainer}
      >
        <Image
            source={require("./assets/miku.png")}
            style={styles.mikuImage}
        />
        <Button
            title="Alert"
            onPress={() => alert("Alert button pressed")}
        />
      </TouchableOpacity>

      <Text style={styles.footerText}>
      By continuing with an account located in{" "} 
      <Text style={{ fontWeight: 'bold' }}>Canada</Text>, you agree to our{" "}
      <Text style={{ fontWeight: 'bold' }}>Terms of Service</Text>{" "}
      and acknowledge that you have read our{" "}
      <Text style={{ fontWeight: 'bold' }}>Privacy Policy</Text>.
      </Text>

      <View style={styles.horizontalDivider} />

      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Already have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.loginButton}>Log in</Text>
        </TouchableOpacity>
      </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, // For Android devices
  },
  emailButtonContainer: {
    marginTop: 15,
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 15,
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  emailButtonText: {
    fontSize: 15,
    color: "black",
    fontWeight: "bold",
  },
  facebookButtonContainer: {
    marginTop: 15,
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 15,
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  facebookButtonText: {
    fontSize: 15,
    color: "black",
    fontWeight: "bold",
  },
  googleButtonContainer: {
    marginTop: 15,
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 15,
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  googleButtonText: {
    fontSize: 15,
    color: "black",
    fontWeight: "bold",
  },
  emailImage: {
    width: 25,
    height: 25,
    position: "absolute",
    left: 20,
  },
  facebookImage: {
    width: 25,
    height: 25,
    position: "absolute",
    left: 20,
  },
  googleImage: {
    width: 25,
    height: 25,
    position: "absolute",
    left: 20,
  },
  mikuImage: {
    width: 25,
    height: 25,
    position: "absolute",
    left: 20,
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
  alertButtonContainer: {
    marginTop: 15,
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 15,
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
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
    width: '90%',
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
  footerText: {
    color: '#999',
    fontSize: 12,
    textAlign: 'center',
    position: 'relative',
    marginTop: 20,
    width: '80%',
  },
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    position: 'relative',
  },
  loginText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginButton: {
    color: '#FE2C55',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  horizontalDivider: {
    width: '80%',
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 20,
  },
});
