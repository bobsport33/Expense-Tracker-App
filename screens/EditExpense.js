import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useContext, useState } from "react";
import { ExpenseContext } from "../store/ExpenseContext";
import Colors from "../constants/colors";

export default function EditExpense({ route, navigation }) {
    const expenseCtx = useContext(ExpenseContext);
    const expenses = expenseCtx.expenses;

    const singleExpense = expenses.filter(
        (expense) => expense.id === route.params.expenseId
    );

    const [titleInput, setTitleInput] = useState(singleExpense[0].title);
    const [dateInput, setDateInput] = useState(
        singleExpense[0].date.toISOString().slice(0, 10)
    );
    const [priceInput, setPriceInput] = useState(`${singleExpense[0].price}`);

    function titleInputHandler(input) {
        setTitleInput(input);
    }

    function dateInputHandler(input) {
        setDateInput(input);
    }

    function priceInputHandler(input) {
        setPriceInput(input);
    }

    function submitHandler() {
        expenseCtx.editExpense(singleExpense[0].id, {
            id: singleExpense[0].id,
            title: titleInput,
            date: new Date(dateInput),
            price: +priceInput,
        });

        navigation.goBack();
    }

    function goBackHandler() {
        navigation.goBack();
    }

    function deleteItemHandler() {
        expenseCtx.deleteExpense(singleExpense[0].id);

        navigation.goBack();
    }

    return (
        <View style={styles.rootContainer}>
            <View style={styles.formContainer}>
                <Text style={styles.title}>Edit Expense</Text>
                <View>
                    <Text>Expense</Text>
                    <TextInput
                        defaultValue={titleInput}
                        style={styles.input}
                        onChangeText={titleInputHandler}
                    />
                </View>
                <View>
                    <Text>Date</Text>
                    <TextInput
                        defaultValue={dateInput}
                        style={styles.input}
                        onChangeText={dateInputHandler}
                    />
                </View>
                <View>
                    <Text>Price</Text>
                    <TextInput
                        defaultValue={priceInput}
                        style={styles.input}
                        onChangeText={priceInputHandler}
                    />
                </View>
                <Button
                    style={styles.button}
                    onPress={submitHandler}
                    title="Submit"
                />
            </View>
            <View style={styles.lineBreak}></View>
            <View style={styles.buttonContainer}>
                <Text style={styles.title}>Go Back</Text>
                <Button
                    style={styles.button}
                    title="Go Back"
                    onPress={goBackHandler}
                />
            </View>
            <View style={styles.lineBreak}></View>
            <View style={styles.buttonContainer}>
                <Text style={styles.title}>Delete</Text>
                <Button
                    style={styles.button}
                    title="Delete"
                    onPress={deleteItemHandler}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        paddingTop: 36,
        alignItems: "center",
        backgroundColor: Colors.lightBlue,
    },
    formContainer: {
        width: "80%",
    },
    title: {
        fontSize: 24,
        textAlign: "center",
        marginBottom: 12,
        color: Colors.brown,
    },
    input: {
        height: 40,
        marginVertical: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "#fff",
        borderColor: Colors.darkGreen,
    },
    lineBreak: {
        height: 2,
        width: "80%",
        marginTop: 24,
        backgroundColor: Colors.brown,
    },
    buttonContainer: {
        marginTop: 24,
    },
    button: {
        marginTop: 12,
    },
});
