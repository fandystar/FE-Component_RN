import React, { useState } from "react";
import { FlatList, View, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import { greaterOrEq } from "react-native-reanimated";
import TouchableOpacityComponent from './TouchableOpacityComponent'

const {log} =console


const FlatListComponent = (props) => {
  const [selectedId, setSelectedId] = useState(null)

  
  return (
      <FlatList
        data={props.data}
        keyExtractor={item => item.id}
        renderItem= { ({item}) =>
                <TouchableOpacityComponent
                    backgroundColor = {item.id === selectedId ? "black" : "#34ace0"}
                    caption={item.title}
                    OnPress={() => {
                        setSelectedId(item.id)
                        alert(item.id)
                        //props.navigation.navigate('Home',{id :item.id})
                                             
                      }
                    }

                    
                />
        }
       />
 
  )
}

export default FlatListComponent;
//module.exports={FlatListComponent}