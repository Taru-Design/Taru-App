import React, {useState} from 'react';
import {View, Image, Text, Pressable, TextInput} from 'react-native'
import {PostStyle} from "../../../styles/PostStyle";
import { Feather, FontAwesome, FontAwesome5, Octicons, MaterialIcons} from '@expo/vector-icons';

function Post (props: { link: string; }) {

    const [hasProfile, setHasProfile] = useState(true);
    let [numberOfLine, setNumberOfLine] = useState(2);
    let link = props.link;

    return (
        <View style={PostStyle.container}>
            <View style={PostStyle.head}>
                <View style={PostStyle.icons}>
                    <Feather name="heart" size={26} color="black" />
                    <FontAwesome name="bookmark-o" size={24} color="black" />
                    <Octicons name="paper-airplane" size={26} color="black" />
                </View>
                <View style={PostStyle.profile}>
                    <Text style={[PostStyle.username, {position: "relative", bottom: 10}]}>Username</Text>
                    <View style={PostStyle.userImg}>
                        { hasProfile ?
                            <Image source={{ uri : link }} style={{ height: 60, width: 60}}/> :
                            <FontAwesome5 name="user-circle" size={24} color="black" />
                        }
                    </View>
                </View>
            </View>
            <View style={PostStyle.content}>
                <Image source={{uri: link}}
                       style={{flex: 1, height: 450}} />
            </View>
            <View style={[PostStyle.description]}>
                <View style={PostStyle.descriptionText}>
                    <View style={{justifyContent: "space-between", flexDirection: "row", marginVertical: 2}}>
                        <Text style={PostStyle.username}>Username</Text>
                        <Text style={{fontWeight: "bold"}}>1 500 j'aimes</Text>
                    </View>
                    <View style={{marginVertical: 2}}>
                        <Text style={{ textAlign: "justify"}}
                               numberOfLines={numberOfLine}>
                            Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Atque aut blanditiis dolore
                            doloremque est eveniet fuga, ipsa ipsam iste
                            necessitatibus, nisi non possimus provident
                            quasi quod quos sit temporibus voluptatibus?
                        </Text>
                        <Pressable onPress={ () => {
                            if (numberOfLine)
                                setNumberOfLine(0);
                            else
                                setNumberOfLine(2)
                        }}>
                            <Text style={{ fontWeight: "bold"}}>more</Text>
                        </Pressable>
                    </View>
                </View>
                <Pressable>
                    <Text style={{color: 'gray', fontWeight: '300'}}>Voir les commentaires</Text>
                </Pressable>
                <View>

                </View>
                <View style={PostStyle.comment}>
                    <View style={{height: 30, width: 30, borderRadius: 15, overflow: "hidden"}}>
                        { hasProfile ?
                            <Image source={{ uri : link }} style={{ height: 30, width: 30}}/> :
                            <FontAwesome5 name="user-circle" size={24} color="black" />
                        }
                    </View>
                    <TextInput style={PostStyle.commentInput}
                               placeholder={'Add comments'}/>
                </View>
            </View>
        </View>
    );
}

export default Post;