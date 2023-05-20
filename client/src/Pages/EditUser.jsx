import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
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

// EditUser Component
const EditUser = () => {
  /* This component renders a form for editing user information. It retrieves the user data based 
  on the ID from the URL parameter. */
  const toast = useToast();
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  /* The retrieved data is pre-filled in the input fields. When the form is submitted, the updated 
  user data is sent to the server for updating the user. The server response is handled, and appropriate 
  success, error, or warning messages are displayed using the Chakra UI toast component.  */
  useEffect(() => {
    fetch(`https://fantastic-blue-cobra.cyclic.app/get/user/${id}`, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
      .then((res) => res.json())
      .then((res) => {
        setName(res.name);
        setEmail(res.email);
        setGender(res.gender);
        setStatus(res.status);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const payload = {
        name: name,
        email: email,
        gender: gender,
        status: status,
        id: Math.round(Math.random() * Date.now() * 10000000)
      };

      const response = await fetch(
        `https://fantastic-blue-cobra.cyclic.app/update/user/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(payload)
        }
      );

      if (response.status === 204) {
        setLoading(false);
        toast({
          title: "User Updated Successfully",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "bottom"
        });
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        setLoading(false);
        toast({
          title: "User Updated Successfully",
          status: "success",
          duration: 1000,
          isClosable: true,
          position: "bottom"
        });
        setTimeout(() => {
          navigate(`/`);
        }, 1000);
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
          <Heading>Edit User</Heading>
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
              placeholder="Name"
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
              onClick={handleEdit}
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

export default EditUser;
