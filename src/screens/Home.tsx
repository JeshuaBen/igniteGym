import React, { useState } from "react";
import { Center, HStack, Text, VStack, FlatList, Heading } from "native-base";
import { HomeHeader } from "@components/HomeHeader";
import { Group } from "@components/Group";
import { ExerciseCard } from "@components/ExerciseCard";

export const Home: React.FC = () => {
  const [groups, setGroups] = useState<string[]>([
    "costas",
    "ombros",
    "bíceps",
    "peito",
    "tríceps",
  ]);
  const [exercises, setExercises] = useState<string[]>([
    "Puxada Frontal",
    "Remada Unilateral",
    "Remada Curvada",
    "Bíceps Rosca",
  ]);
  const [groupSelected, setGroupSelected] = useState<string>("costas");

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={groupSelected === item}
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{
          px: 8,
        }}
        my={6}
        maxH={10}
      />

      <VStack flex={1} px={8}>
        <HStack justifyContent="space-between" mb={5}>
          <Heading color="gray.200" fontSize="md">
            Exercícios
          </Heading>

          <Text color="gray.200" fontSize="sm">
            {exercises.length}
          </Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <ExerciseCard />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 20,
          }}
        />
      </VStack>
    </VStack>
  );
};
