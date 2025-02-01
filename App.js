import { StyleSheet, View, Button } from "react-native";

export default function App() {
  return (
      <View style={styles.container}>

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
              color = "#000000"
              onPress={() => alert("Alert button pressed")}
          />
        </TouchableOpacity>

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",

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
    mikuImage: {
      width: 25,
      height: 25,
      position: "absolute",
      left: 20,
    },
  },
})
