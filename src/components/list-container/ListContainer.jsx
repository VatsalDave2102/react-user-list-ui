import { Container } from "react-bootstrap"
import "./ListContainer.css"
import UserTable from "../table/UserTable"
const ListContainer = () => {
  return (
    <Container fluid="lg" className="list-container p-3 my-5" >
        <UserTable/>
    </Container>
  )
}

export default ListContainer