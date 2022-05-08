import Wrapper from "./Wrapper";
import Header from '../components/UI/Header';
import './Layout.css'

const layout = props => {
    return (
        <Wrapper>
            <Header></Header>
            <main className="content">
                {props.children}
            </main>
        </Wrapper>
    );
}

export default layout;