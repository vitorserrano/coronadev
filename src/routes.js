import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Global from './pages/Global';
import Countries from './pages/Countries';

const AppStack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="Global" component={Global} />
                <AppStack.Screen name="Countries" component={Countries} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}