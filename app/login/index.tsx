import { auth } from '../../utils/firebase';
import { View, Text, TextInput, Button } from 'react-native'
import { Link, useRouter } from 'expo-router';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';

export default function Login() {
    const router = useRouter();
    const [ loginInState, setLogInState ] = useState<boolean>(false);
    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');
    useEffect(()=>{
        if(loginInState){
            router.replace('/register')
        }
    },[loginInState,router])
    const handleLogin = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log("Logged in: ", user.uid)
            router.replace('/home')
        } catch (error:any){
            console.log(error.message)
        }
    };
    const handleAlreadyLogin = async () => {
        const app = onAuthStateChanged(auth, async(user)=>{
            if(user){
                setLogInState(true)
                router.replace('/home')
            }
        })
        
        try{
            app()
        }
        catch(e){
            console.log(e)
        }
    }
    useEffect(()=>{
        handleAlreadyLogin()
    },[loginInState,router])

    return  (
        <View>
            <Text>Email:</Text>
            <TextInput
                value={email}
                placeholder='Enter your email'
                onChangeText={setEmail}
            />
            <Text>Password:</Text>
            <TextInput
                value={password}
                placeholder='Enter your password'
                onChangeText={setPassword}
            />
            <Link href={ { pathname:'/register'}}>
                <Button title='register now'></Button>
            </Link>

            <Button title='Login' onPress={handleLogin}></Button>
        </View>
    )
}
