import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { Text, View } from "react-native";

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props} scrollEnabled={true}>
      <View
        className={
          "flex items-center justify-center gap-4 p-10 mx-3 mb-10 h-[150px] rounded-xl bg-primary"
        }
      >
        <View className="flex justify-center items-center bg-white rounded-full h-24 w-24">
          <Text className="text-3xl font-inter-bold text-primary">GP</Text>
        </View>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
