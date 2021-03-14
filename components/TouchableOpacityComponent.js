import React from 'react'
import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'

const TouchableOpacityComponent = (props) => {
    let backgroundColor = props.backgroundColor || '#34ace0'
    return (
        <View>
            <TouchableOpacity 
               style = {[styles.cssTouchableOpacity,
                    {backgroundColor}]}
                onPress = {props.OnPress}
                
            >  
            <Text style={styles.cssText}>{props.caption}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create(
    {
         cssTouchableOpacity : {
            borderWidth:1,
            borderRadius:0,
            padding:20,
            width:182       
         },
        cssText : {
            color :'white',
            fontSize: 35,
            textAlign:'center'
        }               
    }
)

export default TouchableOpacityComponent
