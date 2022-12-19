import "react-native-gesture-handler";
import { StyleSheet, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import AddExpense from "./screens/AddExpense";
import AllExpenses from "./screens/AllExpenses";
import RecentExpenses from "./screens/RecentExpenses";
import ExpenseContextProvider from "./store/ExpenseContext";

import Colors from "./constants/colors";
import { Ionicons } from "@expo/vector-icons";
import EditExpense from "./screens/EditExpense";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Home() {
    const navigation = useNavigation();

    function addExpensePressHandler() {
        navigation.navigate("AddExpense");
    }

    return (
        <Tab.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.darkGreen,
                },
                headerRight: () => (
                    <Button
                        onPress={addExpensePressHandler}
                        title="add"
                        color={Colors.darkGreen}
                    />
                ),
                headerTintColor: Colors.brown,
                tabBarActiveTintColor: Colors.darkGreen,
            }}
        >
            <Tab.Screen
                name="Recent Expenses"
                component={RecentExpenses}
                options={{
                    tabBarLabel: "Recent",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="cash-outline"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="All Expenses"
                component={AllExpenses}
                options={{
                    tabBarLabel: "All Expenses",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="list" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <ExpenseContextProvider>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: { backgroundColor: Colors.darkGreen },
                        headerTintColor: Colors.brown,
                    }}
                >
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen name="AddExpense" component={AddExpense} />
                    <Stack.Screen name="EditExpense" component={EditExpense} />
                </Stack.Navigator>
            </NavigationContainer>
        </ExpenseContextProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
