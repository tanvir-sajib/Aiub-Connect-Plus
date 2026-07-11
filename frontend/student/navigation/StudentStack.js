import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StudentLoginScreen from '../screens/StudentLoginScreen';
import StudentRegisterScreen from '../screens/StudentRegisterScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import HomeFeedScreen from '../screens/HomeFeedScreen';
import CreatePostScreen from '../screens/CreatePostScreen';
import PostDetailScreen from '../screens/PostDetailScreen';
import CommentsScreen from '../screens/CommentsScreen';
import SearchScreen from '../screens/SearchScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import StudentProfileScreen from '../screens/StudentProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';

const Stack = createNativeStackNavigator();

// Member 1 owns this file + everything in frontend/student/
export default function StudentStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="StudentLogin">
      <Stack.Screen name="StudentLogin" component={StudentLoginScreen} />
      <Stack.Screen name="StudentRegister" component={StudentRegisterScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="HomeFeed" component={HomeFeedScreen} />
      <Stack.Screen name="CreatePost" component={CreatePostScreen} />
      <Stack.Screen name="PostDetail" component={PostDetailScreen} />
      <Stack.Screen name="Comments" component={CommentsScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="StudentProfile" component={StudentProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
    </Stack.Navigator>
  );
}
