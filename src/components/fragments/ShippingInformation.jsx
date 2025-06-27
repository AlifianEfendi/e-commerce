import Input from "../elements/Input";
import Select from "../elements/Select";
import TextArea from "../elements/TextArea";

export default function ShippingInformation() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input name="name" title="Nama Penerima" type="text" placeholder="Masukkan nama lengkap" addStyle="px-4 py-2 text-sm" />
            
                <Input name="phone" title="Nomor Telepon" type="tel" placeholder="Contoh: 08123456789" addStyle="px-4 py-2 text-sm" />
            
                <TextArea name="address" title="Alamat Lengkap" rows={3} placeholder="Masukkan alamat lengkap (nama jalan, nomor rumah, RT/RW)" />
            
                <Select name="city" title="Kota/Kabupaten" data={["Jakarta", "Bandung", "Surabaya", "Yogyakarta", "Semarang"]} />
            
                <Select name="district" title="Kecamatan" data={["Kecamatan A", "Kecamatan B", "Kecamatan C", "Kecamatan D", "Kecamatan E"]} />
            
                <Select name="subdistrict" title="Kelurahan/Desa" data={["Kelurahan A", "Kelurahan B", "Kelurahan C", "Kelurahan D", "Kelurahan E"]} />
            
                <Input name="postal" title="Kode Pos" type="text" placeholder="Contoh: 12870" />
            
                <TextArea name="notes" title="Catatan untuk Kurir (Opsional)" rows={2} placeholder="Contoh: Rumah cat putih, pagar hitam" />
        </div>
    )
}