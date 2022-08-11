import { FC } from "react"
import ModalVideo from "react-modal-video";

interface IVideoModal {
  open: boolean;
  handleClose: () => void;
  data: string;
}

const VideoModal: FC<IVideoModal> = ({
  data,
  open,
  handleClose
}) => {
	return (
		<ModalVideo isOpen={open} videoId="b4GuCOo2sB0" onClose={() => handleClose()} />
	)
}

export default VideoModal