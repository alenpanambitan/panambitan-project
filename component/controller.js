import React, {Component, useEffect, useState} from "react";
import {View, Text, TouchableOpacity, StyleSheet, AppRegistry} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'
import { onChange } from "react-native-reanimated";

export default function Controller({onNext,onPrv,setplayText}) {


    const play = <MaterialIcons name='play-arrow' size={65}/>
    const pause = <MaterialIcons name='pause'size={65}/>
    const [icon,setIcon]=useState(play)
    const [change,setChange]=useState(true)
    

    
    const handleClick = (icon) => {
        if(change === true){
            setplayText("Now playing...")
            setChange(false)
            setIcon(pause)
        }else{
            setplayText()
            setChange(true)
            setIcon(play)
        }
        
    }
    
    return(
        <View style={styles.container}>
            <TouchableOpacity>
                <MaterialIcons name='shuffle' size={30}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPrv}>
                <MaterialIcons name='skip-previous' size={50}/>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => handleClick(icon)} >
                    {icon}
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


