import { StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { Text, View } from "@/src/components/Themed";

const image = require("../../../assets/images/Saly-1.png");
const google = require("../../../assets/google-button.png");
import { signInWithRedirect } from "aws-amplify/auth";
import { Link, useNavigation } from "expo-router";

import { translations } from "@aws-amplify/ui";

import { I18n } from "aws-amplify/utils";
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

const WelcomeScreen = () => {
  const navigation = useNavigation();

  navigation.setOptions({
    headerShown: false,
  });

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{ marginTop: 5, justifyContent: "center", alignItems: "center" }}
      >
        <Image style={styles.image} source={image} />
        <Text style={styles.header1}>Borsa Guru'ya Hoşgeldiniz</Text>
        <Text style={styles.header2}>
          Size tanımlanmış olan 1000 Ø(=TL)* ile yatırımınıza başlayın
        </Text>
        <View style={{ top: 110 }}>
          <Pressable>
            <Link href="/Auth/SignUpScreen">
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "gray",
                  paddingVertical: 15,
                  paddingHorizontal: 95,
                  borderRadius: 5,
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: 17 }}>
                  Kayıt Ol
                </Text>
              </View>
            </Link>
          </Pressable>

          <View style={{ top: 10 }}>
            <Pressable>
              <Link href="/Auth/SignInScreen">
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: "gray",
                    paddingVertical: 15,
                    paddingHorizontal: 95,
                    borderRadius: 5,
                  }}
                >
                  <Text style={{ fontSize: 17 }}>Giriş Yap</Text>
                </View>
              </Link>
            </Pressable>
          </View>
        </View>
      </View>

      <Text
        style={{
          fontSize: 7,
          textAlign: "center",
          marginTop: "auto",
          padding: 15,
        }}
      >
        <Text style={{ fontSize: 10, fontWeight: "bold" }}>* </Text>1 Ø (Guru)
        <Text style={{ fontWeight: "bold" }}>Sanal</Text> bir para
        olup,kullanılma amacı tamamen uygulamadaki simülasyon içindir.
        <Text style={{ fontWeight: "bold" }}>Herhangi bir değeri yoktur.</Text>
      </Text>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  image: {
    height: "40%",
    aspectRatio: 1,
    marginBottom: 10,
  },
  header1: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 15,
  },
  header2: {
    fontSize: 20,
    textAlign: "center",
    color: "#707070",
  },
  google: {
    width: 300,
    height: 90,
    justifyContent: "center",
    alignItems: "center",

    marginBottom: 10,
    resizeMode: "contain",
  },
});
