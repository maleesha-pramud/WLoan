import { Inter_400Regular, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_400Regular,
  });
  const [isBalanceHidden, setIsBalanceHidden] = useState(false);

  if (!fontsLoaded) {
    return null;
  }

  const toggleBalanceVisibility = () => {
    setIsBalanceHidden(!isBalanceHidden);
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Component */}
      <View style={styles.rowContainer}>
        <View>
          <Text style={styles.greetingText}>Good morning, Maleesha</Text>
          <Text style={styles.greetingText2}>Welcome to WLoan</Text>
        </View>
        <TouchableOpacity onPress={() => { }} style={styles.notificationBtn}>
          <Ionicons name="notifications-outline" size={30} color="black" />
        </TouchableOpacity>
      </View>

      {/* Your Balance Component */}
      <View style={styles.yourBalanceComponent}>
        <View style={styles.rowContainer}>
          <View style={{ flex: 1 }}>
            <Text style={styles.smallText}>Your Balance</Text>
            <Text style={styles.largeText}>{isBalanceHidden ? "****" : "$3,200.00"}</Text>
          </View>
          <TouchableOpacity onPress={() => toggleBalanceVisibility()} style={styles.hideBtn}>
            {isBalanceHidden ? (
              <Ionicons name="eye-outline" size={26} color="black" />
            ) : (
              <Ionicons name="eye-off-outline" size={26} color="black" />
            )}
          </TouchableOpacity>
        </View>
        <Pressable style={styles.defaultBtn} onPress={() => { }}>
          <Text style={styles.defaultBtnText}>Add Funds</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    // backgroundColor: "white",
  },
  greetingText: {
    fontSize: 20,
    fontFamily: 'Inter_700Bold',
    color: "#333",
  },
  greetingText2: {
    fontSize: 20,
    fontFamily: 'Inter_400Regular',
    color: "#333",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  notificationBtn: {
    borderWidth: 1,
    padding: 8,
    borderRadius: 8,
    borderColor: "gray"
  },
  yourBalanceComponent: {
    padding: 20,
    borderRadius: 16,
    backgroundColor: "white",
    marginTop: 24,
  },
  smallText: {
    fontSize: 16,
    color: "gray",
  },
  largeText: {
    fontSize: 32,
    fontFamily: 'Inter_700Bold',
    color: "#333",
  },
  defaultBtn: {
    marginTop: 16,
    backgroundColor: "black",
    color: "white",
    padding: 12,
    borderRadius: 30,
  },
  defaultBtnText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontFamily: 'Inter_700Bold',
  },
  hideBtn: {
    marginTop: 15,
  }
})