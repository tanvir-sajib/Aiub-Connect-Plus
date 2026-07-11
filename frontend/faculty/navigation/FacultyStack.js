import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FacultyLoginScreen from '../screens/FacultyLoginScreen';
import FacultyDashboardScreen from '../screens/FacultyDashboardScreen';
import CreateNoticeScreen from '../screens/CreateNoticeScreen';
import NoticeBoardScreen from '../screens/NoticeBoardScreen';
import NoticeDetailScreen from '../screens/NoticeDetailScreen';
import CreateAcademicPostScreen from '../screens/CreateAcademicPostScreen';
import FacultyProfileScreen from '../screens/FacultyProfileScreen';
import FacultyEditProfileScreen from '../screens/FacultyEditProfileScreen';
import GroupsScreen from '../screens/GroupsScreen';
import GroupDetailScreen from '../screens/GroupDetailScreen';

const Stack = createNativeStackNavigator();

// Member 2 owns this file + everything in frontend/faculty/
export default function FacultyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="FacultyLogin">
      <Stack.Screen name="FacultyLogin" component={FacultyLoginScreen} />
      <Stack.Screen name="FacultyDashboard" component={FacultyDashboardScreen} />
      <Stack.Screen name="CreateNotice" component={CreateNoticeScreen} />
      <Stack.Screen name="NoticeBoard" component={NoticeBoardScreen} />
      <Stack.Screen name="NoticeDetail" component={NoticeDetailScreen} />
      <Stack.Screen name="CreateAcademicPost" component={CreateAcademicPostScreen} />
      <Stack.Screen name="FacultyProfile" component={FacultyProfileScreen} />
      <Stack.Screen name="FacultyEditProfile" component={FacultyEditProfileScreen} />
      <Stack.Screen name="Groups" component={GroupsScreen} />
      <Stack.Screen name="GroupDetail" component={GroupDetailScreen} />
    </Stack.Navigator>
  );
}
