import { StyleSheet, Text } from "react-native"
import Colors from "../constants/colors";

interface prop {
    children: string
}

const Title: React.FC<prop> = ({children}) => {
    return <Text style={styles.title}>{children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title: {
        color: Colors.secondary500,
        fontSize: 24,
        padding: 12,
        borderWidth: 2,
        borderColor: Colors.secondary500,
        textAlign: "center"
    }
})