import { Outlet } from 'react-router'

export default function AdminLayout() {
  return (
    <div>
      <h1>this is AdminLayout</h1>
      <Outlet></Outlet>
    </div>
  )
}
