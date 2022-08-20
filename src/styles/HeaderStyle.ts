import { StyleSheet } from "react-native";
import { useHeaderHeight } from '@react-navigation/elements';


export const HeaderStyle = StyleSheet.create({
    main : {
        width: '97%',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
    },
    containerLogo : {
        height: 54,
        padding: 0,
        fontSize: 50,
        letterSpacing: 3,
        bottom: 5,
        left: 6,
        position: "relative",
        textShadowColor: 'red',
        textShadowOffset: {width: 0, height: 4},
        textShadowRadius: 6
    },
    logoStart : {
        fontFamily: 'IngridDarling',
        alignItems: "center"
    },
    logoEnd : {
        fontFamily: 'IslandMoments'
    },
    logo : {
        color: 'white'
    },
    right : {
        position: "relative",
        bottom: 6,
        flexDirection: 'row',
        alignSelf: "flex-end",
        alignItems: "center",
    },
    message : {},
    profile : {
        width: 45,
        height: 45,
        backgroundColor: '#FAF3E0',
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 15,
        borderRadius: 22.5
    },
    profileIcon : {},

})