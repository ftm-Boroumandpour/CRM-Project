import Customer from "../../../models/Customer"
import connectDB from "../../../utils/connectDB"

export default async function handler(req ,res){
    try{
        await connectDB()
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status:"failed",
            message:"Error in connecting to DB"
        })

        return
    }

    if(req.method ==="POST"){
        const data= req.body.data
        
        if(!data.name || !data.lastName || !data.email){
            return res.status(400).json({
                status :"failed", 
                message :"Invalid Data"
            })
        }
        try {
            const customer = await Customer.create(data)

            res.status(201).json({
                status:"success",
                message:" Data Created",
                data :customer
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
               status:"failed",
               message:"Error in storing data in DB"
             })
        }
    }
} 