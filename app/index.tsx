import {ActivityIndicator, FlatList, Image, Text, View} from "react-native";
import {Link} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";
import { StyleSheet } from 'react-native';
import {ThemeText} from "@/components/ThemeText";
import {useThemeColors} from "@/hooks/UseThemeColors";
import {Card} from "@/components/Card";
import BlurViewWeb from "expo-blur/src/BlurView.web";
import {PokemonCard} from "@/components/pokemon/PokemonCard";
import {useFetchQuerry, useInfiniteFetchQuerry} from "@/hooks/useFetchQuerry";
import {getPokemonId} from "@/functions/pokemon";
import {SearchBar} from "@/components/SearchBar";
import {useState} from "react";
import {Row} from "@/components/Row";

export default function Index() {
    const color = useThemeColors();
    const {data, isFetching, fetchNextPage} = useInfiniteFetchQuerry("/pokemon?limit=21")
    const pokemon = data?.pages.flatMap(page => page.results) ?? []
    const [search, setSearch] = useState("")
    const filterdPokemon = search ? pokemon.filter(p=>p.name.includes(search.toLowerCase())):pokemon
    return (
    <SafeAreaView style={[stylese.container, {backgroundColor: color.tint}]}>

        <Row style={stylese.header} gap={16}>
            <Image source={require('@/assets/images/logo.png')} width={24} height={24}/>
            <ThemeText variant="headline" color="grayWhite">Pokédex</ThemeText>
        </Row>
        <Row>
            <SearchBar value={search} oneChange={setSearch}/>

        </Row>
        <Card style={stylese.body}>
            <FlatList
                data={filterdPokemon}
                numColumns={3}
                contentContainerStyle={stylese.gripGap}
                columnWrapperStyle={stylese.gripGap}
                ListFooterComponent={
                    isFetching ? <ActivityIndicator color={color.tint}/> : null
                }
                onEndReached={search ? undefined : ()=>fetchNextPage()}//Permet de demander la nouvel page quand on arrive au bout de la page
                renderItem={({item}) => <PokemonCard id={getPokemonId(item.url)} name={item.name} style={{flex:1/3}}/>} keyExtractor={(item, index) => item.url ?? `pokemon-${index}`}
            ></FlatList>
        </Card>
    </SafeAreaView>
  );

}
const stylese = StyleSheet.create({
    container: {
        flex: 1,
        padding:4,
    },
    header: {
        paddingHorizontal:12,
        paddingVertical:8,
    },
    body:{
        flex:1,
        marginTop:24,
    },
    gripGap:{
        gap:8,
    },
    list:{
        padding:12,
    },

})