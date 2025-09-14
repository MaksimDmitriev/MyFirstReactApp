/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import './src/i18n';
import { useTranslation } from 'react-i18next';

import {
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
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
  const { t } = useTranslation();
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={styles.titleBlock}>{t('app_summary')}</Text>

      {/* Row 1 */}
      <View style={styles.row}>
        <Text style={styles.label}>{t('permissions_granted')}</Text>
        <Button
          title={t('grant_permissions')}
          onPress={() => console.log('Grant pressed')}
        />
      </View>

      {/* Row 2 */}
      <View style={styles.row}>
        <Text style={styles.label}>{t('location_providers_enabled')}</Text>
        <Button
          title={t('enable_location_providers')}
          onPress={() => console.log('Enable pressed')}
        />
      </View>

      {/* Row 3 */}
      <View style={styles.row}>
        <Text style={styles.label}>{t('not_connected_to_internet')}</Text>
        <Button
          title={t('internet_connection_issue_how_to_fix')}
          onPress={() => console.log('Fix pressed')}
        />
      </View>

      {/* Fetch location button */}
      <View style={styles.fetchButton}>
        <Button
          title={t('fetch_location')}
          onPress={() => console.log('Fetching location')}
        />
      </View>

      {/* Address */}
      <Text style={styles.address} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 16 },
  titleBlock: {
    marginTop: 16,
    marginBottom: 32,
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    flex: 1,
    fontSize: 16,
    marginRight: 10,
  },
  fetchButton: {
    marginTop: 20,
  },
  address: {
    marginTop: 20,
    fontSize: 14,
    color: '#333',
  },
});

export default App;
