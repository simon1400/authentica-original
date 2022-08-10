import { FC } from "react";
import { BurgerWrap, StyledBurger } from "./styled";

interface IHamburger {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Hamburger: FC<IHamburger> = ({ open, setOpen }) => {
  return (
    <BurgerWrap menu={open} onClick={() => setOpen(!open)}>
      <span>Menu</span>
      <StyledBurger open={open}>
        <div />
        <div />
        <div />
      </StyledBurger>
    </BurgerWrap>
  )
}



export default Hamburger