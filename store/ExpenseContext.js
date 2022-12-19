import { createContext, useState } from "react";

export const ExpenseContext = createContext({
    expenses: [],
    addExpense: (newExpense) => {},
    deleteExpense: (id) => {},
    editExpense: (id) => {},
});

export default function ExpenseContextProvider({ children }) {
    const [expenses, setExpenses] = useState([
        { id: 1, title: "A book", date: new Date("2021-12-19"), price: 14.99 },
        {
            id: 2,
            title: "Another book",
            date: new Date("2022-03-14"),
            price: 9.99,
        },
        { id: 3, title: "Food", date: new Date("2022-11-26"), price: 87.43 },
        {
            id: 4,
            title: "Panda Express",
            date: new Date("2022-11-23"),
            price: 10.99,
        },
        { id: 5, title: "Phone", date: new Date("2022-07-12"), price: 900 },
        { id: 6, title: "shoes", date: new Date("2021-10-10"), price: 78.13 },
    ]);

    function addExpense(newExpense) {
        setExpenses((curentExpenses) => {
            return [...curentExpenses, newExpense];
        });
    }

    function deleteExpense(id) {
        setExpenses((currentExpenses) => {
            const updatedExpenseList = currentExpenses.filter(
                (expense) => expense.id !== id
            );
            return [...updatedExpenseList];
        });
    }

    function editExpense(id, updates) {
        setExpenses((currentExpenses) => {
            // const updateableExpenseIndex = currentExpenses.filter(
            //     (expense) => expense.id === id
            // );

            // const updateableExpense = currentExpenses[updateableExpenseIndex];
            // const updatedItem = { ...updateableExpense, ...updates };
            // const updatedExpenses = [...currentExpenses];
            // updatedExpenses.splice(updateableExpenseIndex, 1, updatedItem);
            // console.log(updatedExpenses);

            const updatedExpense = { ...updates };

            const updatedExpenses = currentExpenses.map((expense) => {
                if (expense.id === id) {
                    return updatedExpense;
                }
                return expense;
            });

            return updatedExpenses;
        });
    }

    const value = {
        expenses: expenses,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        editExpense: editExpense,
    };

    return (
        <ExpenseContext.Provider value={value}>
            {children}
        </ExpenseContext.Provider>
    );
}
