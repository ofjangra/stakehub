import mongoose from 'mongoose'


const ordersSchema = new mongoose.Schema({
    order_id: String,
    order_type:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
},{
    timestamps:true
})

const completedOrdersSchema = new mongoose.Schema({
    order_id: String,
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
},{timestamps:true})


export const Order =  mongoose.model('Order', ordersSchema)

export const CompletedOrder = mongoose.model('CompletedOrder', completedOrdersSchema)

// export default Order