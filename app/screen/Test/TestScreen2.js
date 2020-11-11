import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'

export class TestScreen2 extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                { this.props.data.data.length > 0 ? this.props.data.data.map((item, key) => (
                    <Text key={key}>{item}</Text>
                )) : <View />}
            </View>
        )
    }
}

const stateToProps = state => {
    return {
        data: state.test
    }
}

export default connect(stateToProps)(TestScreen2)
