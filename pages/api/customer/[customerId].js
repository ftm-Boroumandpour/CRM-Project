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

    if(req.method ==="GET"){
        const id= req.query.customerId
        
        try {
            const customer = await Customer.findOne({_id : id})

            res.status(200).json({
                status:"success",
                data :customer
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
               status:"failed",
               message:"Error in fetching data from DB"
             })
        }
    }
} 