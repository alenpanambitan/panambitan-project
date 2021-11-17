import React from "react";
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'

export default function Controller({onNext,onPrv}) {
    return(
        <View style={styles.container}>
            <TouchableOpacity>
                <MaterialIcons name='shuffle' size={30}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPrv}>
                <MaterialIcons name='skip-previous' size={50}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <MaterialIcons name='pause' size={65}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={onNext}>
                <MaterialIcons name='skip-next' size={50}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <MaterialIcons name='loop' size={30}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        // width: '100%',
    },
});