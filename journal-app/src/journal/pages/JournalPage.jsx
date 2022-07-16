import { Typography,IconButton } from "@mui/material";
import {AddOutlined} from '@mui/icons-material';
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"

const JournalPage = () => {
  return (
    <JournalLayout>
        {/* <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto ipsum impedit dolores consectetur distinctio doloremque error officia, animi, maiores natus perspiciatis labore harum aut exercitationem est. Sunt perspiciatis minima repellendus?</Typography> */}
   
       <NothingSelectedView/>
       {/* <NoteView/> */}

       <IconButton
        size='large'
        sx={{
          color:'white',
          backgroundColor:'error.main',
          ':hover':{backgroundColor:'error.main',opacity:'0.9'},
          position:'fixed',
          right:50,
          bottom:50
        }}
       >
          <AddOutlined sx={{fontSize:30}}/>
       </IconButton>
    </JournalLayout>
  
  )
}

export default JournalPage