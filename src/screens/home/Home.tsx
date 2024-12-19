import { View, Text, Button } from 'react-native'
import React from 'react'
import { _ } from '../../theme'
import { useNavigation } from '@react-navigation/native'

const Home = () => {

 const navigation = useNavigation<any>()

  return (
    <View style={{flex:1}}>
      <Text style={_['h1']}>This is home</Text>
      <Button title="Profile" onPress={()=>navigation.navigate('Profile')}/>
    </View>
  )
}

export default Home