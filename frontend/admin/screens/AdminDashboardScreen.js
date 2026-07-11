import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TopBar from '../../shared/components/TopBar';
import Card from '../../shared/components/Card';
import RoleBadge from '../../shared/components/RoleBadge';
import { colors } from '../../shared/theme';

export default function AdminDashboardScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safe}>
      <TopBar title="Admin Dashboard" />
      <ScrollView contentContainerStyle={{ padding: 14, gap: 12 }}>
        <RoleBadge role="admin" />

        <View style={styles.statsGrid}>
          <StatCard icon="people-outline" value="2,340" label="Total Users" />
          <StatCard icon="flag-outline" value="14" label="Pending Reports" />
          <StatCard icon="document-text-outline" value="812" label="Total Posts" />
          <StatCard icon="trending-up-outline" value="+18%" label="Engagement" />
        </View>

        <MenuRow icon="people-outline" label="User Management" onPress={() => navigation.navigate('UserManagement')} />
        <MenuRow icon="flag-outline" label="Reports" onPress={() => navigation.navigate('ReportManagement')} />
        <MenuRow icon="document-text-outline" label="Post Management" onPress={() => navigation.navigate('PostManagement')} />
        <MenuRow icon="stats-chart-outline" label="Analytics" onPress={() => navigation.navigate('AnalyticsDashboard')} />
        <MenuRow icon="settings-outline" label="Settings" onPress={() => navigation.navigate('Settings')} />
      </ScrollView>
    </SafeAreaView>
  );
}

function StatCard({ icon, value, label }) {
  return (
    <Card style={styles.statCard}>
      <Ionicons name={icon} size={17} color={colors.gold} />
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </Card>
  );
}

function MenuRow({ icon, label, onPress }) {
  return (
    <Card onTouchEnd={onPress} style={styles.menuRow}>
      <Ionicons name={icon} size={18} color={colors.navy} />
      <Text style={styles.menuLabel}>{label}</Text>
      <Ionicons name="chevron-forward" size={16} color={colors.gray500} style={{ marginLeft: 'auto' }} />
    </Card>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  statCard: { width: '47%', alignItems: 'center' },
  statValue: { fontWeight: '800', fontSize: 15, color: colors.navyDark, marginTop: 4 },
  statLabel: { fontSize: 10, color: colors.muted, marginTop: 2, textAlign: 'center' },
  menuRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  menuLabel: { fontSize: 13, fontWeight: '600', color: colors.text },
});
