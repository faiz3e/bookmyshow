import React from 'react';
import {ScrollView,  Text,  View,  Button,} from 'react-native';
import { connect } from 'react-redux'
import { styles } from './MovieListScreen_style';

import { getGenreListAction } from './actionCreators';
import { GenreListing } from '../components/GenreListing';

class LandingPageComponent extends React.Component {
  state = {
    genres: [],
    pageNo: 1
  }

  _keyExtractor = (item, index) => item.id;

  componentDidMount() {
    this.props.getGenreList(1)
  }

  loadMoreData = () => {
    this.setState({
      pageNo: this.state.pageNo + 1
    }, () => {
      this.props.getGenreList(this.state.pageNo)
    })
  }
  
  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Text style={styles.headingText}>{'Book My Show'}</Text>
          {this.props.genres && this.props.genres.length > 0 && this.props.data.movies &&
            <GenreListing genres={this.props.genres} navigation={this.props.navigation} />
          }
          <Button style={styles.buttonStyle} onPress={() => this.loadMoreData()} title={'Load more'} />
        </ScrollView>
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

  // _handleLearnMorePress = () => {
  //   WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  // };

  // _handleHelpPress = () => {
  //   WebBrowser.openBrowserAsync(
  //     'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
  //   );
  // };

}

const mapStateToprops = (state) => {
  return {
    data: state.movieListingReducer,
    genres: state.movieListingReducer.genres,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getGenreList: (pageNo) => dispatch(getGenreListAction(pageNo))
  }
}

export const LandingPage = connect(mapStateToprops, mapDispatchToProps)(LandingPageComponent)
