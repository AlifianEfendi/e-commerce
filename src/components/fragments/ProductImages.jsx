import SelectImage from "./SelectImage";

export default function ProductImages({ imageSelected, handleChecked, product }) {
    return (
        <>
            <div className="flex flex-col items-center gap-5 w-1/2">
                <div className="w-10/12 flex justify-center shadow-lg shadow-black/25 bg-gradient-to-b from-gray-400 to-200 border border-gray-300 rounded-lg">
                    <div className="max-w-sm aspect-square">
                    <img className="w-full h-full object-contain" src={product.id && product.images[imageSelected]} alt={product.id && product.title} />
                    </div>
                </div>
            
                <fieldset className="flex items-center gap-2">
                    {product.id && product.images.map((image, index) => (
                        <SelectImage key={index} image={image} index={index} imageSelected={imageSelected} handleChecked={handleChecked} />
                    ))}
                </fieldset>
            </div>
        </>
    )
}