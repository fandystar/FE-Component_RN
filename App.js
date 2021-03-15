import React, { useState } from "react";
import { View,ScrollView} from "react-native";
import {data} from './constans/general'                          // import data ( title & placeholder description )
import FlatListComponent from './components/FlatListComponent'
import TextInputComponent from './components/TextInputComponent'  
import {prime,fibonacci,sum,multiply} from './utils/helper'      // import operation function
//import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

const {log}=console
const HomeScreen = (props) => {
    
    const [id,setId] = useState(null)
    const [input,setInput] = useState(0)  // set value of first number & secondNumber or result
   
  
    return (
        <View  style={{margin:'5%'}}> 
           <View style={{marginTop:'15%'}}>            
              
               <TextInputComponent
                    placeholder={id!==null? data[id].placeHolder[1] : 'Output'} //  textinput3 ( result ) setting
                    editable={false}
                    backgroundColor={'#F8EFBA'} >
                 { (id===0 && input) ? sum(input) : (id===1 && input) ? multiply(input) : (id===2 && input) ? prime(input) :(id===3 && input) ?  fibonacci(input) : id!==null ? data[id].placeHolder[1]:'Output'}
               </TextInputComponent>
                
                <TextInputComponent
                    name={value=> text = value}
                    placeholder={id!==null? data[id].placeHolder[0] : 'Input'} // 
                    maxLength={(id===2 || id===3) ? 2 : 20}                 // maximal 20 character except 2 digis for Prime & Fibonacci
                    backgroundColor ={'#dff9fb'}  
                    onChangeText={(value)=>{
                        if(/[^0-9]/.test(value) && (id===2 || id===3 )) {   // check if not a psitive digit 
                          alert('Provide number 0 - 9')
                          value= value.slice(0,value.length-1)
                        } 
                        setInput(value)
                      }}
                />

            </View>
            
            <View style={{marginTop:'0%'}}>                     
                <FlatListComponent data={data} callback={(id)=>{    //  render operation button ( sum ,multiply,prime & fibonacci)
                        text.clear()                                // clear input/ n prime or fbonacci
                        setInput(0)
                        setId(id)
                     }} 
                />
            </View>
            
        </View>
    )
}

export default HomeScreen

