import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Button from '../components/Button';
import { colors } from '../theme';

// Lets a tester jump straight into any of the 4 role modules without a
// real login flow. In the final app this can be replaced by a single
// shared login screen that redirects based on the account's role.
export default function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.body}>
        <Ionicons name="school" size={36} color={colors.gold} />
        <Text style={styles.title}>AIUB Connect<Text style={{ color: colors.gold }}>+</Text></Text>
        <Text style={styles.sub}>Choose a module to continue</Text>

        <View style={{ height: 24 }} />
        <Button title="Continue as Student" onPress={() => navigation.navigate('StudentStack')} />
        <View style={{ height: 10 }} />
        <Button title="Continue as Faculty" onPress={() => navigation.navigate('FacultyStack')} variant="ghost" />
        <View style={{ height: 10 }} />
        <Button title="Continue as Alumni" onPress={() => navigation.navigate('AlumniStack')} variant="ghost" />
        <View style={{ height: 10 }} />
        <Button title="Continue as Admin" onPress={() => navigation.navigate('AdminStack')} variant="ghost" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  body: { flex: 1, justifyContent: 'center', paddingHorizontal: 30 },
  title: { fontSize: 26, fontWeight: '800', color: colors.navyDark, marginTop: 14 },
  sub: { fontSize: 13, color: colors.muted, marginTop: 6, marginBottom: 4 },
});
