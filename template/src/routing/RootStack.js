import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from './NavigationServices';
import {Comp1} from '../components';

const Stack = createNativeStackNavigator();

export default function RootStack() {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator
                screenOptions={{headerShown: false}}
                initialRouteName="Comp1">
                <Stack.Screen name="Comp1" component={Comp1} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
