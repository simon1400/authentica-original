import styled from "@emotion/styled";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

interface StyledTabProps {
  label: string;
}

export const AntTabs = styled(Tabs)(({theme}) => `
  border-bottom: '4px solid #e8e8e810';
  .MuiTabs-indicator {
    background-color: ${theme.palette.primary.main};
    height: 4px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  }
`);

export const AntTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    minWidth: 0,
    [theme.breakpoints.up('sm')]: {
      minWidth: 0,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: "13px",
      marginRight: "10px"
    },
    fontWeight: "bold",
    marginRight: theme.spacing(6),
    textTransform: "uppercase",
    color: "black",
    letterSpacing: 2.56,
    borderBottom: "2px solid rgba(0, 0, 0, 0.16)",
    '&.Mui-selected': {
      color: "black",
      
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#d1eaff',
    },

  }),
);

export const TabsWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 120px;
  @media(max-width: 640px) {
    margin-bottom: 55px;
  }
`