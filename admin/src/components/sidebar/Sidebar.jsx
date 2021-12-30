import "./sidebar.css"
import {Link} from "react-router-dom"
import LineStyleOutlinedIcon from '@mui/icons-material/LineStyleOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import DynamicFeedOutlinedIcon from '@mui/icons-material/DynamicFeedOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard 1</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <LineStyleOutlinedIcon className="sidebarIcon"/>
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <TimelineOutlinedIcon className="sidebarIcon"/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUpOutlinedIcon className="sidebarIcon"/>
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className="link">
                        <li className="sidebarListItem">
                            <PermIdentityOutlinedIcon className="sidebarIcon"/>
                            Users
                        </li>
                        </Link>
                        <Link to="/products" className="link">
                        <li className="sidebarListItem">
                            <StorefrontOutlinedIcon className="sidebarIcon"/>
                            Products
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                            <AttachMoneyOutlinedIcon className="sidebarIcon"/>
                            Transactions
                        </li>
                        <li className="sidebarListItem">
                            <BarChartOutlinedIcon className="sidebarIcon"/>
                            Reports
                        </li>
                    </ul>
                </div> 
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <EmailOutlinedIcon className="sidebarIcon"/>
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeedOutlinedIcon className="sidebarIcon"/>
                            Feedbacks
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutlineOutlinedIcon className="sidebarIcon"/>
                            Messages
                        </li>
                    </ul>
                </div> 
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <WorkOutlineOutlinedIcon className="sidebarIcon"/>
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <AnalyticsOutlinedIcon className="sidebarIcon"/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <ReportGmailerrorredOutlinedIcon className="sidebarIcon"/>
                            Reports
                        </li>
                    </ul>
                </div> 
            </div>
        </div>
    )
}

export default Sidebar
