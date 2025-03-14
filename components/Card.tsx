import { useThemeColors } from "@/app/constants/hooks/useThemeColors";
import { Shadows } from "@/app/constants/Shadows";
import { useTheme } from "@react-navigation/native";
import { View, ViewStyle, type ViewProps } from "react-native";

type Props = ViewProps;


export function Card ({style,...rest} : Props) {
    const colors = useThemeColors();
 return <View style={[style,styles,{backgroundColor : colors.grayWhite}]} {...rest}>

 </View>
}

const styles = {
    backgroundColor : '#FFF',
    borderRadius: 8,
    ...Shadows.dp2,
} satisfies ViewStyle