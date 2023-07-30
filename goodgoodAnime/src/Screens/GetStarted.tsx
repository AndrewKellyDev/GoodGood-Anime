import { View, Text, SafeAreaView, TouchableOpacity } from "react-native"

const GetStarted = () => {
    return (
        <View style={{ backgroundColor: '#9074F7', flex: 1, paddingHorizontal: 36, paddingVertical: 72, justifyContent: 'space-between' }}>
            <SafeAreaView />
            <View>
                <Text style={{ fontSize: 55, fontWeight: 'bold', textAlign: 'center' }}>
                    <Text style={{ color: 'white' }}>
                        Unlimted Anime{`\n`}
                    </Text>
                    <Text>
                        アニメ。{`\n`}
                    </Text>
                    <Text style={{ color: 'white' }}>
                        Straight from Japan{`\n`}
                    </Text>
                    <Text>
                        日本。
                    </Text>
                </Text>
            </View>

            <View>
                <TouchableOpacity>
                    <View style={{ backgroundColor: 'black', width: '100%', alignItems: 'center', paddingVertical: 25, borderRadius: 12 }}>
                        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
                            Get Started
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={{ color: 'white', marginTop: 20, textAlign: 'center' }}>
                        Already have an account?
                        <Text style={{ fontWeight: 'bold' }}> Sign In</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default GetStarted
