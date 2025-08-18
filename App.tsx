/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.iconCircle} />
          <Text style={styles.headerTitle}>Title</Text>
        </View>
        <View style={styles.headerRight}>
          <View style={[styles.iconCircle, { width: 28, height: 28 }]} />
        </View>
      </View>

      {/* Content */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero / Picture */}
        <View style={styles.heroWrap}>
          {/* Replace with your asset or remote image */}
          <Image
            style={styles.hero}
            source={{ uri: 'https://picsum.photos/800/400' }}
          />
        </View>

        {/* Title + Subtitle */}
        <View style={styles.titleBlock}>
          <Text style={styles.title}>Screen Title</Text>
          <Text style={styles.subtitle}>Subtitle or short description</Text>
        </View>

        {/* Chips / Quick filters (optional) */}
        <View style={styles.chipsRow}>
          {['Hello', 'World', 'Fast', 'Refresh'].map(c => (
            <Pressable key={c} style={styles.chip}>
              <Text style={styles.chipText}>{c}</Text>
            </Pressable>
          ))}
        </View>

        {/* Section Header */}
        <Text style={styles.sectionHeader}>Menu</Text>

        {/* Menu List */}
        <View style={styles.card}>
          {MENU_ITEMS.map((item, idx) => (
            <View
              key={item.id}
              style={[
                styles.row,
                idx < MENU_ITEMS.length - 1 && styles.rowDivider,
              ]}
            >
              <View style={styles.rowLeft}>
                <View style={styles.rowIcon} />
                <View style={styles.rowTextBlock}>
                  <Text style={styles.rowTitle}>{item.title}</Text>
                  {item.subtitle ? (
                    <Text style={styles.rowSubtitle}>{item.subtitle}</Text>
                  ) : null}
                </View>
              </View>
              <Text style={styles.chevron}>›</Text>
            </View>
          ))}
        </View>

        {/* Another section (optional) */}
        <Text style={styles.sectionHeader}>More</Text>
        <View style={styles.card}>
          {MORE_ITEMS.map((item, idx) => (
            <View
              key={item.id}
              style={[
                styles.row,
                idx < MORE_ITEMS.length - 1 && styles.rowDivider,
              ]}
            >
              <View style={styles.rowLeft}>
                <View
                  style={[styles.rowIcon, { backgroundColor: '#6B7280' }]}
                />
                <Text style={styles.rowTitle}>{item.title}</Text>
              </View>
              <Text style={styles.chevron}>›</Text>
            </View>
          ))}
        </View>

        <View style={{ height: 96 }} />
      </ScrollView>

      {/* Sticky Bottom Actions (optional) */}
      <View style={styles.bottomBar}>
        <Pressable style={[styles.bottomBtn, styles.btnSecondary]}>
          <Text style={styles.btnSecondaryText}>Secondary</Text>
        </Pressable>
        <Pressable style={[styles.bottomBtn, styles.btnPrimary]}>
          <Text style={styles.btnPrimaryText}>Primary</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 16 },
  header: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  headerTitle: { color: 'white', fontSize: 18, fontWeight: '600' },
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  iconCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#3B82F6',
  },

  scrollContent: { paddingHorizontal: 16, paddingBottom: 24 },

  heroWrap: {
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#111214',
  },
  hero: { width: '100%', height: 180, resizeMode: 'cover' },

  titleBlock: { marginTop: 16 },
  title: { color: 'white', fontSize: 24, fontWeight: '700' },
  subtitle: { color: '#9CA3AF', marginTop: 6, fontSize: 14 },

  chipsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 14,
  },
  chip: {
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#1F2937',
  },
  chipText: { color: 'white', fontSize: 13 },

  sectionHeader: {
    color: '#E5E7EB',
    marginTop: 22,
    marginBottom: 10,
    fontWeight: '600',
    fontSize: 16,
  },

  card: {
    backgroundColor: '#121316',
    borderRadius: 14,
    overflow: 'hidden',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#23242A',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 14,
    justifyContent: 'space-between',
  },
  rowDivider: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#23242A',
  },
  rowLeft: { flexDirection: 'row', alignItems: 'center', gap: 12, flex: 1 },
  rowIcon: {
    width: 28,
    height: 28,
    borderRadius: 6,
    backgroundColor: '#10B981',
  },
  rowTextBlock: { flex: 1 },
  rowTitle: { color: 'white', fontSize: 16, fontWeight: '500' },
  rowSubtitle: { color: '#9CA3AF', marginTop: 2, fontSize: 12 },

  chevron: { color: '#6B7280', fontSize: 24, marginLeft: 8 },

  bottomBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 16,
    backgroundColor: 'rgba(11,11,12,0.9)',
    flexDirection: 'row',
    gap: 12,
  },
  bottomBtn: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnSecondary: {
    backgroundColor: '#1F2937',
    borderWidth: 1,
    borderColor: '#2A2F36',
  },
  btnSecondaryText: { color: '#E5E7EB', fontWeight: '600' },
  btnPrimary: { backgroundColor: '#3B82F6' },
  btnPrimaryText: { color: 'white', fontWeight: '700' },
});

const MENU_ITEMS = [
  { id: '1', title: 'Hello World', subtitle: 'Learn the basics' },
  { id: '2', title: 'Fast Refresh', subtitle: 'Instant UI updates' },
  { id: '3', title: 'DevTools', subtitle: 'Debugging & profiling' },
];

const MORE_ITEMS = [
  { id: 'a', title: 'Settings' },
  { id: 'b', title: 'About' },
];

export default App;
