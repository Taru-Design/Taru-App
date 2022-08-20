import React, {useState} from 'react';
import {View, Text, Image, Pressable} from "react-native";
import { FontAwesome5, AntDesign } from '@expo/vector-icons';
import { HeaderStyle } from "../../../styles/HeaderStyle";
import {useHeaderHeight} from "@react-navigation/elements";


const  Header = () => {
    const [hasProfile, setHasProfile] = useState(false);

    return (
        <View style={[HeaderStyle.main]}>
            <Text style={HeaderStyle.containerLogo}>
                <Text style={[HeaderStyle.logoStart, HeaderStyle.logo]}>T</Text>
                <Text style={[HeaderStyle.logoEnd, HeaderStyle.logo]}>aru</Text>
            </Text>
            <View style={HeaderStyle.right}>
                <Pressable>
                    <FontAwesome5 name="comment-dots"
                                  size={24}
                                  color="#FAF3E0"
                                  style={HeaderStyle.message} />
                </Pressable>
                <Pressable>
                    <View style={HeaderStyle.profile} >
                        { hasProfile ?
                            <Image
                                source={{ uri : 'https://reactnative.dev/img/tiny_logo.png'}}
                            /> :
                            <AntDesign
                                name="user"
                                size={24}
                                color="#1E212D"
                                style={HeaderStyle.profileIcon}
                            />
                        }
                    </View>
                </Pressable>
            </View>
        </View>
    );
};

export default Header;