import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Image } from 'react-native-elements';

export default class movieDetailPage extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    let { backdrop_path, poster_path, overview, release_date, original_language, original_title, popularity, vote_average } = this.props.navigation.state.params.item
    return (
      <ScrollView style={styles.container}>
        <Image
          style={{ width: '100%', height: 150 }}
          source={{ uri: `https://image.tmdb.org/t/p/w500/${backdrop_path}` }}
        />
        <View style={{ flex: 1, flexDirection: 'row' ,alignText:'center',justifyContent:'center',textAlign:'center'}}>
          <View style={{ flex: 0.4,marginLeft:10 }}>

            <Image
              style={{ width: 100, height: 150, marginTop: 10, borderRadius: 5 }}
              source={{ uri: `https://image.tmdb.org/t/p/w500/${poster_path}` }}
            />
          </View>
          <View style={{ flex: 0.6 ,alignText:'center',justifyContent:'center',textAlign:'center'}}>
            <Text>{`Name: ${original_title}`}</Text>
            <Text>{`Popularity: ${popularity}`}</Text>
            <Text>{`language: ${original_language}`}</Text>
            <Text>{`Rating: ${vote_average}`}</Text>
            <Text>{`Release Date: ${release_date}`}</Text>
          </View>

        </View>
        <Text style={{alignText:'center',padding:20}}>{overview}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


// [Done]Description(overview)
// [Done]Language
// [Done]Popularity
// [Done]Release date
// item:
// adult: false
// backdrop_path: "/w2PMyoyLU22YvrGK3smVM9fW1jj.jpg"
// genre_ids: (3) [28, 12, 878]
// id: 299537
// original_language: "en"
// original_title: "Captain Marvel"
// overview: "The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe."
// popularity: 418.609
// poster_path: "/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg"
// release_date: "2019-03-06"
// title: "Captain Marvel"
// video: false
// vote_average: 7.2
// vote_count: 3148