import React from "react";
import { HStack, Text, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { StateOfFilterTasks } from "../../utils/constants";

const Filter = (props) => {
  const { filterValue, setFilterValue } = props
  return (
    <HStack spacing={5}>
      <Text>Filter:</Text>
      <RadioGroup colorScheme="teal" defaultValue={StateOfFilterTasks.ALL} value={filterValue} onChange={setFilterValue}>
        <Stack direction='row' spacing={5}>
          <Radio value={StateOfFilterTasks.ALL}><Text fontSize='sm'>All</Text></Radio>
          <Radio value={StateOfFilterTasks.NOT_DONE}><Text fontSize='sm'>Undone</Text></Radio>
          <Radio value={StateOfFilterTasks.DONE}><Text fontSize='sm'>Done</Text></Radio>
        </Stack>
      </RadioGroup>
    </HStack>
  );
};

export default Filter;
