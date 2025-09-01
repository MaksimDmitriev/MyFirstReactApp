/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import './src/i18n';
import { useTranslation } from 'react-i18next';
import { pluralKey } from './src/i18nPlural';

import {
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
  const { t, i18n } = useTranslation();
  const bundle = i18n.getResourceBundle('ru', 'common');
  console.log(Object.keys(bundle)); // ensure items_many exists
  console.log('t(5):', i18n.t('items', { count: 5 }));
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={styles.titleBlock}>{t('welcome', { name: 'Maksim' })}</Text>

      <Text style={styles.titleBlock}>
        {t(pluralKey('items', 0, i18n.language), { count: 0 })}
      </Text>

      <Text style={styles.titleBlock}>
        {t(pluralKey('items', 1, i18n.language), { count: 1 })}
      </Text>

      <Text style={styles.titleBlock}>
        {t(pluralKey('items', 2, i18n.language), { count: 2 })}
      </Text>

      <Text style={styles.titleBlock}>
        {t(pluralKey('items', 3, i18n.language), { count: 3 })}
      </Text>

      <Text style={styles.titleBlock}>
        {t(pluralKey('items', 4, i18n.language), { count: 4 })}
      </Text>

      <Text style={styles.titleBlock}>
        {t(pluralKey('items', 5, i18n.language), { count: 5 })}
      </Text>

      <Text style={styles.titleBlock}>
        {t(pluralKey('items', 6, i18n.language), { count: 6 })}
      </Text>

      <Text style={styles.titleBlock}>
        {t(pluralKey('items', 7, i18n.language), { count: 7 })}
      </Text>

      <Text style={styles.titleBlock}>
        {t(pluralKey('items', 8, i18n.language), { count: 8 })}
      </Text>

      <Text style={styles.titleBlock}>
        {t(pluralKey('items', 9, i18n.language), { count: 9 })}
      </Text>

      <Text style={styles.titleBlock}>
        {t(pluralKey('items', 10, i18n.language), { count: 10 })}
      </Text>

      <Text style={styles.titleBlock}>
        {t(pluralKey('items', 11, i18n.language), { count: 11 })}
      </Text>

      <Text style={styles.titleBlock}>
        {t(pluralKey('items', 21, i18n.language), { count: 21 })}
      </Text>
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

export default App;
