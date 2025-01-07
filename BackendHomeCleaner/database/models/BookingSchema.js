import mongoose from "mongoose";
import validator from "validator";

const BookingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        validate(mail) {
            if (!validator.isEmail(mail)) {
                throw new Error("Invalid email");
            }
        }
    }, 
    phone: {
        type: String,
        required: true,
        min: 10
    }, 
    cleaningType: {
        type: String,
        required: true,
    },
    bookingDate: {
        type: Date,
        required: true,

    },
    message: {
        type: String,
    }
})


const Booking = mongoose.model('Booking', BookingSchema);
export default Booking;