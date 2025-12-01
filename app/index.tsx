// app/index.tsx
import { useRouter } from 'expo-router';
import { useEffect } from 'react';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    // Navigate to the splash screen first
    router.replace('/splash');
  }, []);

  return null; // Nothing to render here
}
