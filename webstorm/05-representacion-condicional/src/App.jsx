import './App.css'
import AdminPanel from "./components/AdminPanel.jsx";
import LoginForm from "./components/LoginForm.jsx";

const IsLoggedIn = false;
function App() {
    let content;

    // if (IsLoggedIn){
    //     content = <AdminPanel></AdminPanel>;
    // }
    // else{
    //     content = <LoginForm></LoginForm>
    // }
    //
    content = IsLoggedIn ? (<AdminPanel/>) : (<LoginForm/>)

    // content = IsLoggedIn && <AdminPanel/>

return(
    <>
        {content}
    </>
)
}

export default App;
