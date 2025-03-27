import { Navigate } from "react-router"

 
 
function PublicMiddleware(props){
   
    const token = localStorage.getItem("token")
 
    if(token){
        return <Navigate to={"/"}/>
    }
    return(
        <>
        {props.children}
        </>
    )
 
}
 
export default PublicMiddleware