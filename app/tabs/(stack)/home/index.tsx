import CustomButton from "@/components/shared/CustomButton";
import { Link, router } from "expo-router";
import React from "react";
import { SafeAreaView, View } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="flex flex-col gap-4 p-4">
        <Link href={"/tabs/(stack)/profile"} asChild>
          <CustomButton color="secondary">Perfil</CustomButton>
        </Link>

        <CustomButton
          onPress={() => router.push("/tabs/(stack)/products")}
          color="primary"
        >
          Productos
        </CustomButton>
        <CustomButton
          variant="contained"
          color="tertiary"
          onPress={() => router.push("/tabs/(stack)/fonts")}
        >
          Fuentes
        </CustomButton>

        <CustomButton
          variant="text-only"
          color="tertiary"
          onPress={() => router.push("/tabs/settings")}
        >
          Ajustes
        </CustomButton>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
