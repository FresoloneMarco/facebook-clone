import React from 'react'
import SidebarRow from './SidebarRow'
import './Sidebar.css'
import { ExpandMoreOutlined, VideoLibrary, LocalHospital, EmojiFlags, People, Chat, Storefront } from '@material-ui/icons'
import { useStateValue } from './StateProvedier'

function Sidebar() {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className="sidebar">
            <SidebarRow
                src={user.photoURL}
                title={user.displayName} />
            <SidebarRow Icon={LocalHospital} title='COVID-19 Information Center' />
            <SidebarRow Icon={EmojiFlags} title='Pages' />
            <SidebarRow Icon={People} title='Friends' />
            <SidebarRow Icon={Chat} title='Messenger' />
            <SidebarRow Icon={Storefront} title='Marketpalce' />
            <SidebarRow Icon={VideoLibrary} title='Pages' />
            <SidebarRow Icon={ExpandMoreOutlined} title='MarketPlace' />

        </div>
    )
}

export default Sidebar
