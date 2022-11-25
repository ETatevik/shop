import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {translations} from "../utils/config";
import {Admin} from "./admin/Admin";
import {Shop} from "./shop/Shop";
import TabPanel from "./TabPanel";
import {a11yProps} from "../utils/help";

const Home = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs centered value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label={translations.ADMIN} {...a11yProps(0)} />
                    <Tab label={translations.SHOP} {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Admin/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Shop/>
            </TabPanel>
        </Box>
    );
}
export default Home;