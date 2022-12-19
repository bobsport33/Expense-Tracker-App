import { View, Text, StyleSheet, FlatList } from "react-native";
import Colors from "../constants/colors";
import { useContext } from "react";
import { ExpenseContext } from "../store/ExpenseContext";
import ExpenseCard from "../components/ExpenseCard";
import ExpenseSummary from "../components/ExpenseSummary";

export default function RecentExpenses() {
    const expenseCtx = useContext(ExpenseContext);
    const expenses = expenseCtx.expenses;

    const oneWeek = 7 * 24 * 60 * 60 * 1000;

    const oneWeekAgo = Date.now() - oneWeek;
    const recentExpenses = expenses.filter(
        (expense) => expense.date > oneWeekAgo
    );

    let total = 0;
    recentExpenses.forEach((expense) => (total = total + expense.price));

    return (
        <View style={styles.rootContainer}>
            <ExpenseSummary text="Last 7 Days" total={total.toFixed(2)} />
            <FlatList
                style={styles.list}
                data={recentExpenses}
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
    text: {
        color: "#fff",
        fontSize: 24,
        textAlign: "center",
    },
    list: {
        marginHorizontal: 16,
    },
});
