import Student from "./components/Students";

function App() {
  return (
    <>
      <Student name="Andre" age={30} isStudent={true}></Student>
      <Student name="Paulo" age={45} isStudent={false}></Student>
      <Student name="Goncalo" age={23} isStudent={false}></Student>
      <Student></Student>
    </>
  );
}

export default App
