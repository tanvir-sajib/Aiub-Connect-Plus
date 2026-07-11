import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AlumniLoginScreen from '../screens/AlumniLoginScreen';
import AlumniDashboardScreen from '../screens/AlumniDashboardScreen';
import JobPortalScreen from '../screens/JobPortalScreen';
import JobDetailScreen from '../screens/JobDetailScreen';
import InternshipOpportunitiesScreen from '../screens/InternshipOpportunitiesScreen';
import ScholarshipOpportunitiesScreen from '../screens/ScholarshipOpportunitiesScreen';
import CareerPostsScreen from '../screens/CareerPostsScreen';
import AlumniProfileScreen from '../screens/AlumniProfileScreen';
import AlumniSearchScreen from '../screens/AlumniSearchScreen';
import AlumniNotificationsScreen from '../screens/AlumniNotificationsScreen';

const Stack = createNativeStackNavigator();

// Member 3 owns this file + everything in frontend/alumni/
export default function AlumniStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="AlumniLogin">
      <Stack.Screen name="AlumniLogin" component={AlumniLoginScreen} />
      <Stack.Screen name="AlumniDashboard" component={AlumniDashboardScreen} />
      <Stack.Screen name="JobPortal" component={JobPortalScreen} />
      <Stack.Screen name="JobDetail" component={JobDetailScreen} />
      <Stack.Screen name="InternshipOpportunities" component={InternshipOpportunitiesScreen} />
      <Stack.Screen name="ScholarshipOpportunities" component={ScholarshipOpportunitiesScreen} />
      <Stack.Screen name="CareerPosts" component={CareerPostsScreen} />
      <Stack.Screen name="AlumniProfile" component={AlumniProfileScreen} />
      <Stack.Screen name="AlumniSearch" component={AlumniSearchScreen} />
      <Stack.Screen name="AlumniNotifications" component={AlumniNotificationsScreen} />
    </Stack.Navigator>
  );
}
