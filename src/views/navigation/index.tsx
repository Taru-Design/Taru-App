import * as React from 'react';
import {DarkTheme, DefaultTheme, NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../screens/Home";
import ProfileScreen from "../screens/Profile";
import {ColorSchemeName} from "react-native";

const Stack = createNativeStackNavigator();

export default function Navigation ({ colorScheme }: { colorScheme: ColorSchemeName }) {
    return (
        <NavigationContainer
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>

            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'Home' }}
                />
                <Stack.Screen name="Profile" component={ProfileScreen} />
            </Stack.Navigator>

        </NavigationContainer>
    );
};