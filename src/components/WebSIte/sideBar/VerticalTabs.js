import React from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


export default function VerticalTabs({activeTab,handleChange}) {
  
  
    return (
      
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={activeTab}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab label="Accueil" id={`vertical-tab-${0}`} aria-controls={`vertical-tabpanel-${0}`}/>
          <Tab label="Présentation" id={`vertical-tab-${1}`} aria-controls={`vertical-tabpanel-${1}`}/>
          <Tab label="Contact" id={`vertical-tab-${2}`} aria-controls={`vertical-tabpanel-${2}`}/>
          <Tab label="Nos partenaires" id={`vertical-tab-${3}`} aria-controls={`vertical-tabpanel-${3}`} />
        </Tabs>


    );
  }