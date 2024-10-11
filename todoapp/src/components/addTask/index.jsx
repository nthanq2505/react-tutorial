import {
  Input,
  InputGroup,
  InputLeftElement,
  HStack,
  Button,
} from "@chakra-ui/react";
import { FiPlusSquare } from "react-icons/fi";
import React from "react";

const AddTask = () => {
  return (
    <HStack justify="space-between" w="100%" pl="16px" pr="24px">
      <InputGroup >
        <InputLeftElement>
          <FiPlusSquare color="#D1D5DB" size="24px"/>
        </InputLeftElement>
        <Input variant='unstyle' placeholder="Add a new task..." ></Input>
      </InputGroup>
      <HStack gap="16px">
        <Button colorScheme="teal" size="sm">
          Add new
        </Button>
        <Button colorScheme="red" size="sm">
          Cancel
        </Button>
      </HStack>
    </HStack>
  );
};

export default AddTask;
