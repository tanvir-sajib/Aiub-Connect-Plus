import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Alert } from 'react-native';
import Input from '../../shared/components/Input';
import Button from '../../shared/components/Button';
import { colors } from '../../shared/theme';
import api from '../../shared/api';

export default function StudentLoginScreen({ navigation }) {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!studentId || !password) {
      Alert.alert('Missing info', 'Please enter your Student ID and password.');
      return;
    }
    setLoading(true);
    try {
      // Backend route: POST /api/student/login (see backend/student/routes.js)
      await api.post('/student/login', { studentId, password });
      navigation.replace('HomeFeed');
    } catch (err) {
      Alert.alert('Login failed', err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.body}>
        <Text style={styles.title}>Student Login</Text>
        <Text style={styles.sub}>Sign in with your AIUB Student ID</Text>

        <View style={{ height: 24 }} />
        <Input label="Student ID" placeholder="e.g. 21-12345-1" value={studentId} onChangeText={setStudentId} autoCapitalize="none" />
        <Input label="Password" placeholder="••••••••" value={password} onChangeText={setPassword} secureTextEntry />

        <Text style={styles.link} onPress={() => navigation.navigate('ForgotPassword')}>Forgot password?</Text>

        <View style={{ height: 10 }} />
        <Button title="Log In" onPress={handleLogin} loading={loading} />
        <View style={{ height: 10 }} />
        <Button title="Create an account" variant="ghost" onPress={() => navigation.navigate('StudentRegister')} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  body: { flex: 1, justifyContent: 'center', paddingHorizontal: 26 },
  title: { fontSize: 22, fontWeight: '800', color: colors.navyDark },
  sub: { fontSize: 13, color: colors.muted, marginTop: 6 },
  link: { fontSize: 12, color: colors.navy, fontWeight: '700', textAlign: 'right', marginBottom: 4 },
});
