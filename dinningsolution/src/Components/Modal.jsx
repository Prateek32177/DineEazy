import  React,{useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Confirmation from './PaidSuccesfully';
import { modalStyle } from './StyleObject/Styles';

export default function BasicModal(props) {
   
    
  const [open, setOpen] = useState(true);
//   setOpen(props.open);
  const handleClose = () => setOpen(false);

  const [openConfirm, setOpenConfirm] = React.useState(false);
  const handleConfirmOpen = () => setOpenConfirm(true);
  const handleConfirmClose = () => setOpenConfirm(false);


  return (
    <div>
     
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Confirmation/>
          {/* <Button onClick={handleConfirmOpen} variant="outlined">Confirm</Button> */}
        </Box>
      </Modal>
    </div>
  );
}
