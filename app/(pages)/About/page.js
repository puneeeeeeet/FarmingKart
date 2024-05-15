import Link from "next/link";

export default function About(){
    return(
        <div>
            <div className="flex items-center justify-center mt-5 mb-8">
            <h1 className="text-2xl font-bold font-serif">Welcome to Kisaan24</h1>
            </div>
            <p className="mx-5 font-medium text-l text-justify">
            We're passionate about supporting farmers  and gardeners 
            alike in cultivating thriving landscapes and bountiful  harvests. With a commitment to  quality,
            innovation, and sustainability, we offer a wide range of premium farming products including seeds,
            herbicides, insecticides, fungicides, and growth promoters, carefully curated to meet the diverse
            needs of modern agriculture.
            </p>
            <p className="mx-5 font-medium text-l text-justify">
            Our journey began with a simple yet powerful vision: to empower farmers
             with the tools and resources they need to succeed. Guided by this vision,
              we tirelessly source the finest products from trusted suppliers and
               manufacturers, ensuring that every item in our inventory meets our 
               stringent standards for effectiveness, safety, and environmental 
               responsibility. 
               <Link href={'/ContactUs'} className="font-bold hover:bg-gray-300">Contact us</Link>
            </p>
            
        </div>
    )
}