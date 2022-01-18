import * as React from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function TabPanel(props) {
  const { children, activeTab, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={activeTab !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {activeTab === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}




