import {Image, Text, Vibration, View, ViewStyle} from "react-native";
import {ThemeText} from "@/components/ThemeText";
import {Card} from "@/components/Card";
import { StyleSheet } from 'react-native';
import {useThemeColors} from "@/hooks/UseThemeColors";
import {Link} from "expo-router";
import {Pressable, TouchableWithoutFeedback} from "react-native";

type Props = {
    style?:ViewStyle,
    id:number,
    name:string,

}
export function PokemonCard({style, id, name}: Props){
    const colors = useThemeColors();


    // @ts-ignore
    return <Link href={{pathname:"/pokemon/[id]", params:{id:id}}} asChild>
            <Pressable style={style}>
                <Card  style={[style, styles.card]}>
                <View style={[styles.shadow, {backgroundColor: colors.grayBackground}]}/>
                <ThemeText variant="caption" color={"grayMedium"}>#{id.toString().padStart(3, "0")}</ThemeText>
                <Image
                    source={{uri:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}}
                    width={72}
                    height={72}
                />
                <ThemeText color={"grayDark"}>{name}</ThemeText>

            </Card>
            </Pressable>
    </Link>
}
const styles = StyleSheet.create({
    card:{
        position:"relative",
        alignItems: "center",
        padding:4
    },
    id:{
        alignSelf: "flex-end",
    },
    shadow:{
        position:"absolute",
        bottom:0,
        left:0,
        right:0,
        height:44,
        borderRadius:7,
    }
})