const pStyle = "mb-2 font-serif text-[#8c8a8bcc]";
export default function Footer(){
    return <div className="flex gap-25 bg-[#1a1502cc] p-10 justify-center">
        <div>
            <h1 className="text-2xl font-bold mb-5">CAFE AROMA</h1>
            <p className={pStyle}>Cafe Aroma Cafe</p>
            <p className={pStyle}>123 Java Street</p>
            <p className={pStyle}>Mochtown, Roastville 98765</p>
            <p className={pStyle}>Expresso County, Caffeine State, USA</p>
        </div>
        <div>
            <h1 className="text-2xl font-bold mb-5">OPENING HOURS</h1>
            <p className={pStyle}>Monday to Friday</p>
            <p className={pStyle}>08:00 AM - 09:00 PM</p>
        </div>
        <div>
            <h1 className="text-2xl font-bold mb-5">COFFEE</h1>
            <p className={pStyle}>Home</p>
            <p className={pStyle}>About US</p>
            <p className={pStyle}>Menu</p>
            <p className={pStyle}>Events</p>
            <p className={pStyle}>Contact Us</p>
        </div>
        <div>
            <h1 className="text-2xl font-bold mb-5">ABOUT US</h1>
            <p className={pStyle}>Our Story</p>
            <p className={pStyle}>Values</p>
            <p className={pStyle}>Team</p>
            <p className={pStyle}>Suppliers</p>
            <p className={pStyle}>Community</p>
        </div>
        <div>
            <h1 className="text-2xl font-bold mb-5">HOME</h1>
            <p className={pStyle}>Coffee</p>
            <p className={pStyle}>List Menu</p>
            <p className={pStyle}>Order</p>
            <p className={pStyle}>Blogs</p>
        </div>
    </div>
}