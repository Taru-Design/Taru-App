import * as React from 'react';
import {DarkTheme, DefaultTheme, NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/Home";
import ProfileScreen from "../screens/Profile";
import {ColorSchemeName, View} from "react-native";
import Header from "../components/Header/Header";

const Stack = createNativeStackNavigator();

export default function Navigation ({ colorScheme }: { colorScheme: ColorSchemeName }) {
    return (
        <NavigationContainer
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>

            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerShadowVisible: true,
                        headerTitle: () => <Header />,
                        headerStyle: {
                            backgroundColor: '#1E212D',
                        },
                        statusBarColor : '#1E212D',
                        statusBarStyle : 'light',
                    }}
                />
                <Stack.Screen name="Profile" component={ProfileScreen} />
            </Stack.Navigator>

        </NavigationContainer>
    );
};