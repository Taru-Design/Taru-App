import { StyleSheet } from "react-native";

export const PostStyle = StyleSheet.create ({
    container : {
        marginVertical: 15
    },
    head : {
        flexDirection: "row",
        height: 40,
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10
    },
    icons : {
        flexDirection: "row",
        width: '35%',
        justifyContent: "space-between"
    },
    count : {

    },
    profile : {
        flexDirection: "row",
        alignItems: "center",
        position: "relative",
        top: 20,
        zIndex: 1
    },
    username : {
        fontWeight: "bold",
    },
    userImg : {
        height: 60,
        width: 60,
        backgroundColor: '#FF9A62',
        marginLeft: 10,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        borderColor: 'white',
        borderWidth: 1
    },
    content : {
        backgroundColor: 'rgba(246,58,58,0.4)'
    },
    description : {
        padding: 5
    },
    descriptionText : {

    },
    comment : {
        flexDirection: "row",
        paddingHorizontal: 5,
        alignItems: "center"
    },
    commentInput : {
        flex: 1,
        height: 50,
        paddingLeft: 5,
        marginLeft: 5
    }
})