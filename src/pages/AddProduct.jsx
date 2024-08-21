import { Input } from 'antd'
import React from 'react'

function AddProduct() {
  return (
    <>
      <div>
        <h2 className="pt-5 pl-5 text-[26px] font-semibold">Add Your Product </h2>
      </div>
      <form className="w-[450px] p-5">
        <Input
          placeholder="Enter your product name"
          name="productName"
          type=""
        />
      </form>
    </>
  )
}

export default AddProduct
