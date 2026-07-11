import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme';

const ROLE_COLORS = {
  student: colors.student,
  faculty: colors.faculty,
  alumni: colors.alumni,
  admin: colors.admin,
};

const ROLE_LABELS = {
  student: 'Student',
  faculty: 'Faculty',
  alumni: 'Alumni',
  admin: 'Admin',
};

export default function RoleBadge({ role = 'student' }) {
  const color = ROLE_COLORS[role] || colors.student;
  return (
    <View style={[styles.badge, { backgroundColor: color + '22' }]}>
      <View style={[styles.dot, { backgroundColor: color }]} />
      <Text style={[styles.label, { color }]}>{ROLE_LABELS[role] || role}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 20,
    gap: 5,
  },
  dot: { width: 6, height: 6, borderRadius: 3 },
  label: { fontSize: 10, fontWeight: '800', textTransform: 'uppercase', letterSpacing: 0.3 },
});
