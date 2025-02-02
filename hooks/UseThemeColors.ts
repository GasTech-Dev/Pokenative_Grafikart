import {useColorScheme} from "react-native";
import {Colors} from "@/constants/Colors";

export function useThemeColors(): void {
    const theme = useColorScheme() ?? "light";
    // @ts-ignore
    return Colors[theme]
}