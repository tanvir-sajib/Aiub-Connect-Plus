import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../shared/theme';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => navigation.replace('Welcome'), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.wrap}>
      <View style={styles.iconWrap}>
        <Ionicons name="school" size={32} color={colors.gold} />
      </View>
      <Text style={styles.title}>
        AIUB Connect<Text style={{ color: colors.gold }}>+</Text>
      </Text>
      <Text style={styles.sub}>Campus network for AIUB</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { flex: 1, backgroundColor: colors.navyDark, alignItems: 'center', justifyContent: 'center' },
  iconWrap: {
    width: 64, height: 64, borderRadius: 18, backgroundColor: colors.navy,
    alignItems: 'center', justifyContent: 'center', marginBottom: 16,
  },
  title: { color: '#fff', fontSize: 24, fontWeight: '800' },
  sub: { color: '#C9D4E8', fontSize: 13, marginTop: 8 },
});
