import { StyleSheet } from "react-native";
import React from "react";
import { Text, View } from "@/src/components/Themed";
import { SignUpInput, signUp } from "aws-amplify/auth";
import { confirmSignUp, type ConfirmSignUpInput } from "aws-amplify/auth";
import { Link } from "expo-router";
import { Authenticator } from "@aws-amplify/ui-react-native";

type SignUpParameters = {
  username: string;
  password: string;
  email: string;
  phone_number: string;
};

async function handleSignUp({
  username,
  password,
  email,
  phone_number,
}: SignUpParameters) {
  try {
    const { isSignUpComplete, userId, nextStep } = await signUp({
      username,
      password,
      options: {
        userAttributes: {
          email,
          phone_number, // E.164 number convention
        },
        // optional
        autoSignIn: true, // or SignInOptions e.g { authFlowType: "USER_SRP_AUTH" }
      },
    });
    console.log(userId);
    if (isSignUpComplete) {
      // Kayıt başarılı oldu, kullanıcıyı istenilen sayfaya yönlendir
      // Örneğin, tabs/main sayfasına yönlendir
      <Link href={"/main"} />; // 'Tabs' yerine kendi sayfa isminizi kullanın
    }

    console.log(userId);
  } catch (error) {
    console.log("error signing up:", error);
  }
}

async function handleSignUpConfirmation({
  username,
  confirmationCode,
}: ConfirmSignUpInput) {
  try {
    const { isSignUpComplete, nextStep } = await confirmSignUp({
      username,
      confirmationCode,
    });
  } catch (error) {
    console.error("An error occurred during sign up:", error);
  }
}

const SignUp = () => {
  return (
    <Authenticator.Provider>
      <Authenticator
        services={{
          handleSignUp: ({ username, password, options }: SignUpInput) =>
            signUp({
              username: username.toLowerCase(),
              password,
              options: {
                ...options,
                userAttributes: {
                  ...options?.userAttributes,
                  email: options?.userAttributes?.email?.toLowerCase(),
                },
              },
            }),
        }}
      ></Authenticator>
    </Authenticator.Provider>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
