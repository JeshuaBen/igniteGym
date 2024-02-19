import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { SignIn } from "@screens/SignIn";
import { SignUp } from "@screens/SignUp";

type TAuthRoutes = {
  signIn: undefined;
  signUp: undefined;
};

export type TAuthNavigatorRouterProps = NativeStackNavigationProp<TAuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<TAuthRoutes>();

export const AuthRoutes = () => {
  return (
    <Navigator
      initialRouteName="signIn"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="signIn" component={SignIn} />
      <Screen name="signUp" component={SignUp} />
    </Navigator>
  );
};
