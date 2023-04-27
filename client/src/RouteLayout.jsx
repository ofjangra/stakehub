import { Routes, Route } from "react-router"
import CompletedOrders from "./pages/CompletedOrder"
import PendingOrders from "./pages/PendingOrder"
import CreateOrder from "./pages/CreateEntry"
const RouteLayout = () =>{
    return(
        <Routes>
            <Route path="/" element = {<PendingOrders/>}/>
            <Route path = "/completed" element = {<CompletedOrders/>}/>
            <Route path = "/create" element = {<CreateOrder/>}/>
        </Routes>
    )
}

export default RouteLayout