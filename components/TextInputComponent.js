
import React, { useState } from "react";
import { View, TextInput ,StyleSheet} from 'react-native'
import { baseProps } from "react-native-gesture-handler/lib/typescript/handlers/gestureHandlers";


const {log}=console

const TextInputComponent = (props) => {
    //let backgroundColor
    let width=props.width 
    let height=props.height 
    let backgroundColor=props.backgroundColor
    //let color=props.color  
    //let  backgroundColor = props.backgroundColor!=='' ? props.backgroundColor : '#dff9fb' 
    return (
        <View > 
            <TextInput 
                {...props}
                onChangeText={props.onChangeText}
                keyboardType='numeric'
                style = {[styles.textInput,{height,width,backgroundColor}]}
                
            />
        </View>
    )
}
const styles = StyleSheet.create (
    {
        textInput : {
           
            fontSize:16,
            color : 'black',
            padding:0,
            
        }
    }
)
export default TextInputComponent