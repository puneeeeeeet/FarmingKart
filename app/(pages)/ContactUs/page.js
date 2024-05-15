import Link from "next/link";

export default function ContactUs(){
    return (
        <div>
            <div className="flex items-center justify-center text-2xl font-serif mt-5 mb-8">
            Get in Touch with Us
            </div>
            <div className="sm:mx-28">
            <p className="mx-5 font-medium text-l text-justify">
            We&apos;re here to help you with any questions, 
            concerns, or inquiries you may have. Whether 
            you need assistance with placing an order, have
             a product-related question, or just want to say 
             hello, we&apos;re always happy to hear from you. Reach 
             out to us via phone, email, or through the contact 
             form below, and one of our friendly team members 
             will get back to you as soon as possible.
            </p>
            <p className="mx-5 font-bold text-l text-justify mt-5">
            Contact Information:
            </p>
            <p className="mx-5 font-medium text-l text-justify flex mt-2">
            <p className="font-bold">Phone:</p> +91 70653-70453 
            </p>
            <p className="mx-5 font-medium text-l text-justify flex">
            <p className="font-bold">Email:</p> rajatmittal980@gmail.com 
            </p>
            <p className="mx-5 font-medium text-l text-justify flex">
            <p className="font-bold">Address: </p> Uklana Mandi, Hisar, Haryana
            </p>
            <p className="mx-5 font-medium text-l text-justify mt-5">
            Thank you for choosing <Link href={'/'} className="font-bold">KISAAN24</Link>. We look forward to hearing from you soon!
            </p>
           
            </div>
           
        </div>
    )
}