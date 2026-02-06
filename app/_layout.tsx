import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

// Prevent the splash screen from auto-hiding before asset loading is complete
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    'GolosText': require('../assets/fonts/GolosText-VariableFont_wght.ttf'),
    'GolosText-Regular': require('../assets/fonts/GolosText-Regular.ttf'),
    'GolosText-Medium': require('../assets/fonts/GolosText-Medium.ttf'),
    'GolosText-SemiBold': require('../assets/fonts/GolosText-SemiBold.ttf'),
    'GolosText-Bold': require('../assets/fonts/GolosText-Bold.ttf'),
    'GolosText-ExtraBold': require('../assets/fonts/GolosText-ExtraBold.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
