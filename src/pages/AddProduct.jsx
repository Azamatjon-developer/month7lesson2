import { Button, DatePicker, Input } from 'antd'
import React, { useState } from 'react'
import SelectCustom from '../components/SelectCustom'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function AddProduct() {
  const navigate = useNavigate()
  const [productName, setProductName] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [productType, setProductType] = useState('')
  const [productdate, setProductDate] = useState('')

  const changeDate = (date, dateString) => {
    setProductDate(date, dateString)
  }

  function handleAddProductSubmit(e) {
    e.preventDefault()
    const data = {
      productName,
      productPrice,
      productType,
      productdate,
    }
    setTimeout(()=> {
      navigate("/")
    },1000)
    
    axios
    .post('http://localhost:3000/products', data)
    .then((res) => {
        toast.success("Your product added")
        console.log(res)
      })
      .catch((err) => {
        toast.error("Error")
      })
  }

  return (
    <>
      <form onSubmit={handleAddProductSubmit}>
        <Toaster position="top-center" reverseOrder={false} />
        <div className="flex items-center justify-between p-5">
          <h2 className="text-[26px] font-semibold ">Add Your Product </h2>
          <Button
            className="!bg-[#ec9509e7] hover:opacity-80 active:shadow-2xl"
            type="primary"
            htmlType="submit"
            size="large"
          >
            {' '}
            Save product
          </Button>
        </div>
        <div className="w-[450px] p-5 space-y-4">
          <Input
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            size="large"
            allowClear
            className="p-2"
            placeholder="Enter your product name"
            name="productName"
            type="text"
          />
          <Input
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            size="large"
            allowClear
            className="p-2"
            placeholder="Enter your product price"
            name="productName"
            type="number"
          />
          <SelectCustom setProductType={setProductType} />
          <DatePicker
            className="w-full p-2"
            size="large"
            onChange={changeDate}
            picker="week"
          />
        </div>
      </form>
    </>
  )
}

export default AddProduct
