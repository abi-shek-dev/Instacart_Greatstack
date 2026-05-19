import { Outlet } from "react-router-dom"

const AppLayout = () => {
  return (
    <>
      <p>Banner-Hulk</p>
      <p>Navbar</p>
      <main className="min-h-screen">
        <Outlet />
      </main>
      <p>Footer</p>
      <p>CartSideBar</p>
    </>
  )
}

export default AppLayout