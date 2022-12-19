import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

export default function ExpenseSummary({ text, total }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
            <Text style={styles.text}>${total}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        marginHorizontal: 16,
        borderRadius: 8,
        padding: 8,
        marginBottom: 16,
    },
    text: {
        color: Colors.darkGreen,
    },
});
