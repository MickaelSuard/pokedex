import { View, ViewStyle, type ViewProps } from "react-native";

type Props = ViewProps;


export function Card ({style,...rest} : Props) {
 return <View style={[style,styles]} {...rest}>

 </View>
}

const styles = {
    backgroundColor : '#FFF',
    borderRadius: 8,
} satisfies ViewStyle