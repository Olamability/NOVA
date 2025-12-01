import { router } from 'expo-router';
import { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Splash() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/onboarding');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <Image
          source={require('@/assets/images/splash.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#004938', 
  },
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 180,
    height: 180,
  },
});
