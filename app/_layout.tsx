import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { AuthProvider } from '@/src/context/AuthContext';
import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <AuthProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          {/* Splash screen */}
          <Stack.Screen
            name="splash"
            options={{ headerShown: false }}
          />

          {/* Onboarding screens */}
          <Stack.Screen
            name="onboarding"
            options={{ headerShown: false }}
          />

          {/* Language selection */}
          <Stack.Screen
            name="language"
            options={{ headerShown: false }}
          />

          {/* User type selection */}
          <Stack.Screen
            name="user-type"
            options={{ headerShown: false }}
          />

          {/* Auth screens */}
          <Stack.Screen
            name="(auth)"
            options={{ headerShown: false }}
          />

          {/* Tabs layout (main app) */}
          <Stack.Screen
            name="(tabs)"
            options={{ headerShown: false }} // Hide stack header for tabs
          />
        </Stack>

        <StatusBar style="auto" />
      </ThemeProvider>
    </AuthProvider>
  );
}
