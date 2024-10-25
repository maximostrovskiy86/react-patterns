import './App.css';
import Container from "./container";
// import SignUpForm from "./signUpForm";
// import Form from "./signUpForm/formOnClass";
// import SaveMessageInLocalStorageWithLazyInit from "./saveMessageInLocalStorageWithLazyInit";
import SignUpFormWithCustomHook from "./signUpFormWithCustomHook";
import ColorPicker from "./colorPicker/ColorPickerHooks/ColorPicker";
import Counter from "./counter/counterHooks";
import ClockWithUseRefHook from "./clockWithUseRefHook";
import FilterWithUseMemoHook from "./filterWithUseMemoHook";


function App() {
    return (
        <Container>
            {/*<SignUpForm/>*/}
            {/*<SaveMessageInLocalStorageWithLazyInit/>*/}
            {/*<Form/>*/}
            <SignUpFormWithCustomHook/>
            <ColorPicker/>
            <Counter/>
            <ClockWithUseRefHook/>
            <FilterWithUseMemoHook/>
        </Container>
    );
}

export default App;
