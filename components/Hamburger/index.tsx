import styled from "@emotion/styled"
import { FC } from "react";

interface IHamburger {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Hamburger: FC<IHamburger> = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

const StyledBurger = styled.button<{open: boolean}>(({open}) => `
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 24px;
  height: 16px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 24px;
    height: 2px;
    background: black;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 5px;

    :first-child {
      transform: ${open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${open ? '0' : '1'};
      transform: ${open ? 'translateX(10px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`)

export default Hamburger

// const useOnClickOutside = (ref, handler) => {
//   React.useEffect(() => {
//     const listener = event => {
//       if (!ref.current || ref.current.contains(event.target)) {
//         return;
//       }
//       handler(event);
//     };
//     document.addEventListener('mousedown', listener);

//     return () => {
//       document.removeEventListener('mousedown', listener);
//     };
//   },
//   [ref, handler],
//   );
// };