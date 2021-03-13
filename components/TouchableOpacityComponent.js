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
            borderRadius:12,
            padding:20,
            marginHorizontal:8,
            marginVertical:4,
                      
         },
        cssText : {
            color :'white',
            fontSize: 20,
        }               
    }
)

export default TouchableOpacityComponent
