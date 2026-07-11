import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Alert } from 'react-native';
import Input from '../../shared/components/Input';
import Button from '../../shared/components/Button';
import { colors } from '../../shared/theme';
import api from '../../shared/api';

export default function AlumniLoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Missing info', 'Please enter your email and password.');
      return;
    }
    setLoading(true);
    try {
      // Backend route: POST /api/alumni/login (see backend/alumni/routes.js)
      await api.post('/alumni/login', { email, password });
      navigation.replace('AlumniDashboard');
    } catch (err) {
      Alert.alert('Login failed', err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.body}>
        <Text style={styles.title}>Alumni Login</Text>
        <Text style={styles.sub}>Sign in with your registered email</Text>

        <View style={{ height: 24 }} />
        <Input label="Email" placeholder="you@example.com" value={email} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address" />
        <Input label="Password" placeholder="••••••••" value={password} onChangeText={setPassword} secureTextEntry />

        <View style={{ height: 10 }} />
        <Button title="Log In" onPress={handleLogin} loading={loading} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  body: { flex: 1, justifyContent: 'center', paddingHorizontal: 26 },
  title: { fontSize: 22, fontWeight: '800', color: colors.navyDark },
  sub: { fontSize: 13, color: colors.muted, marginTop: 6 },
});
