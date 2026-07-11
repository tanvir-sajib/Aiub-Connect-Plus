import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, RefreshControl } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TopBar from '../../shared/components/TopBar';
import Card from '../../shared/components/Card';
import RoleBadge from '../../shared/components/RoleBadge';
import { colors } from '../../shared/theme';
import api from '../../shared/api';

export default function HomeFeedScreen({ navigation }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const loadPosts = useCallback(async () => {
    try {
      // Backend route: GET /api/student/feed (see backend/student/routes.js)
      const data = await api.get('/student/feed');
      setPosts(data.posts || []);
    } catch (err) {
      // Fallback demo data so the screen still renders if backend isn't running yet
      setPosts(DEMO_POSTS);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => { loadPosts(); }, [loadPosts]);

  return (
    <SafeAreaView style={styles.safe}>
      <TopBar
        title="Home Feed"
        right={<Ionicons name="search" size={20} color={colors.navyDark} onPress={() => navigation.navigate('Search')} />}
      />
      <FlatList
        data={posts}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={{ padding: 14, gap: 10 }}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => { setRefreshing(true); loadPosts(); }} />}
        renderItem={({ item }) => (
          <Card onTouchEnd={() => navigation.navigate('PostDetail', { postId: item.id })}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <RoleBadge role="student" />
              <Text style={styles.time}>{item.time}</Text>
            </View>
            <Text style={styles.author}>{item.author}</Text>
            <Text style={styles.content}>{item.content}</Text>
            <View style={styles.footerRow}>
              <Text style={styles.footerItem}><Ionicons name="heart-outline" size={13} /> {item.likes}</Text>
              <Text style={styles.footerItem}><Ionicons name="chatbubble-outline" size={13} /> {item.comments}</Text>
            </View>
          </Card>
        )}
        ListEmptyComponent={!loading && (
          <Text style={{ textAlign: 'center', color: colors.muted, marginTop: 40 }}>No posts yet.</Text>
        )}
      />
    </SafeAreaView>
  );
}

const DEMO_POSTS = [
  { id: 1, author: 'Nusrat Jahan', time: '2h ago', content: 'Anyone up for a CSE study group before the midterm?', likes: 12, comments: 4 },
  { id: 2, author: 'Rafi Ahmed', time: '5h ago', content: 'Just published my capstone poster — feedback welcome!', likes: 20, comments: 7 },
];

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  time: { fontSize: 10, color: colors.muted, marginLeft: 'auto' },
  author: { fontWeight: '700', fontSize: 13, color: colors.navyDark },
  content: { fontSize: 12.5, color: colors.text, marginTop: 4, lineHeight: 18 },
  footerRow: { flexDirection: 'row', gap: 16, marginTop: 10 },
  footerItem: { fontSize: 11, color: colors.muted },
});
