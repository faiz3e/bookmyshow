import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import { MovieListing } from './MovieListing';


export function GenreListing(){
    return (
      <View style={s.scene}>
        <FlatList
          data={this.props.genres}
          renderItem={({ item, index }) => {
            return (
              <View key={index} style={{ marginVertical: 0  }}>
                <Text style={s.textStyle}>{item.name}</Text>
                <MovieListing movieList={item.id} index={index} navigation={this.props.navigation} />
              </View>
            );
          }}
        />
      </View>
    );
}

  // _maybeRenderDevelopmentModeWarning() {
  //   if (__DEV__) {
  //     const learnMoreButton = (
  //       <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
  //         Learn more
  //       </Text>
  //     );

  //     return (
  //       <Text style={styles.developmentModeText}>
  //         Development mode is enabled, your app will be slower but you can use useful development
  //         tools. {learnMoreButton}
  //       </Text>
  //     );
  //   } else {
  //     return (
  //       <Text style={styles.developmentModeText}>
  //         You are not in development mode, your app will run at full speed.
  //       </Text>
  //     );
  //   }
  // }

//   _handleLearnMorePress = () => {
//     WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
//   };

//   _handleHelpPress = () => {
//     WebBrowser.openBrowserAsync(
//       'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
//     );
//   };
// }//

const mapStateToprops = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // getGenreList: (pageNo) => dispatch(getGenreListAction(pageNo))
    // login: (values) => dispatch(doLogin(values)),
    // rehydrateReducer: (values) => dispatch(rehydrateReducer(values))
  }
}

// export const GenreListing = connect(mapStateToprops, mapDispatchToProps)(GenreListingComponent)


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
