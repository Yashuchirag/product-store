import { 
    Box, Image, Heading, Button,
    Text, HStack, IconButton, 
    Input, Modal, ModalContent, 
    ModalBody, ModalFooter, AspectRatio,
    ModalHeader, ModalOverlay, ModalCloseButton, 
    useDisclosure, useToast, useColorModeValue,
    Flex
} from "@chakra-ui/react";
import { MdEdit, MdDelete } from "react-icons/md";
import useProductStore from "../store/product";
import { useState } from "react";

const ProductCard = ({product}) => {
    const [updatedProduct, setUpdateProduct] = useState(product);
    const textColor = useColorModeValue("gray.600", "gray.200");
    const bg=useColorModeValue("white", "gray.800");
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {deleteProduct, updateProduct} = useProductStore();

    const handleUpdateProduct = async (pid, updatedProduct) => {
        const {success, message} = await updateProduct(pid, updatedProduct);
        onClose();
        if (!success) {
            toast({
                title: "Error",
                description: message,
                status: "error",
                duration: 5000,
                isClosable: true,
            })
        }
        toast({
            title: "Product Updated Succefully",
            description: message,
            status: "success",
            duration: 5000,
            isClosable: true,
        })
    }
    const handleDeleteProduct = async (pid) => {
        const {success, message} = await deleteProduct(pid);
        
        if (!success) {
            toast({
                title: "Error",
                description: message,
                status: "error",
                duration: 5000,
                isClosable: true,
            })
        }
        toast({
            title: "Success",
            description: message,
            status: "success",
            duration: 5000,
            isClosable: true,
        })

    }
    

    return (
        <Box
        shadow={"md"}
        rounded={"lg"}
        overflow={"hidden"}
        transition={"all 0.2s ease-in-out"}
        _hover={{
            transform: "translateY(-5px)",
            shadow: "lg",
        }}
        bg={bg}
        >
            <Flex justify={"center"} align={"center"}>
                <AspectRatio ratio={4 / 3} boxSize={"250px"}>
                    <Image src={product.image} alt={product.name} objectFit={"cover"} borderRadius={"lg"}/>
                </AspectRatio>
            </Flex>
            <Box p={4}>
                <Heading as="h2" fontSize={"lg"} fontWeight={"bold"} >{product.name}</Heading>

                <Text fontWeight={"bold"} fontSize={"md"} color={textColor} fontStyle={"italic"}>{`Price: $${product.price}`}</Text>

                <Flex justifyContent={"flex-end"}>
                <HStack>
                    <IconButton icon={<MdEdit />} onClick={onOpen} colorScheme="blue" ></IconButton>
                    <IconButton icon={<MdDelete />} onClick={() => handleDeleteProduct(product._id)} colorScheme="red" ></IconButton>
                </HStack>
                </Flex>
            </Box>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay>
                    <ModalContent>
                        <ModalHeader>Update Product</ModalHeader>
                        <ModalCloseButton/>
                        <ModalBody>
                            <Input placeholder="Product Name" name="name" value={updatedProduct.name}
                            onChange={(e) => setUpdateProduct({...updatedProduct, name: e.target.value})}/>
                            <Input placeholder="Price" name="price" type="number" value={updatedProduct.price}
                            onChange={(e) => setUpdateProduct({...updatedProduct, price: e.target.value})}/>
                            <Input placeholder="Image URL" name="image" value={updatedProduct.image}
                            onChange={(e) => setUpdateProduct({...updatedProduct, image: e.target.value})}/>
                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme="blue" onClick={() => handleUpdateProduct(product._id, updatedProduct)}>
                                Update
                            </Button>
                            <Button colorScheme="blue" mr={3} >
                                Close
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </ModalOverlay>
            </Modal>
        </Box>
    )
}

export default ProductCard;
