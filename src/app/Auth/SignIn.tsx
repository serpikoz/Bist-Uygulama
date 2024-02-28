import { StyleSheet } from "react-native";
import React from "react";

import { Authenticator } from "@aws-amplify/ui-react-native";

import { signUp, SignUpInput } from "aws-amplify/auth";
import { confirmSignUp, type ConfirmSignUpInput } from "aws-amplify/auth";

import { I18n } from "aws-amplify/utils";
import { translations } from "@aws-amplify/ui";
import { Link } from "expo-router";
I18n.putVocabularies(translations);
I18n.setLanguage("tr");

I18n.putVocabularies({
  tr: {
    "Account recovery requires verified contact information":
      "Hesap kurtarma doğrulanmış iletişim bilgisi gerektirir",
    "Add your Profile": "Profilini Ekle",
    "Add your Website": "Web Sitesini Ekle",
    "Back to Sign In": "Girişe Geri Dön",
    "Change Password": "Şifre Değiştir",
    Changing: "Değiştiriliyor",
    Code: "Kod",
    "Confirm Password": "Şifreyi Onayla",
    "Confirm Sign Up": "Kaydı Onayla",
    "Confirm SMS Code": "SMS Kodunu Onayla",
    "Confirm TOTP Code": "TOTP Kodunu Onayla",
    Confirm: "Onayla",
    "Confirmation Code": "Doğrulama Kodu",
    Confirming: "Onaylanıyor",
    "Create a new account": "Yeni bir hesap oluştur",
    "Create Account": "Hesap Oluştur",
    "Creating Account": "Hesap Oluşturuluyor",
    "Dismiss alert": "Uyarıyı Kapat",
    Email: "E-posta",
    "Enter your Birthdate": "Doğum Tarihinizi Girin",
    "Enter your code": "Kodunuzu Girin",
    "Enter your Confirmation Code": "Doğrulama Kodunuzu Girin",
    "Enter your Email": "E-postanızı Girin",
    "Enter your Family Name": "Soyadınızı Girin",
    "Enter your Given Name": "Adınızı Girin",
    "Enter your Middle Name": "İkinci Adınızı Girin",
    "Enter your Name": "Adınızı Girin",
    "Enter your Nickname": "Takma Adınızı Girin",
    "Enter your Password": "Şifrenizi Girin",
    "Enter your phone number": "Telefon numaranızı girin",
    "Enter your Preferred Username": "Tercih ettiğiniz Kullanıcı Adınızı Girin",
    "Enter your Username": "Kullanıcı adınızı girin",
    "Forgot Password?": "Şifrenimi unuttum?",
    "Forgot your password?": "Şifrenizi mi unuttunuz?",
    "Hide password": "Şifreyi Gizle",
    "It may take a minute to arrive": "Gelmesi bir dakika sürebilir",
    Loading: "Yükleniyor",
    "New password": "Yeni şifre",
    "Enter Your Username": "Kullanıcı adınızı girin",
    or: "veya",
    Password: "Şifre",
    "Phone Number": "Telefon Numarası",
    "Please confirm your Password": "Lütfen şifrenizi onaylayın",
    "Resend Code": "Kodu Yeniden Gönder",

    "Reset your Password": "Şifrenizi Sıfırlayın",
    "Send code": "Kodu Gönder",
    "Send Code": "Kodu Gönder",
    Sending: "Gönderiliyor",
    "Setup TOTP": "TOTP Ayarla",
    "Show password": "Şifreyi Göster",
    "Sign in to your account": "Hesabınıza giriş yapın",
    "Sign In with Amazon": "Amazon ile Giriş Yap",
    "Sign In with Apple": "Apple ile Giriş Yap",
    "Sign In with Facebook": "Facebook ile Giriş Yap",
    "Sign In with Google": "Google ile Giriş Yap",
    "Sign in": "Giriş yap",
    "Sign In": "Giriş Yap",
    "Signing in": "Giriş yapılıyor",
    Skip: "Atla",
    Submit: "Gönder",
    Submitting: "Gönderiliyor",
    Username: "Kullanıcı Adı",
    "Verify Contact": "İletişimi Doğrula",
    Verify: "Doğrula",
    "We Emailed You": "Size E-posta Gönderdik",
    "We Sent A Code": "Bir Kod Gönderdik",
    "We Texted You": "Size Bir Mesaj Gönderdik",
    "Your code is on the way. To log in, enter the code we emailed to":
      "Kodunuz yolda. Giriş yapmak için, e-posta ile gönderdiğimiz kodu girin",
    "Your code is on the way. To log in, enter the code we sent you":
      "Kodunuz yolda. Giriş yapmak için, size gönderdiğimiz kodu girin",
    "Your code is on the way. To log in, enter the code we texted to":
      "Kodunuz yolda. Giriş yapmak için, size SMS ile gönderdiğimiz kodu girin",
  },
});

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
    console.log("error confirming sign up", error);
  }
}

const SignIn = () => {
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

export default SignIn;

const styles = StyleSheet.create({});
