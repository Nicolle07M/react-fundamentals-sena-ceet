import './App.css'

const user = {
    name: 'Andrew Garflield',
    imageUrl: "https://cinefilosoficial.com/wp-content/uploads/2021/12/Andrew-Garfield-argentina.jpeg",
    imageSize: 150,
}

function App() {
return (
    <>
        <h1>{user.name}</h1>

        <img
            className="avatar"
            src={user.imageUrl}
            alt={'Photo of' + user.name}
            style={{
                width: user.imageSize,
                height: user.imageSize
            }}
        />
    </>
)
}
export default App
