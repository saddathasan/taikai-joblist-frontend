import { Input, InputGroup, Button, InputRightElement } from "@chakra-ui/input";

// const handleClick = () => {};

const SearchFilter = () => {
    return (
        <InputGroup size="md">
            <Input
                pr="4.5rem"
                // type={show ? "text" : "password"}
                placeholder="Search here"

            />
            {/* <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm">
                    Search
                </Button>
            </InputRightElement> */}
        </InputGroup>
    );
};

export default SearchFilter;
