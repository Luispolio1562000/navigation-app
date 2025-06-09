import CustomButton from "@/components/shared/CustomButton";
import { DrawerActions } from "@react-navigation/native";
import { Link, router, useNavigation } from "expo-router";
import React from "react";
import { SafeAreaView, View } from "react-native";

const HomeScreen = () => {
  const navigation = useNavigation();
  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <SafeAreaView>
      <View className="flex flex-col gap-4 p-4">
        <Link href={"/(drawer)/(tabs)/(stack)/profile"} asChild>
          <CustomButton color="secondary">Perfil</CustomButton>
        </Link>

        <CustomButton
          onPress={() => router.push("/(drawer)/(tabs)/(stack)/products")}
          color="primary"
        >
          Productos
        </CustomButton>
        <CustomButton
          variant="contained"
          color="tertiary"
          onPress={() => router.push("/(drawer)/(tabs)/(stack)/fonts")}
        >
          Fuentes
        </CustomButton>

        <CustomButton
          variant="text-only"
          color="tertiary"
          onPress={() => router.push("/(drawer)/(tabs)/(stack)/settings")}
        >
          Ajustes
        </CustomButton>
        <CustomButton
          onPress={onToggleDrawer}
          color="primary"
          variant="text-only"
        >
          Abrir menú
        </CustomButton>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
