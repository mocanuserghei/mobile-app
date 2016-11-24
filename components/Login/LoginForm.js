import  React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Navigator,
    TextInput,
    TouchableHighlight,
    Button,
    View,
    AsyncStorage
}from 'react-native';

import styles from "../../styles/styles";

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.navMovies = this.navMovies.bind(this);

        this.state = {
            email: '',
            password: ''
        }
    }

    navMovies(){
        this.props.navigator.push({
            id: 'movies'
        })
    }

    login() {
        this.props.onLogin(this.state);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.welcome}>
                    <TextInput
                        style={styles.textinput}
                        onChangeText={(text) => this.setState({email: text})}
                        value={this.state.email}
                        placeholder={"Email"}
                    />
                    <TextInput
                        style={styles.textinput}
                        onChangeText={(text) => this.setState({password: text})}
                        value={this.state.password}
                        secureTextEntry={true}
                        placeholder={"Password"}
                    />

                    <Button
                        onPress={this.login}
                        title="Login"
                        color="#593222"
                    />
                    <TouchableHighlight onPress={this.navMovies}>
                        <Text>Skip (go to movies)</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

export default LoginForm;
