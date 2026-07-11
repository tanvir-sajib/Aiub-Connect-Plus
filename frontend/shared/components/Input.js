import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { colors, radius } from '../theme';

export default function Input({ label, style, ...props }) {
  return (
    <View style={{ marginBottom: 14 }}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <TextInput
        placeholderTextColor={colors.gray500}
        style={[styles.input, style]}
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: { fontSize: 12, fontWeight: '700', color: colors.navyDark, marginBottom: 6 },
  input: {
    borderWidth: 1,
    borderColor: colors.gray300,
    borderRadius: radius.sm,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    color: colors.text,
    backgroundColor: '#fff',
  },
});
