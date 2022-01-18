import React from "react"
import { Header } from "./header/Header"
import NavBar from "./sideBar/NavBar"
import TabPanel from "./sideBar/TabPanel"
import { TabsRoutes } from "./sideBar/TabsConfig"
import {Grid, Tab} from "@mui/material"

const WebSiteHome = () => {

    // gestion des onglets de la sidebar
    const [activeTab, setActiveTab] = React.useState(0);
  
    const handleChange = (event, id) => {
        setActiveTab(id);
    }

    return (
        <div>
            <Header />
            <Grid container center>
                <Grid lg={3} md={2} xl={1}>
                    <NavBar activeTab={activeTab} handleChange={handleChange}>
                        {
                            TabsRoutes.map( (tab, index) => (

                                <Tab 
                                    label={tab.label} 
                                    id={`vertical-tab-${index}`} 
                                    aria-controls={`vertical-tabpanel-${index}`}
                                />

                            ))
                        }
                    </NavBar>
                </Grid>
                <Grid lg={9} md={10} xl={11}>
                    {/* Contenu des onglets */}
                    <div>
                        {
                            TabsRoutes.map( (tab, index) => (
                                
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