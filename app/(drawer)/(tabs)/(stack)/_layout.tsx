import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { Stack, useNavigation, useRouter } from "expo-router";
import React from "react";
import { Platform } from "react-native";

const StackLayout = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const onToggleDrawer = (canGoBack: boolean | undefined) => {
    if (canGoBack) {
      router.back();
      return;
    }
    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  const os = Platform.OS === "ios";

  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: "transparent",
        },
        headerLeft: ({ tintColor, canGoBack }) => (
          <Ionicons
            name={canGoBack ? "arrow-back-outline" : "grid-outline"}
            color="#00586D"
            size={20}
            className={os ? "" : "mr-2"}
            onPress={() => onToggleDrawer(canGoBack)}
          />
        ),
      }}
    >
      <Stack.Screen
        name="home/index"
        options={{
          title: "Home",
        }}
      />
      <Stack.Screen
        name="profile/index"
        options={{
          title: "Perfil",
        }}
      />
      <Stack.Screen
        name="products/index"
        options={{
          title: "Productos",
        }}
      />
      <Stack.Screen
        name="products/[id]"
        options={{
          title: "Detalle del producto",
        }}
      />
      <Stack.Screen
        name="fonts/index"
        options={{
          title: "Fuentes",
          headerShown: true,
          animation: "ios_from_left",
        }}
      />
      <Stack.Screen
        name="settings/index"
        options={{
          title: "Ajustes",
        }}
      />
    </Stack>
  );
};

export default StackLayout;
