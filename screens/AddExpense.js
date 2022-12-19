import { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { ExpenseContext } from "../store/ExpenseContext";

import { View, Text, TextInput, Button, StyleSheet } from "react-native";
export default function AddExpense() {
    const navigation = useNavigation();

    const expenseCtx = useContext(ExpenseContext);

    const [titleInput, setTitleInput] = useState("");
    const [dateInput, setDateInput] = useState("");
    const [priceInput, setPriceInput] = useState("");

    function titleInputHandler(input) {
        setTitleInput(input);
    }

    function dateInputHandler(input) {
        setDateInput(input);
    }

    function priceInputHandler(input) {
        setPriceInput(input);
    }

    function addExpenseHandler() {
        expenseCtx.addExpense({
            id: Math.random() * 100000,
            title: titleInput,
            date: new Date(dateInput),
            price: +priceInput,
        });

        navigation.goBack();
    }

    return (
        <View style={styles.rootContainer}>
            <View style={styles.formContainer}>
                <View>
                    <Text>Expense</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={titleInputHandler}
                        placeholder="Name of Expense"
                    />
                </View>
                <View>
                    <Text>Date</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={dateInputHandler}
                        placeholder="YYYY-MM-DD"
                        keyboardType="number-pad"
                    />
                </View>
                <View>
                    <Text>Price</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={priceInputHandler}
                        keyboardType="number-pad"
                    />
                </View>
                <Button
                    style={styles.button}
                    title="Submit"
                    onPress={addExpenseHandler}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 36,
        alignItems: "center",
    },
    formContainer: {
        width: "80%",
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        marginTop: 12,
    },
});
