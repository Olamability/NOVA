import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function UserType() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Join NOVA</Text>
        <Text style={styles.subtitle}>Choose how you want to get started</Text>

        <View style={styles.optionsContainer}>
          <TouchableOpacity
            style={styles.optionCard}
            onPress={() => router.push('/(auth)/register?type=buyer')}
            activeOpacity={0.8}
          >
            <View style={styles.iconContainer}>
              <Text style={styles.icon}>🛍️</Text>
            </View>
            <Text style={styles.optionTitle}>I&apos;m a Buyer</Text>
            <Text style={styles.optionDescription}>
              Browse and shop from thousands of products
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.optionCard}
            onPress={() => router.push('/(auth)/register?type=seller')}
            activeOpacity={0.8}
          >
            <View style={styles.iconContainer}>
              <Text style={styles.icon}>🏪</Text>
            </View>
            <Text style={styles.optionTitle}>I&apos;m a Seller</Text>
            <Text style={styles.optionDescription}>
              Start selling and grow your business
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.loginLink}
          onPress={() => router.push('/(auth)/login')}
        >
          <Text style={styles.loginText}>
            Already have an account? <Text style={styles.loginBold}>Log In</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#184D3A',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#687076',
    textAlign: 'center',
    marginBottom: 48,
  },
  optionsContainer: {
    width: '100%',
    gap: 16,
  },
  optionCard: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#F0F9F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  icon: {
    fontSize: 40,
  },
  optionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#184D3A',
    marginBottom: 8,
  },
  optionDescription: {
    fontSize: 14,
    color: '#687076',
    textAlign: 'center',
    lineHeight: 20,
  },
  loginLink: {
    marginTop: 32,
  },
  loginText: {
    fontSize: 14,
    color: '#687076',
  },
  loginBold: {
    fontWeight: 'bold',
    color: '#184D3A',
  },
});
