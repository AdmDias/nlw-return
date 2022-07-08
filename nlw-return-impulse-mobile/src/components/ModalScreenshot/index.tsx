import { Modal, ModalProps, View, TouchableOpacity, Image } from "react-native"

import { X } from "phosphor-react-native"
import { styles } from "./styles"
import { theme } from "../../theme"

interface Props extends ModalProps {
    modalVisible: boolean;
    screenshot: string | null;
    onModalVisibilityChanged: (modalVisible: boolean) => void;
}

export function ModalScreenshot({ modalVisible, onModalVisibilityChanged ,screenshot }: Props){
    return (
        <Modal animationType="fade" transparent={true} visible={modalVisible} onRequestClose={() => onModalVisibilityChanged(!modalVisible)}>
            <View style={styles.modalView}>
                <TouchableOpacity style={styles.buttonClose} onPress={() => onModalVisibilityChanged(!modalVisible)}>
                    <X size={24} weight="bold" color={theme.colors.text_on_brand_color} />
                </TouchableOpacity>
                <View style={styles.content}>
                    {
                        screenshot &&
                        <Image
                            style={{ width: '100%', height: '100%', borderRadius: 8 }}
                            source={{ uri: screenshot }}
                        />
                    }
                </View>
            </View>
        </Modal>
    )
}