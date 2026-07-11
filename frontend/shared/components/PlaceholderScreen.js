import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TopBar from './TopBar';
import { colors } from '../theme';

/**
 * Used for screens that are scaffolded but not yet built out by the
 * assigned team member. Replace the contents of each real screen file
 * with your actual UI — this component is just a starting placeholder
 * so the app runs end-to-end from day one.
 */
export default function PlaceholderScreen({ title, navigation, icon = 'construct-outline', note }) {
  return (
    <SafeAreaView style={styles.safe}>
      <TopBar title={title} onBack={navigation?.canGoBack?.() ? () => navigation.goBack() : undefined} />
      <View style={styles.body}>
        <Ionicons name={icon} size={40} color={colors.gold} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.note}>{note || 'This screen is scaffolded and ready — build the UI here.'}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  body: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30, gap: 10 },
  title: { fontWeight: '800', fontSize: 16, color: colors.navyDark, marginTop: 6 },
  note: { fontSize: 12, color: colors.muted, textAlign: 'center', lineHeight: 18 },
});
