import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import songs from './data';

const {width} = Dimensions.get('window');

export default function Player() {

    const renderItem = ({item}) =>{
        return (
            <View style={styles.imgContainer}>
                <Image style={styles.img} source={item.image}/>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* <FlatList
                data = {songs}
                renderItem = {renderItem}
                keyExtractor = {(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator = {false}
                pagingEnabled
            /> */}
            <Image style={styles.img} source={require('../assets/coco.jpg')} />
            <View style={styles.pbtn} >
                <TouchableOpacity 
                    style={styles.btn}    
                >
                    <Text style={styles.text}>prev</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.text}>play</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.text}>next</Text>
                </TouchableOpacity>
            </View>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        // marginTop: 35,
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '100%'
    },
    imgContainer: {
        width: width,
        alignItems: 'center',
    },
    img: {
        width: 320,
        height: 320,
    },
    pbtn: {
        flexDirection: 'row',
    },
    btn: {
        margin: 3,
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        width: 50,
        height: 50,
    },
    text: {
        color: '#fff'
    }
})