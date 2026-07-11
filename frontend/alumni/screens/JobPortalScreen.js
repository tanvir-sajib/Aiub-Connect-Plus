import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TopBar from '../../shared/components/TopBar';
import Card from '../../shared/components/Card';
import { colors } from '../../shared/theme';
import api from '../../shared/api';

export default function JobPortalScreen({ navigation }) {
  const [jobs, setJobs] = useState([]);

  const loadJobs = useCallback(async () => {
    try {
      // Backend route: GET /api/alumni/jobs (see backend/alumni/routes.js)
      const data = await api.get('/alumni/jobs');
      setJobs(data.jobs || []);
    } catch {
      setJobs(DEMO_JOBS);
    }
  }, []);

  useEffect(() => { loadJobs(); }, [loadJobs]);

  return (
    <SafeAreaView style={styles.safe}>
      <TopBar title="Job Portal" onBack={() => navigation.goBack()} />
      <FlatList
        data={jobs}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={{ padding: 14, gap: 10 }}
        renderItem={({ item }) => (
          <Card onTouchEnd={() => navigation.navigate('JobDetail', { jobId: item.id })}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
              <Ionicons name="briefcase-outline" size={16} color={colors.alumni} />
              <Text style={styles.jobTitle}>{item.title}</Text>
            </View>
            <Text style={styles.company}>{item.company} · {item.location}</Text>
            <Text style={styles.meta}>Posted {item.postedAgo}</Text>
          </Card>
        )}
        ListEmptyComponent={<Text style={{ textAlign: 'center', color: colors.muted, marginTop: 40 }}>No jobs posted yet.</Text>}
      />
    </SafeAreaView>
  );
}

const DEMO_JOBS = [
  { id: 1, title: 'Junior Frontend Developer', company: 'BrightTech Ltd.', location: 'Dhaka', postedAgo: '2 days ago' },
  { id: 2, title: 'Data Analyst Intern', company: 'InsightWorks', location: 'Remote', postedAgo: '5 days ago' },
];

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  jobTitle: { fontWeight: '700', fontSize: 13, color: colors.navyDark },
  company: { fontSize: 11.5, color: colors.text, marginTop: 6 },
  meta: { fontSize: 10, color: colors.muted, marginTop: 4 },
});
