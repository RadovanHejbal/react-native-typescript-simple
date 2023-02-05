import { Text, View } from "react-native"
import PrimaryButton from "../components/PrimaryButton";

interface prop {
    newGame: () => void
}

const GameOver: React.FC<prop> = ({ newGame }) => {
    return <View>
        <Text>Game is Over!!</Text>
        <PrimaryButton pressedButton={newGame}>New Game!</PrimaryButton>
    </View>
}

export default GameOver;