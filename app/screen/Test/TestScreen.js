import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class TestScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  _onAddData() {
    this.props.dispatch({ type: 'TEST_TYPE_ADD', test: Math.floor(999999 * Math.random()) })
  }

  _onDeleteData(itemData) {
    const data = this.props.myData.data;
    const filter = data.filter(item => itemData !== item)
    this.props.dispatch({ type: 'TEST_TYPE_DELETE' })
    filter.map((item, key) => {
      this.props.dispatch({ type: 'TEST_TYPE_ADD', test: item })
    })
  }
  
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Test2')}>
          <Text>To Next Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this._onAddData()}>
          <Text>+ Add Data</Text>
        </TouchableOpacity>
        { this.props.myData.data.length > 0 ? this.props.myData.data.map((item, key) => (
          <TouchableOpacity key={key} onPress={() => this._onDeleteData(item)}>
            <Text>{item}</Text>
          </TouchableOpacity>
        )) : <View />}
      </View>
    );
  }
}

const stateToProps = state => {
  return {
    myData: state.test
  }
}

export default connect(stateToProps)(TestScreen);

