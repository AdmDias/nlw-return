import React, { useRef, useState } from "react";

import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import BottomSheet from "@gorhom/bottom-sheet";

import { ChatTeardropDots } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

import { Options } from "../Options";
import { Success } from "../Success";
import { Form } from "../Form";

import { theme } from "../../theme";
import { styles } from "./styles";
import { feedbackTypes } from "../../utils/feedbackTypes";

export type FeedbackType = keyof typeof feedbackTypes;

function Widget() {
    //First step, choose the feedbacktype, bug, idea, other, ...
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false)
    
    
    const bottomSheetRef = useRef<BottomSheet>(null)

    function handleOpen(){
        bottomSheetRef.current?.expand()
    }

    function handleRestartFeedback(){
        setFeedbackType(null)
        setFeedbackSent(false)
    }

    function handleFeedbackSent(){
        setFeedbackSent(true)
    }

    return (
        <>
            <TouchableOpacity style={styles.widget_button} onPress={handleOpen}>

                <ChatTeardropDots size={24} weight="bold" color={theme.colors.text_on_brand_color}/>

            </TouchableOpacity>

            <BottomSheet 
                ref={bottomSheetRef} 
                snapPoints={[1, 280]}
                backgroundStyle={styles.modal}
                handleIndicatorStyle={styles.indicator}
                >
                    {
                        feedbackSent ?
                        <Success onSendAnotherFeedback={handleRestartFeedback} />
                        :
                        <>
                            {
                                feedbackType ?
                                <Form 
                                    feedbackType={feedbackType}
                                    onFeedbackCancelled={handleRestartFeedback}
                                    onFeedbackSent={handleFeedbackSent}
                                />
                                :
                                <Options onFeedbackTypeChanged={setFeedbackType} />
                            }
                        </>
                    }
            </BottomSheet>
        </>
    )
}

export default gestureHandlerRootHOC(Widget);