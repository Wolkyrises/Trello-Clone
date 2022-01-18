import React from 'react'
import { Grid, Tab } from '@mui/material';
import { Header } from './header/Header'
import NavBar from './sideBar/NavBar';
import { TabsRoutes } from './sideBar/TabsConfig';
import TabPanel from './sideBar/TabPanel';
import { Box } from '@mui/system';

const WebSiteHome = () => {

    //gestion des onglets de la sidebar
    const [activeTab, setActiveTab] = React.useState(0);
  
    const handleChange = (event, id) => {
        setActiveTab(id);
    };

    return (
        <div>
            <Header/>
            <Grid container center >
                <Grid md={3} lg={2} xl={1} >
                    <NavBar activeTab={activeTab} handleChange={handleChange}>
                        {
                            TabsRoutes.map( (tab,index) => (

                                <Tab 
                                    label={tab.label} 
                                    id={`vertical-tab-${index}`} 
                                    aria-controls={`vertical-tabpanel-${index}`}
                                />

                            ))
                        }
                    </NavBar>
                </Grid>
                <Grid md={9} lg={10} xl={11} >
                    {/* contenu des onglets */}
                    <div>
                        {
                            TabsRoutes.map( (tab,index) => (

                                <TabPanel activeTab={activeTab} index={index} >
                                    {tab.component}
                                </TabPanel>

                            ))
                        }
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default WebSiteHome
