import FontAwesome from "@expo/vector-icons/FontAwesome";

import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { ErrorBoundary, ErrorBoundaryProps, Slot, Stack } from "expo-router";
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

import { signIn, signOut } from "aws-amplify/auth";
import WelcomeScreen from "./WelcomeScreen/WelcomeScreen";
import { Try } from "expo-router/build/views/Try";

import { FontAwesome5 } from "@expo/vector-icons"; // Düzeltildi

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
    ...FontAwesome5.font,
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

  return (
    <Try catch={ErrorBoundary}>
      <RootLayoutNav />;
    </Try>
  );
}

export default function RootLayoutNav(props: ErrorBoundaryProps) {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ApolloProvider client={client}>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <Stack>
            <ErrorBoundary
              retry={() => {}}
              error={new Error("Bir hata oluştu.")}
            >
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
              <Slot name="content">
                {/* Slot ile WelcomeScreen bileşenini çağırdık */}
                <Stack.Screen
                  initialParams={WelcomeScreen}
                  name="WelcomeScreen/WelcomeScreen"
                  options={{ headerShown: false }}
                />
              </Slot>
            </ErrorBoundary>
          </Stack>
        </ThemeProvider>
      </ApolloProvider>
    </GestureHandlerRootView>
  );
}
