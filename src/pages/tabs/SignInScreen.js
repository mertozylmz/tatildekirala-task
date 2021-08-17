import React, { useContext } from 'react'
import { Text, TextInput, Button, StyleSheet } from 'react-native'

import { useForm, Controller } from "react-hook-form"

// Context
import { Context as AuthContext } from '../../context/AuthContext'

// App Component
import Container from '../../components/Container'

const SignInScreen = () => {
    // Context
    const { signin } = useContext(AuthContext)
    // Hooks
    const { control, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = data => {
        signin(data)
    }

    return (
        <Container>
            <Controller
                control={control}
                rules={{
                    pattern: /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+.)+([.])+[a-zA-Z0-9.-]{2,4}$/,
                    required: true
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        keyboardType="email-address"
                        placeholder="E-Posta Adresi"
                        placeholderTextColor="#ccc"
                        onChangeText={onChange}
                        autoCapitalize="none"
                        style={styles.input}
                        onBlur={onBlur}
                        value={value}
                    />
                )}
                name="email"
                defaultValue="tatilde@kirala.com"
            />
            {errors.email && <Text style={styles.error}>{errors.email.type == "required" ? "Email zorunludur." : "Lütfen geçerli bir e-posta adresinizi girin."}</Text>}

            <Controller
                control={control}
                rules={{
                    required: true,
                    minLength: 6
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        placeholderTextColor="#ccc"
                        onChangeText={onChange}
                        secureTextEntry={true}
                        autoCapitalize="none"
                        style={styles.input}
                        placeholder="Sifre"
                        onBlur={onBlur}
                        value={value}
                    />
                )}
                name="password"
                defaultValue="123456"
            />
            {errors.password && <Text style={styles.error}>{errors.password.type == "required" ? "Şifre zorunludur." : "En az 6 karakter olmalıdır."}</Text>}

            <Button title="Giriş Yap" onPress={handleSubmit(onSubmit)} />
        </Container>
    )
}

const styles = StyleSheet.create({
    input: {
        paddingHorizontal: 15,
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 20,
        height: 50
    },
    error: {
        color: 'red'
    }
})

export default SignInScreen
