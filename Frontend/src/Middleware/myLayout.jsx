import MyFooter from "../components/Public/footer";
import NavbarCom from "../components/Public/navbar";

const MyLayout = ({ children }) => {
    return <>
        <NavbarCom></NavbarCom>
        {children}
        <MyFooter></MyFooter>
    </>
}

export default MyLayout;