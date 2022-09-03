import React from 'react'
import {ActivityIndicator, Dimensions, Text, View, FlatList, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HorizontalSlider } from '../components/HorizontalSlider';

//import Carousel from 'react-native-snap-carousel';

const {width: windowWidth} = Dimensions.get( 'window');

import { MoviePoster } from '../components/moviePoster';
import { useMovies } from '../hooks/useMovies'


export const HomeScreen = () => {
    const {peliculasEnCine, isLoading} = useMovies();
    const {top} = useSafeAreaInsets();

    if(isLoading){
        return (
            <View style={{  flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <ActivityIndicator color="red" size={100}/>
            </View>
        )
    }
    
    


  return (

    



    <ScrollView>
        <View style={{marginTop: top + 20}}>

            

            {/*Carrusel Primario */}

            <View style={{ height: 440  }}>

                {/*Peliculas pop */}
        {/*<View style={{backgroundColor: 'red', height: 260}}>
            <Text style={{fontSize: 30, fontWeight:'bold'}}>Popular</Text>
            <FlatList
                data= {peliculasEnCine}
                renderItem={({item}: any) => (
                    <MoviePoster movie= {item} width={140} height={200}/>
                ) }
                keyExtractor={(item)=> item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />


        </View>

                

                
            {/*<Carousel
                data= {peliculasEnCine}
                renderItem={({item}: any) => <MoviePoster movie= {item}/> }
                sliderWidth={windowWidth}
                itemWidth={300}
            />*/}

            </View>

        {/*Peliculas pop */}
        

        {/*Peliculas pop */}
            <HorizontalSlider title="En cine" movies={peliculasEnCine}/>
            <HorizontalSlider movies={peliculasEnCine}/>

            <HorizontalSlider title="En cine" movies={peliculasEnCine}/>

        </View>
    </ScrollView>
  )
}
