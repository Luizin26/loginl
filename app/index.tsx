import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import Icon from 'react-native-vector-icons/Feather'; // Usando Feather Icons

export default function Home() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const [emailValidationMessage, setEmailValidationMessage] = useState('');

    const handleEmailInputChange = (inputText) => {
        setUserEmail(inputText);
        if (inputText.includes('@')) {
            setEmailValidationMessage('');
        } else {
            setEmailValidationMessage('Por favor, insira um email válido.');
        }
    };

    return (
        <View style={styles.screen}>
            <View style={styles.box}>
                <View style={styles.imageWrapper}>
                    <Image style={styles.logo}
                        source={{
                            uri: 'https://i0.wp.com/smilephoto.com.br/wp-content/uploads/2018/05/sesi-logo.png?ssl=1'
                        }}
                    />
                </View>
                <TextInput
                    placeholder="Email"
                    style={[styles.emailInput, emailValidationMessage ? styles.errorBorder : null]}
                    keyboardType="email-address"
                    onChangeText={handleEmailInputChange}
                    value={userEmail}
                />
                {emailValidationMessage ? <Text style={styles.errorText}>{emailValidationMessage}</Text> : null}
                <View style={styles.passwordContainer}>
                    <TextInput
                        placeholder="Senha"
                        style={styles.passwordInput}
                        maxLength={10} // Limita a senha a 10 caracteres
                        secureTextEntry={!isPasswordVisible}
                    />
                    <TouchableOpacity
                        onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                        style={styles.iconWrapper}
                    >
                        <Icon name={isPasswordVisible ? "eye" : "eye-off"} size={24} color="gray" />
                    </TouchableOpacity>
                </View>
                <Link href={"#"} style={styles.registerButton}>Cadastre-se</Link>
                <Link href={"#"} style={styles.loginButton}>Entrar</Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#f0f0f0',
    },

    box: {
        alignItems: 'center',
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    imageWrapper: {
        alignItems: "center",
        marginBottom: 20,
    },

    logo: {
        height: 80,
        width: 260,
        resizeMode: 'contain',
    },

    emailInput: {
        width: 300,
        fontSize: 18,
        padding: 10,
        marginVertical: 10,
        borderBottomWidth: 1,
        borderColor: 'gray',
    },

    errorBorder: {
        borderColor: 'red',
    },

    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 300,
        borderBottomWidth: 1,
        borderColor: 'gray',
        marginBottom: 20,
    },

    passwordInput: {
        flex: 1,
        fontSize: 18,
        padding: 10,
    },

    iconWrapper: {
        padding: 5,
    },

    errorText: {
        color: 'red',
        fontSize: 14,
        marginBottom: 10,
    },

    registerButton: {
        fontSize: 20,
        color: 'blue',
        marginVertical: 5,
    },

    loginButton: {
        fontSize: 20,
        backgroundColor: 'red',
        color: 'white',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 30,
        textAlign: 'center',
    },
});
