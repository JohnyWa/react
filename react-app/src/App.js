import React from 'react';
// import EventsExample from "./components/events";
// import StateComponent from "./components/state";
import Main from "./components/mainTodoList";
// import Form from "./components_four_lesson/form";
import RegistrationForm from "./components_four_lesson/registrationForm";
{/*TODO: Class && Func component examples*/}
// import ClassComponent from "./components/classComponent";
// import FunctionComponent from "./components/functionComponent";

function App() {
  return (
    <div className="App">
      {/*TODO: Class && Func component examples*/}
      {/*<ClassComponent title="Title" num={5}/>*/}
      {/*<FunctionComponent title="Title" num={5}/>*/}
      {/*TODO: Events*/}
      {/*<EventsExample test={555} />*/}
      {/*TODO: local state & setState*/}
      {/*<StateComponent startValue={5} step={2}/>*/}
      <Main />
      {/*TODO: Form*/}
      {/*<Form />*/}
      {/* TODO: Registration form */}
      {/*<RegistrationForm />*/}
    </div>
  );
}

export default App;