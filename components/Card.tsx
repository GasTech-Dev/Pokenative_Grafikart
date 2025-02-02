import {View, ViewProps, ViewStyle} from "react-native";
import {Shadow} from "@/constants/Shadow";
import {useThemeColors} from "@/hooks/UseThemeColors";

type Props = ViewProps
export function Card({style, ...rest}:Props) {
    const color = useThemeColors()

    return <View style={[style, styles, {backgroundColor:color.grayWhite}]} {...rest}/>
}
const styles = {
    borderRadius:8,
    ...Shadow.dp2,
}satisfies ViewStyle