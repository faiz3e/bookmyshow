import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import { MovieListing } from './MovieListing';


export const  GenreListing=(props)=>{
  console.log("this.props. in genere",props);
  
    return (
      <View style={s.scene}>
        <FlatList
          data={props.genres}
          renderItem={({ item, index }) => {
            return (
              <View key={index} style={{ marginVertical: 0  }}>
                <Text style={s.textStyle}>{item.name}</Text>
                <MovieListing movieList={item.id} index={index} navigation={props.navigation} />
              </View>
            );
          }}
        />
      </View>
    );
}

const s = StyleSheet.create({
  scene: {
    flex: 1,
    paddingTop: 25,
    backgroundColor: '#f7f7f7'
  },
  user: {
    backgroundColor: '#ffff',
    marginBottom: 10,
    paddingLeft: 25,
  },
  userName: {
    fontSize: 17,
    paddingVertical: 20,
  },
  textStyle:{
    marginBottom:25,
    color: '#474646',
    fontSize: 16,
    marginHorizontal:15
  }
});
