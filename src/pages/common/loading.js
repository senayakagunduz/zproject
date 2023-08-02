import { Spinner } from "react-bootstrap";
import "./loading.scss";
import logo from "../../assests/img/logo.png"

const Loading = (props) => {
    const styles = {
        width: props.width,
        height: props.height,
    };

    return (
        <div className="loading " style={styles}>
            <Spinner animation="border" />
            <img src={logo} alt="Looding..."/>
        </div>
    );
};

export default Loading;
