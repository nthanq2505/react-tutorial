import React from "react";
import { Box, VStack } from "@chakra-ui/react";
import Header from "../../components/header/index";
import TaskManager from "../../components/taskManager";

const HomePage = () => {
  return (
    <Box
      w="100%"
      h="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <VStack
        w="960px"
        h="85%"
        bgColor="white"
        borderRadius="24px"
        px="60px"
        py="40px"
        gap="20px"
      >
        <Header />
        <TaskManager />
      </VStack>
    </Box>
  );
};

export default HomePage;
