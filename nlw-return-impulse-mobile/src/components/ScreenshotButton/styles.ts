import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        width: 40,
        height: 40,
        borderRadius: 4,
        marginRight: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.surface_secondary,
        position: 'relative'
    },
    image: {
        width: 40,
        height: 40,
    },
    removeIcon:{
        position: 'absolute',
        bottom: 0,
        right: 0
    }
})