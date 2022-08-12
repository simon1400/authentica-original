
import { FC, SyntheticEvent, useState } from 'react';
import { Container } from '@mui/material';
import { AntTab, AntTabs, TabsWrap } from './styled';
import { useTranslation } from 'next-i18next';

interface ITabsNav {
  data: any[];
  handle: (slug: string) => void
}

const TabsNav: FC<ITabsNav> = ({
  data,
  handle
}) => {

  const { t } = useTranslation("common")
  
  const [value, setValue] = useState(0);
  
  const handleChange = (e: SyntheticEvent, newValue: number) => {
    setValue(newValue);
    if(newValue > 0) {
      handle(data[newValue - 1].attributes.slug)
    }else{
      handle('all')
    }
  };

  return (
    <Container>
      <TabsWrap>
        <AntTabs value={value} onChange={handleChange} aria-label="Ant example" variant="scrollable" scrollButtons={false}>
          <AntTab label={t("all")} />
          {data.map((item, index) => <AntTab key={index} label={item.attributes.title} />)}
        </AntTabs>
      </TabsWrap>
    </Container>
  )
}

export default TabsNav