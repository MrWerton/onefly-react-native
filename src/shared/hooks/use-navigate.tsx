import { useNavigation } from "@react-navigation/native";
import { StackNavigationProps } from "../../../App";
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type navigationProps = NativeStackNavigationProp<StackNavigationProps>

export const useNavigate= () => useNavigation<navigationProps>()