import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors, radius, shadow } from '../theme';

export default function Card({ children, style }) {
  return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: radius.md,
    padding: 14,
    borderWidth: 1,
    borderColor: colors.gray300,
    ...shadow.card,
  },
});
