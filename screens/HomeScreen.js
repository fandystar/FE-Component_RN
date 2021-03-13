import React, { useState } from "react";
import { View,FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import {operation} from '../constans/general'
import FlatListComponent from '../components/FlatListComponent'
import TextInputComponent from '../components/TextInputComponent'

const {log}=console
const HomeScreen = (props) => {
  log('props ',props.route)
   
    return (
        <View>
            
            <FlatListComponent data={operation} />
            
            <TextInputComponent />
            <TextInputComponent />
            <TextInputComponent />
            
        </View>
    )
}

export default HomeScreen

