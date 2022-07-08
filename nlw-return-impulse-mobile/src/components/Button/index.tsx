import { isLoading } from "expo-font";
import React from "react"
import { Text, TouchableOpacity, TouchableOpacityProps, ActivityIndicator } from "react-native"
import { theme } from "../../theme";

import { styles } from './styles'

interface Props extends TouchableOpacityProps {
    isLoadingScreenshot: boolean;
}

export function Button({ isLoadingScreenshot, ...rest_props }: Props) {
    return (
        <TouchableOpacity style={styles.container} {...rest_props} >
            {
                isLoadingScreenshot ? <ActivityIndicator color={theme.colors.text_on_brand_color}/> : <Text style={styles.title}>Send feedback</Text> 
            }
        </TouchableOpacity>
    )
}