import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { colors, radius } from '../theme';

/**
 * Shared Button used across Student, Faculty, Alumni, Admin modules.
 * variant: 'primary' | 'ghost' | 'danger'
 */
export default function Button({ title, onPress, variant = 'primary', loading = false, disabled = false, style }) {
  const variantStyle = styles[variant] || styles.primary;
  const textStyle = variant === 'ghost' ? styles.textGhost : styles.textSolid;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
      style={[styles.base, variantStyle, (disabled || loading) && styles.disabled, style]}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'ghost' ? colors.navy : '#fff'} />
      ) : (
        <Text style={textStyle}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: radius.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: { backgroundColor: colors.navy },
  ghost: { backgroundColor: 'transparent', borderWidth: 1, borderColor: colors.gray300 },
  danger: { backgroundColor: colors.danger },
  disabled: { opacity: 0.5 },
  textSolid: { color: '#fff', fontWeight: '700', fontSize: 14 },
  textGhost: { color: colors.navy, fontWeight: '700', fontSize: 14 },
});
