import React from 'react'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Navbar from '@/components/admin/Navbar'
import Sidebar from '@/components/admin/Sidebar'
import Dashboard from '../components/admin/Dashboard'
import AdminMenu from '@/components/admin/AdminMenu'
import Categories from '@/page/admin/Categories'
import UserList from '../components/user/UserList'
import AddUserForm from '@/components/admin/AddUserForm'
import ProductList from '../components/admin/ProductList'
import ProductForm from '@/components/admin/ProductForm'
import Header from '@/components/user/Header'
import Banner from '@/components/user/Banner'
import Footer from '@/components/user/Footer'
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
      <Header></Header>
      <Banner></Banner>
      <Footer></Footer>
    </div>
  )
}
