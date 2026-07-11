import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TopBar from '../../shared/components/TopBar';
import Card from '../../shared/components/Card';
import RoleBadge from '../../shared/components/RoleBadge';
import Button from '../../shared/components/Button';
import { colors } from '../../shared/theme';

export default function FacultyDashboardScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>
      <TopBar title="Faculty Dashboard" />
      <ScrollView contentContainerStyle={{ padding: 14, gap: 12 }}>
        <RoleBadge role="faculty" />

        <View style={styles.statsRow}>
          <StatCard icon="document-text-outline" value="8" label="Notices Posted" />
          <StatCard icon="people-outline" value="3" label="Groups Managed" />
        </View>

        <Card>
          <Text style={styles.cardTitle}>Quick Actions</Text>
          <Button title="Post a Notice" onPress={() => navigation.navigate('CreateNotice')} style={{ marginTop: 10 }} />
          <View style={{ height: 8 }} />
          <Button title="View Notice Board" variant="ghost" onPress={() => navigation.navigate('NoticeBoard')} />
        </Card>

        <Card>
          <Text style={styles.cardTitle}>Your Groups</Text>
          <Text onPress={() => navigation.navigate('Groups')} style={styles.link}>Manage Groups →</Text>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

function StatCard({ icon, value, label }) {
  return (
    <Card style={{ flex: 1, alignItems: 'center' }}>
      <Ionicons name={icon} size={18} color={colors.gold} />
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  statsRow: { flexDirection: 'row', gap: 10 },
  statValue: { fontWeight: '800', fontSize: 16, color: colors.navyDark, marginTop: 4 },
  statLabel: { fontSize: 10, color: colors.muted, marginTop: 2 },
  cardTitle: { fontWeight: '700', fontSize: 13, color: colors.navyDark, marginBottom: 4 },
  link: { fontSize: 12, color: colors.navy, fontWeight: '700', marginTop: 6 },
});
