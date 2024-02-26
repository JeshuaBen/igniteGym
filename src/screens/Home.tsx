import React from "react";
import { Center, Text, VStack } from "native-base";
import { HomeHeader } from "@components/HomeHeader";
import { MaterialIcons } from "@expo/vector-icons";

export const Home: React.FC = () => {
  return (
    <VStack flex={1}>
      <HomeHeader />
    </VStack>
  );
};
