import React, { useState }  from "react"
import { View, TextInput, Image, Text, TouchableOpacity } from "react-native";
import { captureScreen } from "react-native-view-shot";
import * as FileSystem from 'expo-file-system'
import { ArrowLeft, Eye } from "phosphor-react-native"

import { FeedbackType } from '../../components/Widget'

import { Button } from '../../components/Button'
import { ScreenshotButton } from '../../components/ScreenshotButton'
import { ModalScreenshot } from "../ModalScreenshot";

import { styles } from './styles'
import { theme } from '../../theme'
import { feedbackTypes } from '../../utils/feedbackTypes'
import { api } from '../../libs/api'


interface Props {
    feedbackType: FeedbackType;
    onFeedbackCancelled: () => void;
    onFeedbackSent: () => void;
}

const placeholder = 'Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que esta acontecendo...'

export function Form({ feedbackType, onFeedbackCancelled, onFeedbackSent }: Props) {
    const [isSendingFeedback, setIsSendingFeedback] = useState(false)
    
    const [capturedScreenshot, setCapturedScreenshot] = useState<string | null>(null)
    const [userComment, setUserComment] = useState("")

    const [modalVisible, setModalVisible] = useState(false);
    
    const feedbackTypeInfo = feedbackTypes[feedbackType];

    async function handleCapturedScreenshot(){
        await captureScreen({
            format: 'jpg'
        })
        .then(uri => setCapturedScreenshot(uri))
        .catch(error => console.log(error))
    }

    function handleCapturedScreenshotRemove() {
        setCapturedScreenshot(null)
    }

    async function handleSendFeedback(){
        if(isSendingFeedback){
            return;
        }

        setIsSendingFeedback(true)

        //const screenshotBase64 = capturedScreenshot && await FileSystem.readAsStringAsync(capturedScreenshot, { encoding: 'base64' })
        
        //const screenshot = `data:image/png;base64, ${screenshotBase64}`

        try{
            /*await api.post('/feedbacks', {
                type: feedbackType,
                screenshot: screenshot,
                comment: userComment,
            })*/

            onFeedbackSent()
        }catch(error){
            console.log(error)
            setIsSendingFeedback(false)
        }
    }

    return (
        <View style={styles.container}>

            <ModalScreenshot 
                modalVisible={modalVisible}
                screenshot={capturedScreenshot}
                onModalVisibilityChanged={setModalVisible}
            />

            <View style={styles.header}>
                <TouchableOpacity onPress={onFeedbackCancelled}>
                    <ArrowLeft size={24} weight="bold" color={theme.colors.text_secondary} />
                </TouchableOpacity>

                <View style={styles.titleContainer}>
                    
                    <Image source={feedbackTypeInfo.image} style={styles.image}/>

                    <Text style={styles.titleText}>
                        {feedbackTypeInfo.title}
                    </Text>
                </View>
            </View>
            
            <TextInput
                multiline
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor={theme.colors.text_secondary}
                autoCorrect={false}
                onChangeText={setUserComment}
            />
                
            <View style={styles.footer}>
                <ScreenshotButton 
                    onTakeShot={handleCapturedScreenshot}
                    onRemoveShot={handleCapturedScreenshotRemove}
                    screenshot={capturedScreenshot}
                />
                {
                    capturedScreenshot &&
                    <TouchableOpacity 
                        style={styles.buttonShowModal}
                        onPress={() => setModalVisible(true)}
                    >
                        <Eye size={22} color={theme.colors.text_primary} weight="bold"/>
                    </TouchableOpacity>
                }
                
                <Button 
                    onPress={handleSendFeedback} 
                    isLoadingScreenshot={isSendingFeedback} 
                />
            </View>
        </View>
    ) 
}