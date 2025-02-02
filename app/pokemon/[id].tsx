import { Text, View } from "react-native";
import {Link, useLocalSearchParams} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";

export default function Index() {
    const params = useLocalSearchParams();
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#3dc7d0" }}>
            <Text>Pokemon numéro: {params.id}</Text>
        </SafeAreaView>
    );
}
