import React from "react";
import { Pressable, Text } from "react-native";
import { PressableProps } from "react-native/Libraries/Components/Pressable/Pressable";

interface Props extends PressableProps {
  children: string;
  color?: "primary" | "secondary" | "tertiary" | "quaternary";
  variant?: "contained" | "outlined" | "text-only";
  className?: string;
}

const CustomButton = ({
  children,
  color = "primary",
  onPress,
  variant = "contained",
  className,
  ...props
}: Props) => {
  const btnColor = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    tertiary: "bg-tertiary",
    quaternary: "bg-quaternary",
  }[color];

  const btnTextColor = {
    primary: "text-primary",
    secondary: "text-secondary",
    tertiary: "text-tertiary",
    quaternary: "text-quaternary",
  }[color];

  if (variant === "text-only") {
    return (
      <Pressable
        onPress={onPress}
        className={` p-4 active:opacity-90 ${className}`}
        {...props}
      >
        <Text className={` text-center ${btnTextColor} `}>{children}</Text>
      </Pressable>
    );
  }

  return (
    <Pressable
      onPress={onPress}
      className={`p-4 rounded-md ${btnColor} ${className}active:opacity-90`}
      {...props}
    >
      <Text className="text-white text-center">{children}</Text>
    </Pressable>
  );
};

export default CustomButton;
