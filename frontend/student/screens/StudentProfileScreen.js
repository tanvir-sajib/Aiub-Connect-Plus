import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TopBar from '../../shared/components/TopBar';
import Card from '../../shared/components/Card';
import RoleBadge from '../../shared/components/RoleBadge';
import Button from '../../shared/components/Button';
import { colors } from '../../shared/theme';

export default function StudentProfileScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>
      <TopBar title="My Profile" onBack={() => navigation.goBack()} />
      <View style={styles.body}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={30} color={colors.gold} />
        </View>
        <Text style={styles.name}>Nusrat Jahan</Text>
        <RoleBadge role="student" />
        <Text style={styles.meta}>Dept. of CSE · ID: 21-12345-1</Text>

        <Card style={{ width: '100%', marginTop: 20 }}>
          <Row icon="mail-outline" label="Email" value="nusrat@student.aiub.edu" />
          <Row icon="school-outline" label="Program" value="B.Sc. in CSE" />
          <Row icon="calendar-outline" label="Joined" value="Spring 2023" />
        </Card>

        <View style={{ height: 16 }} />
        <Button title="Edit Profile" onPress={() => navigation.navigate('EditProfile')} style={{ width: '100%' }} />
      </View>
    </SafeAreaView>
  );
}

function Row({ icon, label, value }) {
  return (
    <View style={styles.row}>
      <Ionicons name={icon} size={16} color={colors.muted} style={{ width: 24 }} />
      <Text style={styles.rowLabel}>{label}</Text>
      <Text style={styles.rowValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  body: { alignItems: 'center', padding: 20 },
  avatar: {
    width: 72, height: 72, borderRadius: 20, backgroundColor: colors.navy,
    alignItems: 'center', justifyContent: 'center', marginTop: 10, marginBottom: 10,
  },
  name: { fontSize: 17, fontWeight: '800', color: colors.navyDark, marginBottom: 6 },
  meta: { fontSize: 11.5, color: colors.muted, marginTop: 6 },
  row: { flexDirection: 'row', alignItems: 'center', paddingVertical: 8 },
  rowLabel: { fontSize: 12, color: colors.muted, flex: 1 },
  rowValue: { fontSize: 12.5, color: colors.text, fontWeight: '600' },
});
