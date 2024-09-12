import { Container } from "@mui/material";
import MyCard from "../components/Cards/MyCard";

function Index() {
    return (
        <Container sx={{ mt: '100px', background: 'red' }}>
            <MyCard />
        </Container>
    )
}

export default Index;