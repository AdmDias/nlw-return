import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        alignItems: 'center'
    },
    buttonShowModal: {
        width: 40,
        height: 40,
        borderRadius: 4,
        marginRight: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.surface_secondary,
        position: 'relative'
    },

    header: {
        flexDirection: 'row',
        marginVertical: 16,
    },
    titleContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 24
    },
    titleText: {
        fontSize: 20,
        color: theme.colors.text_primary,
        //fontFamily: theme.fonts.medium
    },
    image: {
        width: 24,
        height: 24,
        marginRight: 8
    },
    input: {
        height: 112,
        padding: 12,
        marginBottom: 8,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: theme.colors.stroke,
        color: theme.colors.text_primary,
        //fontFamily: theme.fonts.regular
    },
    footer: {
        flexDirection: 'row',
        marginBottom: 16
    }
})