import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../../student/screens/SplashScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import StudentStack from '../../student/navigation/StudentStack';
import FacultyStack from '../../faculty/navigation/FacultyStack';
import AlumniStack from '../../alumni/navigation/AlumniStack';
import AdminStack from '../../admin/navigation/AdminStack';

const Stack = createNativeStackNavigator();

// This is the ONLY file that should need edits from more than one member
// (e.g. adding a new top-level module). Everything else lives inside each
// member's own folder.
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="StudentStack" component={StudentStack} />
        <Stack.Screen name="FacultyStack" component={FacultyStack} />
        <Stack.Screen name="AlumniStack" component={AlumniStack} />
        <Stack.Screen name="AdminStack" component={AdminStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
