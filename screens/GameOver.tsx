import { Image, View, StyleSheet, Text } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Colors from "../constants/colors";

interface prop {
  newGame: () => void,
  y: string | number,
  x: string | number
}

const GameOver: React.FC<prop> = ({ newGame, y, x }) => {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/success.png")} />
      </View>
      <Text>
        Your phone needed <Text style={styles.highlight}>{x}</Text> rounds to guess the number <Text style={styles.highlight}>{y}</Text>
      </Text>
      <PrimaryButton pressedButton={newGame}>New Game!</PrimaryButton>
    </View>
  );
};

export default GameOver;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center"
  },  
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  highlight: {
    fontWeight: "bold",
    color: Colors.primary500
  }
});
