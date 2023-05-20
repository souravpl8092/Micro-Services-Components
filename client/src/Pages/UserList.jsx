import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Heading,
  Button,
  Text,
} from "@chakra-ui/react";

// UserList Component
const UserList = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  /*  This component displays a list of users in a table format. It fetches the user data 
  from a server API and populates the table. */

  // The component handles loading and error states and provides navigation to edit individual users.
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://fantastic-blue-cobra.cyclic.app/get/user"
      );
      const postData = await response.json();
      setData(postData);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box bg="gray.200" minH="710px">
      <br />
      {isLoading ? (
        <Heading
          as="h1"
          fontSize="4xl"
          fontFamily="cursive"
          textAlign="center"
          minH="500px"
        >
          Loading...
        </Heading>
      ) : data.length === 0 ? (
        <Heading
          as="h1"
          fontSize="4xl"
          color="gray"
          textAlign="center"
          minH="540px"
        >
          No Data found
        </Heading>
      ) : (
        <Box>
          <Text
            w="90%"
            m="auto"
            fontSize={{ lg: "2xl", sm: "xl", base: "xl" }}
            fontWeight="bold"
            color="whiteAlpha.900"
            bg="#329c92"
            p="2"
          >
            Users List
          </Text>
          <TableContainer w="90%" m="auto" bg="whiteAlpha.900">
            <Table variant="striped" colorScheme="teal">
              <Thead>
                <Tr>
                  <Th fontSize="15px">S.NO</Th>
                  <Th fontSize="15px">ID</Th>
                  <Th fontSize="15px">Name</Th>
                  <Th fontSize="15px">Email</Th>
                  <Th fontSize="15px">Gender</Th>
                  <Th fontSize="15px">Status</Th>
                  <Th fontSize="15px">Edit</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.map((el, i) => (
                  <Tr key={i}>
                    <Td fontSize="15px">{i + 1}</Td>
                    <Td fontSize="15px">{el._id}</Td>
                    <Td fontSize="15px">{el.name}</Td>
                    <Td fontSize="15px">{el.email}</Td>
                    <Td fontSize="15px" textTransform="capitalize">
                      {el.gender}
                    </Td>
                    <Td fontSize="15px" textTransform="capitalize">
                      {el.status}
                    </Td>
                    <Td>
                      <Button
                        colorScheme="blue"
                        fontSize="15px"
                        onClick={() => navigate(`/edituser/${el._id}`)}
                      >
                        Edit
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      )}
      <br />
    </Box>
  );
};

export default UserList;
