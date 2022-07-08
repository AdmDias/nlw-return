import React from "react";
import { 
    View, 
    TouchableOpacity,
    TouchableOpacityProps,
    Image,
    ImageProps,
    Text 
} from 'react-native'

import { styles } from "./styles";

interface Props extends TouchableOpacityProps {
    title: string;
    image: ImageProps;
}

export function Option({ title, image, ...props }: Props) {
    return (
        <TouchableOpacity style={styles.container}{...props}>
            <Image
                style={styles.image}
                source={image} 
            />

            <Text style={styles.title}>
                {title}
            </Text>

        </TouchableOpacity>
    )
}