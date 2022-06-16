import { AspectRatio, Button, Heading, HStack, Text, VStack } from "@chakra-ui/react"


const Cart = () => {
    return (

        <VStack
            h="full"
            w="full"
            p={5}
            spacing={10}
            alignItems="flex-start"
            bg="gray.100"
        >
            <VStack alignItems="flex-start">

                <Heading size="xl" >Your Cart</Heading>
                <Text>
                    If the price is too hard on your eyes
                    <pre>
                    </pre>

                    <Button variant="link" colorScheme="black">
                        try this theme switcher
                    </Button>
                </Text>
            </VStack>
            <HStack alignItems="center">
            <AspectRatio ratio={1} w={24}>

            </AspectRatio>
            </HStack>

        </VStack>
    )
}

export default Cart