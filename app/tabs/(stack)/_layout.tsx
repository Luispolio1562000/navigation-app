import { Stack } from "expo-router";
import React from "react";

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: "#ffffff",
        },
      }}
    >
      <Stack.Screen
        name="/tabs/(stack)/home"
        options={{
          title: "Home",
        }}
      />
      <Stack.Screen
        name="/tabs/(stack)/profile"
        options={{
          title: "Perfil",
        }}
      />
      <Stack.Screen
        name="/tabs/(stack)/products"
        options={{
          title: "Productos",
        }}
      />
      <Stack.Screen
        name="/tabs/(stack)/products/[id]"
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
        name="/tabs/(stack)/settings"
        options={{
          title: "Ajustes",
        }}
      />
    </Stack>
  );
};

export default StackLayout;
