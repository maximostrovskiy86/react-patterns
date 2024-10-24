import './App.css';
import Container from "./container";
// import SignUpForm from "./signUpForm";
// import Form from "./signUpForm/formOnClass";
// import SaveMessageInLocalStorageWithLazyInit from "./saveMessageInLocalStorageWithLazyInit";
import SignUpFormWithCustomHook from "./signUpFormWithCustomHook";
import ColorPicker from "./colorPicker/ColorPickerHooks/ColorPicker";
import Counter from "./counter/counterHooks";



function App() {
    return (
        <div className="App">
            <Container>
                {/*<SignUpForm/>*/}
                {/*<SaveMessageInLocalStorageWithLazyInit/>*/}
                {/*<Form/>*/}
                <SignUpFormWithCustomHook/>
                <ColorPicker/>
                <Counter/>
            </Container>
        </div>
    );
}

export default App;
