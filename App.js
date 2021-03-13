import React,{useEffect} from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import FlatListComponent from './components/FlatListComponent'


const  FrontScreen = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Testing Components !</Text>
    
    {/* <Button
      title='testing'
      onPress={() => props.navigation.navigate('test')}
    /> */}
    
   
     <Button
      title='home screen '
      onPress={() => props.navigation.navigate('Home')}
    />
      <Button
      title='flatlist comp '
      onPress={() => props.navigation.navigate('FlatList')}
    />
  
  </View>
  )
}
const Stack = createStackNavigator();

const  App = () => {
  return (
    
 
        <NavigationContainer>
            <Stack.Navigator initialRouteName='front'
            //screenOptions={{
              //   headerShown: false
              // }}
               >
                <Stack.Screen name='Front' component={FrontScreen} />
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='FlatList' component={FlatListComponent} />
                
                {/* <Stack.Screen name='Home' 
                      component={HomeScreen}
                      options={{headerShown: false}}
                 /> */}
               
      
           </Stack.Navigator>
        </NavigationContainer>

   
      )
}

export default App;