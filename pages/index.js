import Navbar from "../src/components/Navbar";
import SearchFilter from "../src/components/JobFilter";
import JobFeed from "../src/components/JobFeed";

import { Grid, GridItem } from "@chakra-ui/react";
  
  
const Home = () => {
    return (
        <>
            
                <Navbar />
                <SearchFilter />
                <JobFeed />
           
        </>
    );
};

export default Home;
