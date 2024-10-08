import { Box, Modal } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import CloseIcon from '/public/assets/xmark.svg'
import { useOnMountUnsafe } from "utility/useOnMountUnsafe";
import { useState } from "react";
import { useRouter } from "next/router";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: '1440px',
  height: 'auto',
  outline: 'none',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 0,
};


export const Popup = ({open, handleClose}: {open: boolean, handleClose: (url?: string, lang?: string, e?: any) => void}) => {

  const [url, setUrl] = useState<string>('/blog/nova-vizualni-identita-authentica')
  const [imgUrl, setImgUrl] = useState<string>('/assets/Pop-up-na-web_CZ_2.jpg')
  const [lang, setLang] = useState<string>('cs')
  const router = useRouter()

  useOnMountUnsafe(() => {
    if(router.locale === 'cs') {
      setUrl('/blog/nova-vizualni-identita-authentica')
      setImgUrl('/assets/Pop-up-na-web_CZ_2.jpg')
      setLang('cs')
    }else if(router.locale === 'en'){
      setUrl('/blog/new-visual-identity-authentica')
      setImgUrl('/assets/Pop-up-na-web_EN_2.jpg')
      setLang('en')
    }else if(router.locale === 'de') {
      setUrl('/blog/new-visual-identity-authentica')
      setImgUrl('/assets/Pop-up-na-web_EN_2.jpg')
      setLang('en')
    }
  })

  return (
    <Modal
      open={open}
      onClose={() => handleClose()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <span className={'close-icon-popup'}><CloseIcon onClick={() => handleClose()}/></span>
        <Link href={url} onClick={(e) => handleClose(url, lang, e)} className={'baner-popup'}>
          <Image src={imgUrl} fill alt="Popup Cz" />
        </Link>
      </Box>
    </Modal>
  )
}