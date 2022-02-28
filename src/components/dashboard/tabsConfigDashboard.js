import { SpaceContent } from './spaces/SpaceContent'
import SettingsIcon from '@mui/icons-material/Settings';
import WorkspacesIcon from '@mui/icons-material/Workspaces';


export const TabsRoutesDashboard =[
    
    {
        label:'Espace',
        component: <SpaceContent />,
        icon:<WorkspacesIcon/>
    },
    {
        label:'Paramètres',
        component: <h1>Paramètres</h1>,
        icon: <SettingsIcon/>
    }
    
    
]
