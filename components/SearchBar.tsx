import {Image, TextInput, View, StyleSheet} from "react-native";
import {Row} from "@/components/Row";
import {useThemeColors} from "@/hooks/UseThemeColors";

type Props = {
    value: string,
    oneChange: (s: string) => void,
}

export function SearchBar({value, oneChange}: Props) {
    const colors = useThemeColors()

    return <Row gap={8} style={[styles.wrapper, {backgroundColor:colors.grayWhite}]}>
        <Image source={require('@/assets/images/search.png')} width={16} height={16}/>
        <TextInput style={[styles.input]} onChangeText={oneChange} value={value}/>
    </Row>
}
const styles = StyleSheet.create({
  wrapper: {
      flex: 1,
      borderRadius: 16,
      height: 32,
      paddingHorizontal: 12,
  },
  input:{
      flex:1,
      height:16,
      //fontSize: 10,
      lineHeight: 16,
  }
})