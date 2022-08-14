import { FC } from "react";
import { BurgerWrap, StyledBurger } from "./styled";

interface IHamburger {
  open: boolean;
  setOpen: (open: boolean) => void;
  background: string;
}

const Hamburger: FC<IHamburger> = ({ open, setOpen, background }) => {
  return (
    <BurgerWrap menu={open} onClick={() => setOpen(!open)}>
      <span>Menu</span>
      <StyledBurger background={background} open={open}>
        <div />
        <div />
        <div />
      </StyledBurger>
    </BurgerWrap>
  )
}



export default Hamburger