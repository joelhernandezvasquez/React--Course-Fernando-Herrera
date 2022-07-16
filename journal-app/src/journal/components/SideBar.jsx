import { TurnedInNot } from "@mui/icons-material"
import {Grid, Box,Drawer, Toolbar, Typography,Divider,List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"


export const SideBar = ({drawerWidth = 240}) => {
  return (
    <Box
     component ='nav'
     sx={{width:{sm:drawerWidth}, flexShrink:{sm:0}}}
    >

     <Drawer
      variant="permanent" // temporary
      open
      sx={{
        display:{xs:'block'},
             '& .MuiDrawer-paper':{boxSizing:'border-box',width:drawerWidth}
        }}
     >
        <Toolbar>
            <Typography variant="h6" noWrap component="div">Joel Hernandez</Typography>
        </Toolbar> 
        <Divider/>

        <List>
          {
            ['January','February','March','April'].map(text=>(
              <ListItem key={text} disablePadding>
                <ListItemButton>
                   <ListItemIcon>
                    <TurnedInNot/> 
                   </ListItemIcon>
                  <Grid container>
                    <ListItemText primary={text} />
                    <ListItemText secondary={'Exercitation cillum irrre elit codisijeen kdnfhe  djfs'} />
                   
                  </Grid>
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>
    </Drawer>   
        
    </Box>
  )
}
