import { useMediaQuery } from "@mui/material";
import { Symbol } from "./styles";

const SymbolSVG = () => {

  const media = useMediaQuery("(max-width: 720px)")
  const mediaXS = useMediaQuery("(min-width: 900px)")

  if(mediaXS) {
    return (
      <Symbol homepage={false}>
        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 925 1080" style={{position: "absolute"}}>
          <defs>
            <clipPath id="mask">
              <path id="b" d="M376.41,0L.76,1080H194.84l73.57-223.83h389.74l73.57,223.83h192.52L548.59,0h-172.17Zm-57.91,699.65l144-436.7,144,436.7H318.5Z"/>
            </clipPath>
          </defs>
          <use fill="#000" filter="url(#prefix__b)" xlinkHref="#prefix__a"/>
  
          <foreignObject clipPath="url(#mask)">
            <video width="auto" height="100%" autoPlay muted loop>
              {media && <source src="/assets/video-hq.mp4" type="video/mp4" />}
              {!media && <source src="/assets/video-lq.mp4" type="video/mp4" />}
            </video>
            <div></div>
          </foreignObject>
        </svg>
      </Symbol>
    )
  }

  return <></>
}



export default SymbolSVG