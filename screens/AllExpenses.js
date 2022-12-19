import { View, Text, StyleSheet, FlatList } from "react-native";
import { EXPENSES } from "../data/expense-data";
import Colors from "../constants/colors";
import ExpenseCard from "../components/ExpenseCard";
import { useContext } from "react";
import { ExpenseContext } from "../store/ExpenseContext";
import ExpenseSummary from "../components/ExpenseSummary";

export default function AllExpenses() {
    const expenseCtx = useContext(ExpenseContext);
    const expenses = expenseCtx.expenses;

    let total = 0;

    expenses.forEach((expense) => (total = total + expense.price));

    return (
        <View style={styles.rootContainer}>
            <ExpenseSummary text="Total" total={total.toFixed(2)} />
            <FlatList
                style={styles.list}
                data={expenses}
                keyExtractor={(expense) => expense.id}
                renderItem={({ item }) => {
                    return (
                        <ExpenseCard
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            date={item.date}
                        />
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor: Colors.blue,
        flex: 1,
        paddingTop: 30,
    },
    list: {
        marginHorizontal: 16,
    },
});
