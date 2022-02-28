import React from 'react';
import Header from './header/Header';
import NavBar from './sideBar/NavBar';
import { TabsRoutes } from './sideBar/TabsConfig'
import { Tab, Grid } from '@mui/material'
import TabPanel from './sideBar/TabPanel';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';


import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/icons-material/Menu';

import Toolbar from '@mui/material/Toolbar';




const drawerWidth = 240;

function WebSiteHome({ window }) {

    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [activeTab, setActiveTab] = React.useState(0);

    const handleChange = (event, id) => {
        setActiveTab(id);
    };

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);

    };



    const drawer = (
        <div >

            <Toolbar />


            <NavBar activeTab={activeTab} handleChange={handleChange}>

                {
                    TabsRoutes.map((tab, index) => (
                        <Tab
                            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                            label={tab.label}
                            id={`vertical-tab-${index}`}
                            aria-controls={`vertical-tabpanel-${index}`}
                        />

                    )

                    )
                }
            </NavBar>



        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1
                }}
            >
                <Header >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                </Header>

                {/* <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <h1>Menu icon</h1>
                    </IconButton>
                    <Typography variant="h2" noWrap component="div">
                        Trello Clone
                    </Typography>
                </Toolbar> */}
            </AppBar>
            <Box
                
                component="nav"
                sx={{ paddingTop: 10  , width: { sm: 0, md: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer

                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', md: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Grid md={11} lg={10} >
                    {/* contenu des onglets */}
                    <div>
                        {
                            TabsRoutes.map((tab, index) => (
                                <TabPanel activeTab={activeTab} index={index} >
                                    {
                                        tab.component
                                    }
                                </TabPanel>

                            )
                            )
                        }
                    </div>
                </Grid>
            </Box>
        </Box>
    );
}


export default WebSiteHome;


