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

import {
  Keyboard,
  Pressable,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Text, View } from "@/src/components/Themed";
import { signIn } from "aws-amplify/auth";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = async () => {
    setError("");
    // Burada giriş işlemlerini gerçekleştirebilirsiniz.

    try {
      const { isSignedIn } = await signIn({
        username: email,
        password,
      });
      console.log(isSignedIn);
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <Pressable style={{ flex: 1 }} onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>Giriş Yap</Text>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Şifre"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
        />
        <Pressable style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Giriş Yap</Text>
        </Pressable>
        {error && <Text style={{ color: "red" }}>{error}</Text>}
      </View>
    </Pressable>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gainsboro",
    borderWidth: 1,
    color: "gray",

    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    width: "100%",
    height: 40,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
