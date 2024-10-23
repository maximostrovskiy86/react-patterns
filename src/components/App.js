import './App.css';
import Container from "./container";
// import SignUpForm from "./signUpForm";
// import Form from "./signUpForm/formOnClass";
import ColorPicker from "./colorPicker/ColorPickerHooks/ColorPicker";
import Counter from "./counter/counterHooks";
import SaveMessageInLocalStorageWithLazyInit from "./saveMessageInLocalStorageWithLazyInit";


function App() {
    return (
        <div className="App">
            <Container>
                {/*<SignUpForm/>*/}
                <SaveMessageInLocalStorageWithLazyInit />
                {/*<Form/>*/}
                <ColorPicker />
                <Counter/>
            </Container>
        </div>
    );
}

export default App;
