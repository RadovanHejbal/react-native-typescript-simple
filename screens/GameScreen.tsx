import { Text, View, StyleSheet, Alert } from "react-native";
import { useState, useEffect } from "react";
import Title from "../components/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";

function generateRandomBetween(min: number, max: number, exclude: number): number {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
}

let min = 1;
let max = 100;

interface prop {
    userNumber: number,
    gameOver: () => void
}

const GameScreen: React.FC<prop> = ({userNumber, gameOver}) => {
    const initialGuess = generateRandomBetween(min, max, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(() => {
        if(userNumber === currentGuess) {
            min = 1;
            max = 100;
            gameOver();
        }
    }, [currentGuess]);

    function nextGuessHandler(direction: string) {
        if ((direction === "lower" && currentGuess < userNumber) || (direction === "higher" && currentGuess > userNumber)) {
            Alert.alert("Dont lie bro", "This is wrong", [{text: "sorry!", style: "cancel"}]);
            return;
        }

        switch(direction) {
            case "lower":
                max = currentGuess;
                break;
            case "higher":
                min = currentGuess;
                break;
        }

        console.log(min, max);
        const newNumber = generateRandomBetween(min, max, currentGuess);
        setCurrentGuess(newNumber);
    }

    return <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View>
            <Text>Higher or Lower</Text>
            <View>
                <PrimaryButton pressedButton={nextGuessHandler.bind(this, "higher")}>+</PrimaryButton>
                <PrimaryButton pressedButton={nextGuessHandler.bind(this, "lower")}>-</PrimaryButton>
            </View>
        </View>
        <View><Text>Log</Text></View>
    </View>
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12
    }
})