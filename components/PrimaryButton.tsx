import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

interface data {
  children: string | React.ReactElement,
  pressedButton: () => void
}

const PrimaryButton: React.FC<data> = ({children, pressedButton}) => {
  return (
    <View style={styles.outerButtonContainer}>
      <Pressable style={({pressed}) => pressed ? [styles.innerButtonContainer, styles.pressed] : styles.innerButtonContainer} onPress={pressedButton} android_ripple={{ color: "#640233" }} >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  innerButtonContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    shadowColor: "black",
    shadowRadius: 6,
  },
  outerButtonContainer: {
    margin: 4,
    borderRadius: 28,
    overflow: "hidden"
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75
  }
});
