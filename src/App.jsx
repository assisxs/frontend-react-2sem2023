import Header from "./Header"

const App = () => {
  return (
    <>
       <Header />
       <div>
         <Sidebar />
         <Content />
       </div>
       <Footer />
    </>
  )
}

export default App
