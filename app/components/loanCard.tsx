import FontAwesome from '@expo/vector-icons/FontAwesome';
import { StyleSheet, Text, View } from "react-native";

interface LoanCardProps {
  title?: string;
  givenAmount?: number;
  collectedAmount?: number;
}

export default function LoanCard({ title, givenAmount, collectedAmount }: LoanCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.rowContainer}>
        <View style={styles.iconContainer}>
          <FontAwesome name="money" size={24} color="black" />
        </View>
        <View style={{ gap: 5 }}>
          <Text style={styles.largeText}>{title}</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.rowContainer}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontFamily: 'GolosText-Medium', color: "#555" }}>Given Amount</Text>
          <Text style={styles.largeText}>{givenAmount?.toLocaleString()}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontFamily: 'GolosText-Medium', color: "#555" }}>Collected Amount</Text>
          <Text style={styles.largeText}>{collectedAmount?.toLocaleString()}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#E8E7DE',
    borderRadius: 20,
    padding: 20,
  },
  iconContainer: {
    backgroundColor: 'white',
    borderRadius: 30,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 16,
  },
  largeText: {
    fontSize: 26,
    fontFamily: 'GolosText-SemiBold',
    color: "#333",
  },
  divider: {
    height: 1,
    backgroundColor: 'gray',
    marginVertical: 16,
  }
})