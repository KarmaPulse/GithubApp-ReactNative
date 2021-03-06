/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Main = require('./App/Components/Main');

var {
    AppRegistry,
    StyleSheet,
    Text,
    NavigatorIOS,
    View,

} = React;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111111',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

var FirstProject = React.createClass({

    render: function() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
                    title: "GitHub Base App",
                    component: Main

                }} />


        );
    }

});


AppRegistry.registerComponent('FirstProject', () => FirstProject);
