import { StyleSheet } from "react-native";

export const PostStyle = StyleSheet.create ({
    container : {

    },
    head : {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: 'red',
        padding: 7
    },
    imgView : {

    },
    img : {
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    content : {
        height: 350,
        backgroundColor: 'blue'
    },
    reaction : {
        backgroundColor: 'yellow',
        padding: 5
    },
    comment : {
        backgroundColor: 'gray',
        maxHeight: 80,
        padding: 5
    }
})