import React from 'react';
import { ScrollView, StyleSheet, Text, View,Button } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Image } from 'react-native-elements';

export default class movieDetailPage extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    let { backdrop_path, poster_path, overview, release_date, original_language, original_title, popularity, vote_average } = this.props.navigation.state.params.item
    return (
      <ScrollView style={styles.container}>
        <Image
          style={{ width: '100%', height: 150 }}
          source={{ uri: `https://image.tmdb.org/t/p/w500/${backdrop_path}` }}
        />
        <View style={{ flex: 1, flexDirection: 'row', alignText: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <View style={{ flex: 0.4, marginLeft: 10 }}>

            <Image
              style={{ width: 100, height: 150, marginTop: 10, borderRadius: 5 }}
              source={{ uri: `https://image.tmdb.org/t/p/w500/${poster_path}` }}
            />
          </View>
          <View style={{ flex: 0.6, alignText: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <Text>{`Name: ${original_title}`}</Text>
            <Text>{`Popularity: ${popularity}`}</Text>
            <Text>{`language: ${original_language}`}</Text>
            <Text>{`Rating: ${vote_average}`}</Text>
            <Text>{`Release Date: ${release_date}`}</Text>
          </View>

        </View>
        <Text style={{ alignText: 'center', padding: 20 }}>{overview}</Text>
        <View style={{ marginVertical: 30 }}>

          <Button onPress={() => {}} title={'BOOK TICKETS'} />
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
