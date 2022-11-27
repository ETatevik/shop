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