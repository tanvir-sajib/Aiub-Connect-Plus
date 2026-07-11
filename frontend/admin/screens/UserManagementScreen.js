import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import TopBar from '../../shared/components/TopBar';
import Card from '../../shared/components/Card';
import RoleBadge from '../../shared/components/RoleBadge';
import { colors } from '../../shared/theme';
import api from '../../shared/api';

export default function UserManagementScreen({ navigation }) {
  const [users, setUsers] = useState([]);

  const loadUsers = useCallback(async () => {
    try {
      // Backend route: GET /api/admin/users (see backend/admin/routes.js)
      const data = await api.get('/admin/users');
      setUsers(data.users || []);
    } catch {
      setUsers(DEMO_USERS);
    }
  }, []);

  useEffect(() => { loadUsers(); }, [loadUsers]);

  return (
    <SafeAreaView style={styles.safe}>
      <TopBar title="User Management" onBack={() => navigation.goBack()} />
      <FlatList
        data={users}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={{ padding: 14, gap: 10 }}
        renderItem={({ item }) => (
          <Card onTouchEnd={() => navigation.navigate('UserDetail', { userId: item.id })}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={styles.name}>{item.name}</Text>
              <RoleBadge role={item.role} />
            </View>
            <Text style={styles.meta}>{item.email}</Text>
          </Card>
        )}
        ListEmptyComponent={<Text style={{ textAlign: 'center', color: colors.muted, marginTop: 40 }}>No users found.</Text>}
      />
    </SafeAreaView>
  );
}

const DEMO_USERS = [
  { id: 1, name: 'Nusrat Jahan', email: 'nusrat@student.aiub.edu', role: 'student' },
  { id: 2, name: 'Dr. Firoz Mridha', email: 'firoz@aiub.edu', role: 'faculty' },
  { id: 3, name: 'Rafi Ahmed', email: 'rafi@alumni.aiub.edu', role: 'alumni' },
];

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  name: { fontWeight: '700', fontSize: 13, color: colors.navyDark },
  meta: { fontSize: 11, color: colors.muted, marginTop: 6 },
});
