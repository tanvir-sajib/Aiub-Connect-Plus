import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AdminLoginScreen from '../screens/AdminLoginScreen';
import AdminDashboardScreen from '../screens/AdminDashboardScreen';
import UserManagementScreen from '../screens/UserManagementScreen';
import UserDetailScreen from '../screens/UserDetailScreen';
import ReportManagementScreen from '../screens/ReportManagementScreen';
import PostManagementScreen from '../screens/PostManagementScreen';
import AnalyticsDashboardScreen from '../screens/AnalyticsDashboardScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createNativeStackNavigator();

// Member 4 owns this file + everything in frontend/admin/
export default function AdminStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="AdminLogin">
      <Stack.Screen name="AdminLogin" component={AdminLoginScreen} />
      <Stack.Screen name="AdminDashboard" component={AdminDashboardScreen} />
      <Stack.Screen name="UserManagement" component={UserManagementScreen} />
      <Stack.Screen name="UserDetail" component={UserDetailScreen} />
      <Stack.Screen name="ReportManagement" component={ReportManagementScreen} />
      <Stack.Screen name="PostManagement" component={PostManagementScreen} />
      <Stack.Screen name="AnalyticsDashboard" component={AnalyticsDashboardScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
