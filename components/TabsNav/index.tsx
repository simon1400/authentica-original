
import { FC, SyntheticEvent, useState } from 'react';
import { Container } from '@mui/material';
import { AntTab, AntTabs, TabsWrap } from './styled';

interface ITabsNav {
  data: any[]
}

const TabsNav: FC<ITabsNav> = ({
  data
}) => {
  
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container>
      <TabsWrap>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example" variant="scrollable" scrollButtons={false}>
          <AntTab label="Všechny" />
          {data.map((item, index) => <AntTab key={index} label={item.attributes.title} />)}
        </AntTabs>
      </TabsWrap>
    </Container>
  )
}

export default TabsNav