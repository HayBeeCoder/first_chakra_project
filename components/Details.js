import { Heading, VStack, Text, SimpleGrid, FormControl, GridItem, FormLabel, Input, Select, Checkbox, Button } from "@chakra-ui/react"
import { Global } from "@emotion/react"


const Details = () => {
  return (

    <VStack
      h="full"
      w="full"
      p={5}
      spacing={10}
      alignItems="flex-start"
    // bg="red.600"
    >

      <VStack spacing={3} alignItems="flex-start">

        <Heading size="xl">
          Your Details
        </Heading>
        <Text>If you already have an account, click here</Text>
      </VStack>
      <SimpleGrid column={2} rowGap={6} columnGap={3}>



        <GridItem colSpan={1}>

          <FormControl>
            <FormLabel>
              First Name
            </FormLabel>
            <Input placeholder="John" />
          </FormControl>

        </GridItem>

        <GridItem colStart={2} >
          <FormControl>
            <FormLabel>
              Last Name
            </FormLabel>
            <Input placeholder="Doe" />
          </FormControl>
        </GridItem>

        <GridItem colSpan={2} >
          <FormControl>
            <FormLabel>
              Address
            </FormLabel>
            <Input placeholder="blvd. County Austin Street 67" />
          </FormControl>
        </GridItem>

        <GridItem colSpan={1} >
          <FormControl>
            <FormLabel>
              City
            </FormLabel>
            <Input placeholder="San Francisco" />
          </FormControl>
        </GridItem>

        <GridItem colStart={2} >
          <FormControl>
            <FormLabel>
              Country
            </FormLabel>
            {/* <Input placeholder="San Francisco" /> */}
            <Select>
              <option value="usa" >United States Of America</option>
              <option value="uae" >United Arab Emirates</option>
              <option value="de" >Denmark</option>
              <option value="ge" >Germany</option>
            </Select>
          </FormControl>
        </GridItem>

        <GridItem colSpan={2}>
          <Checkbox>
            Ship to billing address
          </Checkbox>
        </GridItem>

        <GridItem colSpan={2}>
          <Button size="lg" w="full">CheckOut</Button>
        </GridItem>

      </SimpleGrid>
    </VStack>
  )
}

export default Details