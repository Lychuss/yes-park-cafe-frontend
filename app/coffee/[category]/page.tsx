import Products from "@/app/(component)/Products";
import Menu from "@/app/(component)/Menu";

export default function Page({ params }: { params: { category: string } }) {
  return <>
    <Menu />
    <Products coffeeId={params.category} />
  </>;
}