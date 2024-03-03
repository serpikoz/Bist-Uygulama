// import {
//   Keyboard,
//   Pressable,
//   SafeAreaView,
//   StyleSheet,
//   TextInput,
//   Touchable,
//   TouchableOpacity,
// } from "react-native";
// import React, { useState } from "react";
// import { Text, View } from "@/src/components/Themed";
// import { signIn } from "aws-amplify/auth";

// const SignInScreen = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSignIn = async () => {
//     setError("");
//     // Burada giriş işlemlerini gerçekleştirebilirsiniz.

//     try {
//       const { isSignedIn } = await signIn({
//         username: email,
//         password,
//       });
//       console.log(isSignedIn);
//     // } catch (e) {
//       setError(e.message);
//     }
//   };

//   return (
//     <Pressable style={{ flex: 1 }} onPress={Keyboard.dismiss}>
//       <View style={styles.container}>
//         <Text style={styles.title}>Giriş Yap</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="E-mail"
//           onChangeText={setEmail}
//           value={email}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Şifre"
//           onChangeText={(text) => setPassword(text)}
//           value={password}
//           secureTextEntry
//         />
//         <Pressable style={styles.button} onPress={handleSignIn}>
//           <Text style={styles.buttonText}>Giriş Yap</Text>
//         </Pressable>
//         {error && <Text style={{ color: "red" }}>{error}</Text>}
//       </View>
//     </Pressable>
//   );
// };

// export default SignInScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
//   input: {
//     width: "100%",
//     height: 40,
//     borderColor: "gainsboro",
//     borderWidth: 1,
//     color: "gray",

//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 10,
//   },
//   button: {
//     width: "100%",
//     height: 40,
//     backgroundColor: "blue",
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: "white",
//     fontSize: 16,
//   },
// });
