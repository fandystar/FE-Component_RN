import React, { useState } from "react";
import { TextInput,View, StyleSheet } from "react-native";
import {data} from '../constans/general'
import FlatListComponent from '../components/FlatListComponent'
import TextInputComponent from '../components/TextInputComponent'
import {prime,fibonacci,sum,multiply} from '../utils/helper'

const {log}=console
const HomeScreen = (props) => {
    
    const [id,setId] = useState('')
    const [value1,setValue1] = useState(0)
    const [value2,setValue2] = useState(0)
   
    let width = (id===2 || id===3) ? 0 : '100%'
    let height = (id===2 || id===3) ? 0 : 50
   
    return (
        <View  style={{margin:'5%'}}> 
            <View style={{marginTop:'10%'}}>
                 <FlatListComponent data={data} callback={(id)=>{
                        setValue1(0)
                        setValue2(0)
                        setId(id)
                     }} />
            </View>
            
            <View style={{marginTop:'7%'}}>
                <TextInputComponent
                    placeholder={id!==''? data[id].placeHolder[0] : 'input'}
                    width={'100%'}
                    height={50}
                    backgroundColor ={'#dff9fb'}  
                    onChangeText={(input)=>{
                        if(/[^0-9]/.test(input) && (id===2 || id===3 )) {
                          alert('masukan angka  0 - 9')
                          input= input.slice(0,input.length-1)
                        } 
                        setValue1(+input)
                      }}
                    
                    />
                <TextInputComponent 
                    placeholder={id!==''?  data[id].placeHolder[1] : 'input'}
                    width={width}
                    height={height}
                    backgroundColor ={'#dff9fb'}
                    onChangeText={(input)=>{
                        setValue2(+input)
                      }}
                    />
                <TextInputComponent
                    placeholder={id!==''? data[id].placeHolder[2] : 'input'}
                    multiline 
                    editable={false}
                    width={'100%'}
                    textAlignVertical={"top"}
                    padding={10}
                    
                    height={ value1===0? 50 : (value1/10*25)+20} 
                    backgroundColor={'#F8EFBA'} >
                        {(value1 && value2 && id===0) ?  sum(value1,value2) : (value1 && value2 && id===1)? multiply(value1,value2) : (value1 && id===2)? prime(value1) :(value1 && id===3)? fibonacci(value1) : 'Result' }
                        </TextInputComponent>
            </View>
            
            
        </View>
    )
}

export default HomeScreen

