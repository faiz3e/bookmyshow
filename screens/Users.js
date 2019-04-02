import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet
} from 'react-native';
import { ListItem } from 'react-native-elements';

export default class Users extends React.Component {
  state = {
    seed: 1,
    page: 1,
    users: [],
    isLoading: false,
    isRefreshing: false,
  };

  loadUsers = () => {
    const { users, seed, page } = this.state;
    this.setState({ isLoading: true });

    fetch(`https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          users: page === 1 ? res.results : [...users, ...res.results],
          isRefreshing: false,
        });
      })
      .catch(err => {
        console.error(err);
      });
  };

  handleRefresh = () => {
    this.setState({
      seed: 1,
      isRefreshing: true,
    }, () => {
      this.loadUsers();
    });
  };

  handleLoadMore = () => {
    console.log("reached end");
    this.setState({
      page: this.state.page + 1
    }, () => {
      this.loadUsers();
    });
  };

  componentDidMount() {
    this.loadUsers();
  };

  render() {
    const { users, isRefreshing } = this.state;
console.log("pp",users);
    return (
      <View style={s.scene}>
      <Text>{'asda'}</Text>
        {
          users &&
            <FlatList
              data={users}
              renderItem={({item}) => (
                <ListItem
                  key={item}
                  roundAvatar
                  title={'asd'}
                  subtitle={'asdasd'}
                  // avatar={{uri: item.picture.thumbnail}}
                />
              )}
              keyExtractor={this._keyExtractor}
              refreshing={isRefreshing}
              onRefresh={this.handleRefresh}
              onEndReached={this.handleLoadMore}
              onEndReachedThreshold={1}
            />
        }
      </View>
    )
  }
}

const s = StyleSheet.create({
  scene: {
    flex: 1,
    paddingTop: 25,
    backgroundColor:'red'
  },
  user: {
    backgroundColor: '#333',
    marginBottom: 10,
    paddingLeft: 25,
  },
  userName: {
    fontSize: 17,
    paddingVertical: 20,
    color: 'red'
  }
});
