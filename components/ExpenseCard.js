import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../constants/colors";
import { useNavigation } from "@react-navigation/native";

export default function ExpenseCard(props) {
    const navigation = useNavigation();

    let date = `${
        props.date.getMonth() + 1
    }/${props.date.getDate()}/${props.date.getFullYear()}`;

    function editExpenseHandler() {
        console.log(props.id);
        navigation.navigate("EditExpense", { expenseId: props.id });
    }

    return (
        <Pressable onPress={editExpenseHandler}>
            <View style={styles.expenseContainer}>
                <View>
                    <Text style={styles.text}>{props.title}</Text>
                    <Text style={styles.text}>{date}</Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text>${props.price.toFixed(2)}</Text>
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    expenseContainer: {
        backgroundColor: Colors.lightBlue,
        borderRadius: 8,
        padding: 8,
        flex: 1,
        marginTop: 8,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    text: {
        color: Colors.brown,
    },
    priceContainer: {
        backgroundColor: Colors.lightGreen,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        width: "20%",
    },
});
