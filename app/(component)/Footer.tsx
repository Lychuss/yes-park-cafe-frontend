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
