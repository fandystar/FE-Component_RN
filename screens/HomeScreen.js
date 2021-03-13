import React, { useState } from "react";
import { View,FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import {data} from '../constans/general'
import FlatListComponent from '../components/FlatListComponent'
import TextInputComponent from '../components/TextInputComponent'

const {log}=console
const HomeScreen = (props) => {
    
    const [id,setId] = useState('')
   
    let width = (id===2 || id===3) ? 0 : '100%'
    let height = (id===2 || id===3) ? 0 : 40
    
    return (
        <View  style={{margin:'5%'}}> 
            <View style={{marginTop:'10%'}}>
                 <FlatListComponent data={data} callback={(id)=>setId(id)} />
            </View>
            
            <View style={{marginTop:'10%'}}>
                <TextInputComponent 
                    placeholder={id!==''? data[id].placeHolder[0] : 'input'}
                    width={'100%'}
                    height={40}
                    backgroundColor ={'#dff9fb'}  
                    />
                <TextInputComponent 
                    placeholder={id!==''?  data[id].placeHolder[1] : 'input'}
                    width={width}
                    height={height}
                    backgroundColor ={'#dff9fb'}
                    />
                <TextInputComponent 
                    placeholder={id!==''? data[id].placeHolder[2] : 'input'}
                    width={'100%'}
                    height={40} 
                    backgroundColor={'#F8EFBA'} />
            </View>
            
            
        </View>
    )
}

export default HomeScreen

