import styled from '@emotion/styled';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { SyntheticEvent, useState } from 'react';
import { Container, Grid, IconButton } from '@mui/material';
import SearchIcon from 'public/assets/search.svg'

interface StyledTabProps {
  label: string;
}

const AntTabs = styled(Tabs)(({theme}) => `
  border-bottom: '4px solid #e8e8e8';
  
  .MuiTabs-indicator {
    background-color: ${theme.palette.primary.main};
    height: 4px;
  }
`);

const AntTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    minWidth: 0,
    [theme.breakpoints.up('sm')]: {
      minWidth: 0,
    },
    fontWeight: "bold",
    marginRight: theme.spacing(6),
    textTransform: "uppercase",
    color: "black",
    letterSpacing: 2.56,
    borderBottom: "2px solid rgba(0, 0, 0, 0.16)",
    '&.Mui-selected': {
      color: "black"
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#d1eaff',
    },
  }),
);


const SearchBox = styled(IconButton)(({theme}) => `
  width: 62px;
  height: 62px;
  background-color: ${theme.palette.primary.main};
  border-radius: 0;
  margin-right: 40px;
  &:hover{
    background-color: ${theme.palette.primary.main};
  }
  svg{
    fill: white;
    width: 26px;
    height: 26px;
  }
`)

const TabsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 120px;
`

const TabsNav = () => {

  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container>
      <TabsWrap>
        <SearchBox aria-label="search" color="primary">
          <SearchIcon />
        </SearchBox>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example" variant="scrollable" scrollButtons={false}>
          <AntTab label="Všechny" />
          <AntTab label="práce v OFFICE" />
          <AntTab label="pozice na SKLADu" />
          <AntTab label="DACH ODdělení" />
          <AntTab label="StáŽě" />
        </AntTabs>
      </TabsWrap>
    </Container>
  )
}

export default TabsNav