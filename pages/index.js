import HomePage from "../components/templates/HomePage";

import connectDB from "../utils/connectDB"
import Customers from "../models/Customer"

export default function Index({customers}) {
  // console.log(customers)
  return (
    <HomePage customers={customers} />
  )
}

export async function getServerSideProps() {
  try{
    await connectDB()
    const customers = await Customers.find()
    return {
      props :{
        customers : JSON.parse(JSON.stringify(customers))
      }
    }
  }catch(err){
    return {
      notFound :true
    }
  }
  
}
