import FontAwesome from "@expo/vector-icons/FontAwesome";

import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useColorScheme } from "../components/useColorScheme";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  withAuthenticator,
  useAuthenticator,
  Authenticator,
} from "@aws-amplify/ui-react-native";

import { Amplify } from "aws-amplify";
import awsconfig from "../aws-exports";
import WelcomeScreen from "./WelcomeScreen/WelcomeScreen";
import SignUpScreen from "./Auth/SignUpScreen";
import SignInScreen from "./Auth/SignInScreen";
import { signIn, signOut } from "aws-amplify/auth";

Amplify.configure(awsconfig);

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "WelcomeScreen/WelcomeScreen",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return;
  <Authenticator.Provider>
    <Authenticator>
      <RootLayoutNav />
    </Authenticator>
  </Authenticator.Provider>;
}

export default function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ApolloProvider client={client}>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <Stack>
            // Display only if user is authenticated
            <Stack.Screen
              name="(tabs)"
              options={{ headerShown: false, headerBackVisible: false }}
            />
            <Stack.Screen
              name="modal"
              options={{ presentation: "modal", title: "Bilgilendirme" }}
            />
            <Stack.Screen
              name="StockExchange/ExchangeScreen"
              options={{
                presentation: "modal",
                title: "Alım/Satım",
                headerShown: false,
              }}
            />
            <Stack.Screen
              initialParams={WelcomeScreen}
              name="WelcomeScreen/WelcomeScreen"
              options={{ title: "Hoşgeldin", headerShown: false }}
            />
            <Stack.Screen
              initialParams={SignInScreen}
              name="Auth/SignInScreen"
              options={{ title: "Giriş Yap", headerShown: false }}
            />
            <Stack.Screen
              initialParams={SignUpScreen}
              name="Auth/SignUpScreen"
              options={{ title: "Kayıt Ol", headerShown: false }}
            />
          </Stack>
        </ThemeProvider>
      </ApolloProvider>
    </GestureHandlerRootView>
  );
}
