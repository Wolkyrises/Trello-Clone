
import React from "react";
import {Box,Tabs,Tab} from "@mui/material/";


function NavBar({activeTab,handleChange,children} ) {


    return(
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '100vh' }}
        >
         <Tabs
          orientation="vertical"
          variant="scrollable"
          value={activeTab}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          {children}
        </Tabs>
      </Box>
    )
}
export default NavBar;
