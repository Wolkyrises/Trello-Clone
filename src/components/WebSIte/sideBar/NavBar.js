import Box from "@mui/material/Box";
import React from "react";
import { makeStyles } from '@mui/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const useStyles = makeStyles({
    root: {
        color: 'white',
        backgroundColor : '#056CF2'
    }
});

const height = window.innerHeight - 65;

function NavBar({ activeTab, handleChange, children }) {

    // const [activeTab, setActiveTab] = React.useState(0);

    // const handleChange = (event, id) => {
    //     setActiveTab(id);
    // };
    const classes = useStyles();
    return (
        <Box
<<<<<<< HEAD
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
=======
            className={classes.root}
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height :height}}
        >
            <Tabs
                className={classes.tab}
                orientation="vertical"
                value={activeTab}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                {children}
            </Tabs>
        </Box>
>>>>>>> 9638ca73bb67c90ad4cdba3b8437387a047919fb
    )
}
export default NavBar;
