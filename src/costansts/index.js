import {translations as translates} from "../utils/config";
import Admin from "../components/admin/Admin";
import Shop from "../components/shop/Shop";

export const PAGE_IDS = {
    ADMIN: 0,
    SHOP : 1
}

export const MENU = [
    {
        Id: PAGE_IDS.ADMIN,
        Name: translates.ADMIN,
        Page: Admin
    },
    {
        Id: PAGE_IDS.SHOP,
        Name: translates.SHOP,
        Page: Shop
    },
]

export const FILTER_BY_LIST = [
    {
        Value: 0,
        Title: translates.REMOVE_FILTER_BY
    },
    {
        Value: 1,
        Title: translates.FILTER_BY_NAME
    },
    {
        Value: 2,
        Title: translates.FILTER_BY_PRICE
    },
    {
        Value: 3,
        Title: translates.FILTER_BY_WEIGHT
    },
    {
        Value: 4,
        Title: translates.FILTER_BY_DATE
    }
]