import './App.css';
import Container from "./container";
import SignUpForm from "./signUpForm";
// import Form from "./signUpForm/formOnClass";
import ColorPicker from "./colorPicker/ColorPickerHooks/ColorPicker";
import Counter from "./counter/counterHooks";


function App() {
    return (
        <div className="App">
            <Container>
                <SignUpForm/>
                {/*<Form/>*/}
                <ColorPicker />
                <Counter/>
            </Container>
        </div>
    );
}

export default App;
