import React from 'react'
import { Text,Image,View, TextInput ,StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const TextInputComponent = (props) => {
    
   
    return (
        <View > 
            <TextInput 
                {...props}
                style = {[styles.textInput]}
                
            />
        </View>
    )
}
const styles = StyleSheet.create (
    {
        textInput : {
            color : 'black',
            borderBottomWidth :1,
            backgroundColor : '#dff9fb',
        }
    }
)
export default TextInputComponent