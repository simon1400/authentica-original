import { Box, Modal } from "@mui/material"
import { FC } from "react"

interface IVideoModal {
  open: boolean;
  handleClose: () => void;
  data: string;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "auto",
  height: "80vh",
  bgcolor: 'transparent',
  overflow: "hidden",
};

const VideoModal: FC<IVideoModal> = ({
  data,
  open,
  handleClose
}) => {
  return <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <video height="100%" autoPlay>
        <source src={process.env.APP_API+data} type="video/mp4" />
      </video>
    </Box>
  </Modal>
}

export default VideoModal