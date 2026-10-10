<<<<<<< HEAD
const pStyle = "mb-2 break-words font-serif text-[#8c8a8bcc]";

const columns: { title: string; items: string[] }[] = [
    {
        title: "CAFE AROMA",
        items: [
            "Cafe Aroma Cafe",
            "123 Java Street",
            "Mochtown, Roastville 98765",
            "Expresso County, Caffeine State, USA",
        ],
    },
    {
        title: "OPENING HOURS",
        items: ["Monday to Friday", "08:00 AM - 09:00 PM"],
    },
    {
        title: "COFFEE",
        items: ["Home", "About Us", "Menu", "Events", "Contact Us"],
    },
    {
        title: "ABOUT US",
        items: ["Our Story", "Values", "Team", "Suppliers", "Community"],
    },
    {
        title: "HOME",
        items: ["Coffee", "List Menu", "Order", "Blogs"],
    },
];

export default function Footer(){
    return (
        <footer className="mt-5 bg-[#1a1502cc] text-white">
            <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-8 px-6 py-10 sm:grid-cols-2 sm:px-10 lg:grid-cols-3 xl:grid-cols-5 xl:gap-12">
                {columns.map((column) => (
                    <div key={column.title} className="min-w-0">
                        <h2 className="mb-5 text-xl font-bold lg:text-2xl">{column.title}</h2>
                        {column.items.map((item) => (
                            <p key={item} className={pStyle}>{item}</p>
                        ))}
                    </div>
                ))}
            </div>
        </footer>
    );
}
=======
const pStyle = "mb-2 font-serif text-[#8c8a8bcc]";

export default function Footer() {
  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-center gap-10 bg-[#1a1502cc] p-8 md:p-10 mt-5 text-center md:text-left">
      {/* Column 1 */}
      <div className="flex-1 min-w-[200px]">
        <h1 className="text-2xl font-bold mb-5">CAFE AROMA</h1>
        <p className={pStyle}>Cafe Aroma Cafe</p>
        <p className={pStyle}>123 Java Street</p>
        <p className={pStyle}>Mochtown, Roastville 98765</p>
        <p className={pStyle}>Expresso County, Caffeine State, USA</p>
      </div>

      {/* Column 2 */}
      <div className="flex-1 min-w-[150px]">
        <h1 className="text-2xl font-bold mb-5">OPENING HOURS</h1>
        <p className={pStyle}>Monday to Friday</p>
        <p className={pStyle}>08:00 AM - 09:00 PM</p>
      </div>

      {/* Column 3 */}
      <div className="flex-1 min-w-[150px]">
        <h1 className="text-2xl font-bold mb-5">COFFEE</h1>
        <p className={pStyle}>Home</p>
        <p className={pStyle}>About US</p>
        <p className={pStyle}>Menu</p>
        <p className={pStyle}>Events</p>
        <p className={pStyle}>Contact Us</p>
      </div>

      {/* Column 4 */}
      <div className="flex-1 min-w-[150px]">
        <h1 className="text-2xl font-bold mb-5">ABOUT US</h1>
        <p className={pStyle}>Our Story</p>
        <p className={pStyle}>Values</p>
        <p className={pStyle}>Team</p>
        <p className={pStyle}>Suppliers</p>
        <p className={pStyle}>Community</p>
      </div>

      {/* Column 5 */}
      <div className="flex-1 min-w-[150px]">
        <h1 className="text-2xl font-bold mb-5">HOME</h1>
        <p className={pStyle}>Coffee</p>
        <p className={pStyle}>List Menu</p>
        <p className={pStyle}>Order</p>
        <p className={pStyle}>Blogs</p>
      </div>
    </div>
  );
}
>>>>>>> 24e3ce044366f1b52d4be3055db6ab7e5bc3f64d
