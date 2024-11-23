import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import states from "../states"
// import list from "../list"
import '../Styles/BasicM.css'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const BasicM = ({onCancle}) => {

  
    const[location,setLocation]=useState('');

    // const[closem,setCloseM]=useState(false);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleClick = () => setOpen(false);


    // const handleclick = () => {
    //     setCloseM(false);
    // }
    return(
        <div>
  <Button className='Open-btn' onClick={handleOpen} variant='contained'>Join Today</Button>
      <Modal
        open={open}
        onClose={handleClose}
        // onCancle={ handleclick}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div className='close' onClick={handleClick}>&times;</div>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           JOIN TODAY
          </Typography>
          
           
         <input placeholder='Name'/>
         <input placeholder='Phone'/>
         <input placeholder='Email'/><br></br>
        <select onChange={(e)=>{setLocation(e.target.value)}} >{
            states.map(state =>{
                return <option>{state}</option>
            } )  }
 </select>
            <br></br>
         <Button variant='contained'>Submit</Button>
         
        </Box>
      </Modal>
        </div>
    )
}
export default BasicM