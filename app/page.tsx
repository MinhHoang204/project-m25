import React from 'react'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Dashboard from '@/components/Dashboard'
import AdminMenu from '@/components/AdminMenu'
import Categories from '@/page/admin/Categories'
import UserList from '@/components/UserList'
import AddUserForm from '@/components/AddUserForm'
import ProductList from '@/components/ProductList'
import ProductForm from '@/components/ProductForm'
export default function page() {
  return (
    <div>page
      <Login></Login>
      <Register></Register>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Dashboard></Dashboard>
      <AdminMenu></AdminMenu>
      <Categories></Categories>
      <UserList></UserList>
      <AddUserForm></AddUserForm>
      <ProductList></ProductList>
      <ProductForm></ProductForm>
    </div>
  )
}
