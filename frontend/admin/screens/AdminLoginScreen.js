import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Alert } from 'react-native';
import Input from '../../shared/components/Input';
import Button from '../../shared/components/Button';
import { colors } from '../../shared/theme';
import api from '../../shared/api';

export default function AdminLoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert('Missing info', 'Please enter your admin username and password.');
      return;
    }
    setLoading(true);
    try {
      // Backend route: POST /api/admin/login (see backend/admin/routes.js)
      await api.post('/admin/login', { username, password });
      navigation.replace('AdminDashboard');
    } catch (err) {
      Alert.alert('Login failed', err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.body}>
        <Text style={styles.title}>Admin Login</Text>
        <Text style={styles.sub}>Restricted access — administrators only</Text>

        <View style={{ height: 24 }} />
        <Input label="Username" placeholder="admin username" value={username} onChangeText={setUsername} autoCapitalize="none" />
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
