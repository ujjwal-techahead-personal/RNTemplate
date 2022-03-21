import React from 'react';
import {SafeAreaView, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {types} from '../store/actionTypes';
import {nf} from '../constants/constants';

const Comp1 = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={styles.container}>
            <Text style={{fontWeight: 'bold', fontSize: nf(18)}}>
                Welcome To React Native
            </Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Comp1;
