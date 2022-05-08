import { Box, Modal } from "@mui/material"
import { FC } from "react"
import { VideoWrap } from "./styled";

interface IVideoModal {
  open: boolean;
  handleClose: () => void;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "60%",
  height: "auto",
  bgcolor: 'transparent',
};

const VideoModal: FC<IVideoModal> = ({
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
      <video width="100%" autoPlay controls>
        <source src="/assets/video.mp4" type="video/mp4" />
      </video>
    </Box>
  </Modal>
}

export default VideoModal