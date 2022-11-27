import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from "./TabPanel";
import {a11yProps} from "../utils/help";
import {MENU} from "../costansts";
import {useDispatch, useSelector} from "react-redux";
import {changeMenu} from "../slices/menuSlice";
import {useEffect} from "react";

const Home = () => {
    const menuTab = useSelector(state => state.menu);
    const dispatch = useDispatch();
    const [value, setValue] = React.useState(menuTab);

    const handleChange = (event, newValue) => {
        dispatch(changeMenu(newValue));
        setValue(newValue);
    };

    useEffect(() => {
        if(menuTab !== value){
            setValue(menuTab);
        }
    }, [menuTab, changeMenu])

    return (
        <Box sx={{width: '100%'}}>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <Tabs centered value={value} onChange={handleChange} aria-label="basic tabs example">
                    {
                        MENU.map(({Id, Name}) =>
                            <Tab key={`${Id}_${Name}_Tab`} label={Name} {...a11yProps(Id)} />
                        )
                    }
                </Tabs>
            </Box>
            {
                MENU.map(({Id, Page, Name}) =>
                    <TabPanel key={`${Id}_${Name}_TabPanel`} value={value} index={Id}>
                        <Page/>
                    </TabPanel>
                )
            }
        </Box>
    );
}
export default Home;