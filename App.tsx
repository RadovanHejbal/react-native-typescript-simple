import { useFonts } from "expo-font";
import { ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "./constants/colors";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOver from "./screens/GameOver";

let y1 = 0;
let x1 = 0;

export default function App() {
 const [userNumber, setUserNumber] = useState<number>();
 const [gameIsOver, setGameIsOver] = useState(false);

 function pickedNumberHandler(pickedNumber: number) {
  setUserNumber(pickedNumber);
 }

 function newGameHandler() {
  setGameIsOver(false);
  setUserNumber(undefined);
 }

 function gameOver(x: number, y: number) {
  y1 = y;
  x1 = x;
  setGameIsOver(true);
 }

 let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
 if(userNumber) screen = <GameScreen userNumber={userNumber} gameOver={gameOver} />;
 if(gameIsOver) screen = <GameOver newGame={newGameHandler} y={y1} x={x1} />

  return (
    <LinearGradient colors={[Colors.primary800, Colors.secondary500]} style={styles.rootScreen}>
      <ImageBackground source={require("./assets/background.png")} resizeMode="cover" style={styles.rootScreen} imageStyle={styles.image}>
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  image: {
    opacity: 0.15
  }
});
