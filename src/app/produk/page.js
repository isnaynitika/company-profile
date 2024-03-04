import { getProduk } from "../../utils/api";
import ProdukComponent from "./clientcomponent/produk";

export default async function Produk() {
  const data = getProduk();
  const [listproduk] = await Promise.all([data]);

  return (
    <div>
      <ProdukComponent produkdata={listproduk} />
    </div>
  );
}
