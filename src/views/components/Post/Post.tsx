import React from 'react';
import {View, Image, Text, Pressable} from 'react-native'
import {PostStyle} from "../../../styles/PostStyle";
import { Entypo } from '@expo/vector-icons';

function Post() {

    function onPress() {
        console.warn("Pressed")
    }

    function onPressDots() {
        console.warn("Dooooooooooooottttttsssssssssss")
    }

    return (
        <View style={PostStyle.container}>
            <View style={PostStyle.head}>
                <View style={PostStyle.imgView}>
                    <Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
                           style={PostStyle.img}
                    />
                </View>
                <Pressable onPress={onPressDots}>
                    <Entypo name="dots-three-vertical" size={24} color="black" />
                </Pressable>
            </View>
            <View style={PostStyle.content}>

            </View>
            <View style={PostStyle.reaction}>
                <Text>Say hello</Text>
            </View>
            <View style={PostStyle.comment}>
                <View></View>
                <Pressable onPress={onPress}>
                    <Text>See comments...</Text>
                </Pressable>
            </View>
        </View>
    );
}

export default Post;