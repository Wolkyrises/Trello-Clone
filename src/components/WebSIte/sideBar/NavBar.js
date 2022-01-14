import Box from "@mui/material/Box";
import React from "react"
import ContentTabs from "./ContentTabs"
import VerticalTabs from "./VerticalTabs"

function NavBar() {

    const [activeTab, setActiveTab] = React.useState(0);
  
    const handleChange = (event, id) => {
        setActiveTab(id);
    };

    return(
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
        >
        <VerticalTabs activeTab={activeTab} handleChange={handleChange} />
        <ContentTabs activeTab={activeTab} />
      </Box>
    )
}

export default NavBar