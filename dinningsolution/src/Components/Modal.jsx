import  React,{useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Confirmation from './PaidSuccesfully';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 200,
  bgcolor: 'background.paper',
  borderRadius:"15px",
  boxShadow: 24,
  p: 4,
};

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
        <Box sx={style}>
          <Confirmation/>
          {/* <Button onClick={handleConfirmOpen} variant="outlined">Confirm</Button> */}
        </Box>
      </Modal>
    </div>
  );
}
