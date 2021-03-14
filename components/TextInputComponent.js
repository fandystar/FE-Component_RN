
//import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React from "react";
import { View, TextInput ,StyleSheet} from 'react-native'


const {log}=console

const TextInputComponent = (props) => {
    //let backgroundColor
    let width=props.width 
    let height=props.height 
    let backgroundColor=props.backgroundColor
 
    return (
        <View > 
            <TextInput 
                {...props}
                ref={props.name}
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
            fontSize:30,
            color : 'black',
            padding:0,
            //borderWidth:1
            
        }
    }
)
export default TextInputComponent