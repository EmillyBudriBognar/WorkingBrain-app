import { View, Text } from 'react-native';
import { Loading } from '@/components/loading';

export default function HomeScreen() {
  return (
    <View style={{flex:1, alignItems: 'center', backgroundColor: '#fff', paddingTop: 50}}>
      <Text style={{color: 'blue', fontSize: 30, textAlign: 'center'}}>Hello World! 😎</Text>
      <Loading/>
    </View>
  );
}
