import Header from '../header/header.jsx';
import { Acme } from "next/font/google";
const inter = Acme({ subsets: ["latin"], weight: '400' });


const Layout = ({children}) => {

    return (
        <>
        <Header />
        <main className={inter.className}>
            {children}
        </main>
        </>
    )
}

export default Layout;