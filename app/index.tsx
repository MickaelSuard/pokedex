
import { ThemedText } from "@/components/ThemedText";
import { Link } from "expo-router";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useThemeColors } from "./constants/hooks/useThemeColors";
import { Card } from "@/components/Card";

export default function Index() {
  const colors = useThemeColors();
  return (
    <SafeAreaView style={[styles.container, {backgroundColor : colors.tint}]}>
      <Card>
      <ThemedText variant="headline" color="grayDark" >Pokédex</ThemedText>
      </Card>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: { flex: 1 }

})

// Vidéo 31:55