import React from 'react';
import {  Image,  Text,  TouchableOpacity,  View,  FlatList} from 'react-native';
import { connect } from 'react-redux'

import { WebBrowser } from 'expo';
import { styles } from './components_style';

class MovieListingComponent extends React.Component {

  onItemClicked = (item) => {
    this.props.navigation.navigate('movieDetailPage', { item })
  }

  componentDidMount() { }

  render() {
    let results = this.props.movies[this.props.index] && this.props.movies[this.props.index].results
    return (
      <FlatList
        data={results && results}
        horizontal={true}
        removeClippedSubviews={false}
        renderItem={({ item, id }) => {
          return (
            <TouchableOpacity onPress={() => this.onItemClicked(item)}>
              <View key={id} style={{ marginHorizontal: 20 }}>
                <Image
                  style={{ width: 100, height: 150 ,borderRadius:5}}
                  source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }}
                />
                <Text style={styles.movieName}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    );
  }

//   _maybeRenderDevelopmentModeWarning() {
//     if (__DEV__) {
//       const learnMoreButton = (
//         <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
//           Learn more
//         </Text>
//       );

//       return (
//         <Text style={styles.developmentModeText}>
//           Development mode is enabled, your app will be slower but you can use useful development
//           tools. {learnMoreButton}
//         </Text>
//       );
//     } else {
//       return (
//         <Text style={styles.developmentModeText}>
//           You are not in development mode, your app will run at full speed.
//         </Text>
//       );
//     }
//   }

//   _handleLearnMorePress = () => {
//     WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
//   };

//   _handleHelpPress = () => {
//     WebBrowser.openBrowserAsync(
//       'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
//     );
//   };
}



const mapStateToprops = (state) => {
  return {
    movies: state.movieListingReducer.movies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export const MovieListing = connect(mapStateToprops, mapDispatchToProps)(MovieListingComponent)
