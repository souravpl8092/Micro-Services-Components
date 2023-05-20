import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  Center,
  VStack,
  useToast,
  Select,
  FormLabel
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

// AddUser Component
const AddUser = () => {
  // This component renders a user registration form where users can enter their name, email, gender, and status.
  const toast = useToast();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  /* When the form is submitted, the data is sent to a server for user registration. The server response is 
  handled, and appropriate success, warning, or error messages are displayed using the Chakra UI toast component. */
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (name !== "" && email !== "" && gender !== "" && status !== "") {
        const payload = {
          name,
          email,
          gender,
          status,
          id: Math.round(Math.random() * Date.now() * 10000000)
        };

        const response = await fetch(
          "https://fantastic-blue-cobra.cyclic.app/post/user",
          {
            method: "POST",
            body: JSON.stringify(payload),
            headers: { "Content-Type": "application/json" }
          }
        );

        if (response.status === 201) {
          setLoading(false);
          toast({
            title: "User Register Successfully",
            status: "success",
            duration: 1000,
            isClosable: true,
            position: "bottom"
          });
          setTimeout(() => {
            navigate("/");
          }, 1000);
        } else {
          setLoading(false);
          const { message } = await response.json();
          console.log(message);
        }
      } else {
        setLoading(false);
        toast({
          title: "Please fill all the field",
          status: "warning",
          duration: 1000,
          isClosable: true,
          position: "bottom"
        });
      }
    } catch (error) {
      setLoading(false);
      console.log("An error occurred. Please try again later.");
      toast({
        title: "An error occurred. Please try again",
        status: "error",
        duration: 1000,
        isClosable: true,
        position: "bottom"
      });
    }
  };

  return (
    <Box bg="gray.200" minH="710px">
      <br />
      <br />
      <Center>
        <VStack
          w={{ lg: "650px", md: "650px", sm: "90%", base: "95%" }}
          mb={{ lg: "0", md: "0", sm: "4", base: "4" }}
          borderRadius="xl"
          boxShadow="dark-lg"
          p="10"
          bg="whiteAlpha.900"
        >
          <Heading fontSize="30px">User Registration Form</Heading>
          <br />
          <br />
          <FormControl>
            <FormLabel fontSize="16px" h="25px">
              Name
            </FormLabel>
            <Input
              type="text"
              size="lg"
              fontSize="16px"
              h="40px"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              bg="whiteAlpha.900"
            />
          </FormControl>
          <br />
          <FormControl>
            <FormLabel fontSize="16px" h="25px">
              Email
            </FormLabel>
            <Input
              type="text"
              size="lg"
              fontSize="16px"
              h="40px"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              bg="whiteAlpha.900"
            />
          </FormControl>
          <br />
          <FormControl>
            <FormLabel fontSize="16px" h="25px">
              Gender
            </FormLabel>
            <Select
              placeholder="Choose Gender"
              onChange={(e) => setGender(e.target.value)}
              value={gender}
              size="lg"
              fontSize="16px"
              h="40px"
              bg="whiteAlpha.900"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Select>
          </FormControl>
          <br />
          <FormControl>
            <FormLabel fontSize="16px" h="25px">
              Status
            </FormLabel>
            <Select
              placeholder="Choose Status"
              onChange={(e) => setStatus(e.target.value)}
              value={status}
              size="lg"
              fontSize="16px"
              h="40px"
              bg="whiteAlpha.900"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </Select>
          </FormControl>
          <br />
          <br />
          {loading ? (
            <Button
              isLoading
              loadingText="Submitting"
              colorScheme="blue"
              fontSize="20px"
              py="4"
              w="100%"
              borderRadius="lg"
              variant="outline"
            >
              Submit
            </Button>
          ) : (
            <Button
              colorScheme="blue"
              fontSize="20px"
              py="4"
              w="100%"
              borderRadius="lg"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          )}

          <br />
        </VStack>
      </Center>
      <br />
    </Box>
  );
};

export default AddUser;
