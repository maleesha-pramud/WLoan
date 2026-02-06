import { Inter_400Regular, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LoanCard from './components/loanCard';

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
          <Ionicons name="notifications-outline" size={30} color="white" />
        </TouchableOpacity>
      </View>

      {/* Your Balance Component */}
      <View style={styles.yourBalanceComponent}>
        <View style={styles.rowContainer}>
          <View style={{ flex: 1 }}>
            <Text style={styles.smallText}>Your Balance</Text>
            <TouchableOpacity onPress={() => toggleBalanceVisibility()}>
              <Text style={styles.largeText}>{isBalanceHidden ? "****" : "$3,200.00"}</Text>
            </TouchableOpacity>
          </View>
          <Pressable style={styles.defaultBtn} onPress={() => { }}>
            <Ionicons name="add" size={24} color="white" />
          </Pressable>
        </View>
      </View>

      {/* Loan Card Component */}
      <ScrollView>
        <View style={styles.loanCardContainer}>
          <LoanCard title='Monthly Loan' givenAmount={5000} collectedAmount={3000} />
          <LoanCard title='Daily Loan' givenAmount={5000} collectedAmount={3000} />
          <LoanCard title='Collateral Cheque' givenAmount={5000} collectedAmount={3000} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: "#1E1C1A",
  },
  greetingText: {
    fontSize: 22,
    fontFamily: 'GolosText-SemiBold',
    color: "white",
  },
  greetingText2: {
    fontSize: 20,
    fontFamily: 'Inter_400Regular',
    color: "white",
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
    padding: 16,
    borderRadius: 16,
    backgroundColor: "white",
    marginTop: 24,
    marginBottom: 16,
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
  hideBtn: {
    marginTop: 15,
  },
  loanCardContainer: {
    gap: 16,
  }
})