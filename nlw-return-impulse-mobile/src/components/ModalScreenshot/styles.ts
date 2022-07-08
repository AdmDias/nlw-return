import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modalView: {
        position: 'relative',
        width: '100%',
        height: '100%',
        padding: 20,
        backgroundColor: 'rgba(255,255,255,0.4)',
        alignItems: "center",
        shadowColor: "#FFF",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    buttonClose: {
        position: 'absolute',
        top: 20,
        right: 20,
    },
    content: {
        marginTop: 30,
        flex: 1,
        width: '100%',
        height: '95%',
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: 'transparent',
        resizeMode: 'contain'
    },
})