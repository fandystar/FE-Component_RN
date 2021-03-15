
//import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React from "react";
import { View, TextInput ,StyleSheet} from 'react-native'


const {log}=console

const TextInputComponent = (props) => {
    //let backgroundColor
    return (
        <View > 
            <TextInput 
                {...props}
                ref={props.name}
                onChangeText={props.onChangeText}
                keyboardType='numeric'
                style = {[styles.textInput]}
               
                
            />
        </View>
    )
}
const styles = StyleSheet.create (
    {
        textInput : {
            fontSize:25,
            color : 'black',
            padding:0,
            height:60,
            borderWidth:1,
            marginVertical:0.5,
            padding:10
        
            
        }
    }
)
export default TextInputComponent