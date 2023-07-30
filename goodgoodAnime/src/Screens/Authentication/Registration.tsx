import { View, Text, TextInput, TouchableOpacity } from "react-native"
import Entypo from '@expo/vector-icons/Entypo';

const RegistrationScreen = () => {
    return (
        <View style={{ backgroundColor: '#000000', flex: 1, paddingHorizontal: 36, paddingVertical: 72 }}>
            <Entypo name="chevron-left" size={32} color="white" />

            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 30, marginTop: 36 }}>
                You're almost ready to watch anime.
            </Text>

            <View style={{ flex: 1, justifyContent: 'space-between', marginTop: 36 }}>
                <View>
                    <TextInput
                        style={{ backgroundColor: '#1A191B', paddingVertical: 25, paddingLeft: 25, borderRadius: 12, marginBottom: 16, color: 'white' }}
                        placeholderTextColor="rgba(255, 255, 255, 0.6)"
                        placeholder="Email address"
                    />

                    <TextInput
                        style={{ backgroundColor: '#1A191B', paddingVertical: 25, paddingLeft: 25, borderRadius: 12, marginBottom: 16, color: 'white' }}
                        placeholderTextColor="rgba(255, 255, 255, 0.6)"
                        placeholder="Username"
                    />

                    <TextInput
                        style={{ backgroundColor: '#1A191B', paddingVertical: 25, paddingLeft: 25, borderRadius: 12, color: 'white' }}
                        placeholderTextColor="rgba(255, 255, 255, 0.6)"
                        placeholder="Password"
                    />
                </View>

                <View>
                    <TouchableOpacity style={{ alignSelf: 'center', marginBottom: 29 }}>
                        <Text style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                            Already have an account?
                            <Text style={{ fontWeight: 'bold' }}> Login</Text>
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ backgroundColor: '#9074F7', width: '100%', alignItems: 'center', paddingVertical: 25, borderRadius: 12 }}>
                            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
                                Register
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default RegistrationScreen
