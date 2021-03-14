import React, { useState } from "react";
import { View} from "react-native";
import {data} from './constans/general'   // import operation data
import FlatListComponent from './components/FlatListComponent'
import TextInputComponent from './components/TextInputComponent'  
import {prime,fibonacci,sum,multiply} from './utils/helper'   // import operation function

const {log}=console
const HomeScreen = (props) => {
    
    const [id,setId] = useState('')
    const [input1,setinput1] = useState(0)  // set value of first number or result
    const [input2,setinput2] = useState(0)  // set value of second number
  
    return (
        <View  style={{margin:'5%'}}> 
           
            
            <View style={{marginTop:'15%'}}>            
                
                <TextInputComponent
                    placeholder={id!==''? data[id].placeHolder[2] : 'Result'} //  textinput3 ( result ) setting
                    multiline 
                    editable={false}
                    width={'100%'}
                    height={height = (id===2 || id===3) ? 100 : 50}
                    textAlignVertical={'top'}
                    padding={0}
                    backgroundColor={'#F8EFBA'} >
                {(input1 && input2 && id===0) ?  sum(input1,input2) : (input1 && input2 && id===1)? multiply(input1,input2) : (input1 && id===2)? prime(input1) :(input1 && id===3)? fibonacci(input1) :id!=='' && data[id].placeHolder[2] }
                </TextInputComponent>
                
                <TextInputComponent
                    placeholder={id!==''? data[id].placeHolder[0] : 'Input'} // textinput1 ( first number or first N prime or N fibonacci ) setting
                    width={'100%'}
                    height={50}
                    maxLength={(id===2 || id===3) ? 3 : 20}
                    backgroundColor ={'#dff9fb'}  
                    onChangeText={(input)=>{
                        if(/[^0-9]/.test(input) && (id===2 || id===3 )) { // check if not a digit
                          alert('Provide number 0 - 9')
                          input= input.slice(0,input.length-1)
                        } 
                        setinput1(+input)
                      }}
                    
                    />
                
                <TextInputComponent 
                    placeholder={id!==''?  data[id].placeHolder[1] : 'Input'} // textinput2 ( second number ) setting
                    width={(id===2 || id===3) ? 0 : '100%'}                   //  width & height visibility of  textinput2 ( the second number ) = make textinput2 disappear
                    maxLength={20}
                    height={height = (id===2 || id===3) ? 0 : 50 }
                    backgroundColor ={'#dff9fb'}
                    onChangeText={(input)=>{
                        setinput2(+input)
                      }}
                    />
              
            </View>
            
            <View style={{marginTop:'0%'}}>                     
                 <FlatListComponent data={data} callback={(id)=>{    //  render operation button ( sum ,multiply,prime & fibonacci)
                        setinput1(0)
                        setinput2(0)
                        setId(id)
                     }} />
            </View>
            
        </View>
    )
}

export default HomeScreen

