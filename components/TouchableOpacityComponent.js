
import React from 'react'
import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

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
            width:185       
         },
        cssText : {
            color :'white',
            fontSize: 40,
            textAlign:'center'
        }               
    }
)

export default TouchableOpacityComponent
