import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar';
import Footer from '../Fotter';
import './index.scss';

const Layout = () => {
    return (
        <div className='layout'>
            <Sidebar/>
            <div className='App'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )

}

export default Layout;