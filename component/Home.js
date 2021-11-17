import React, { useEffect, useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, SafeAreaView, StyleSheet, Text, View, Image, Animated, ImageBackground } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import songs from './data';
import Controller from './controller';
// import Animated from 'react-native-reanimated';

const {width, height} = Dimensions.get('window');

export default function Player() {

    const scrollX = useRef(new Animated.Value(0)).current;
    const [index, setIndex] = useState(0);
    const slider = useRef(null)


    




    useEffect (() => {
        scrollX.addListener(({value}) =>{
            const index = Math.round(value/width)
            setIndex(index);
        })
    });


    const Next = ()=>{
        slider.current.scrollToOffset({
            offset: (index + 1) * width,
        })
    }

    const Prev = ()=>{
        slider.current.scrollToOffset({
            offset: (index - 1) * width,
        })
    }

   

    const renderItem = ({item}) =>{
        return (
            <View style={styles.imgContainer}>
                <Image style={styles.img} source={item.image}/>
                {/* <Text style={styles.title}>{item.title}</Text> */}
            </View>
        )
    }

    return (
        <ImageBackground style={{width:'100%', height: '100%'}} source={require('../assets/bg.jpg')}>
            <View style={styles.container}>
            
                <SafeAreaView style={{height: 320}}>
                    <FlatList
                        data = {songs}
                        ref={slider}
                        renderItem = {renderItem}
                        keyExtractor = {(item) => item.id}
                        horizontal
                        showsHorizontalScrollIndicator = {false}
                        pagingEnabled
                        scrollEventThrottle = {16}
                        onScroll = {Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}],
                            {useNativeDriver: false},
                            )}
                    />
                    
                    
                    
                    {/* <Image style={styles.img} source={require('../assets/coco.jpg')} />
                    <View style={styles.pbtn} >
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.text}>prev</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.text}>play</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.text}>next</Text>
                        </TouchableOpacity>
                    </View> */}
                    
                </SafeAreaView>
                <View>
                    <Text style={styles.title}>{songs[index].title}</Text>
                    <Text style={styles.artist}>{songs[index].artist}</Text>
                </View>
                <Controller onNext={Next} onPrv={Prev}/>
            </View>
        </ImageBackground>
        
        
        
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 150,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        
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
    },
    title: {
        color: '#000',
        // bottom: 50,
        textAlign: 'center',
        fontSize: 26,
        textTransform:"capitalize",
    },
    artist: {
        color: '#000',
        // bottom: 50,
        textAlign: 'center',
        fontSize: 20,
        textTransform:"capitalize",
    }
    // btnimg: {
    //     height: 35,
    //     width: 35
    // }
})