import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme';

export default function TopBar({ title, onBack, right }) {
  return (
    <View style={styles.wrap}>
      {onBack ? (
        <TouchableOpacity onPress={onBack} hitSlop={10}>
          <Ionicons name="arrow-back" size={22} color={colors.navyDark} />
        </TouchableOpacity>
      ) : (
        <View style={{ width: 22 }} />
      )}
      <Text style={styles.title} numberOfLines={1}>{title}</Text>
      <View style={{ width: 22, alignItems: 'flex-end' }}>{right}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray200,
    backgroundColor: '#fff',
  },
  title: { fontWeight: '700', fontSize: 15, color: colors.navyDark, flex: 1, textAlign: 'center' },
});
