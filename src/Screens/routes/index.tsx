import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import SignIn from '../SignIn'
import SignUp from '../SignUp'

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      // headerTintColor: '#fff',
      // headerStyle: {
      //   backgroundColor: '#7159c1'
      // },
      cardStyle: {
        backgroundColor: '#312e38'
      },
      // headerTitleAlign: "center",
      // headerTitle: "GoBarber"
    }}
  >
    <Auth.Screen name="SignIn" component={SignIn}/> 
    <Auth.Screen name="SignUp"  component={SignUp}/> 
  </Auth.Navigator>
)

export default AuthRoutes;