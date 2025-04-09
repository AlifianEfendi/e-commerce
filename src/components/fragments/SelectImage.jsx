export default function SelectImage ({ image, index, imageSelected, handleChecked }) {
    return (
        <label htmlFor={`image-${index}`} className="w-16 aspect-square shadow-md shadow-black/50 bg-gradient-to-b from-gray-400 to-200 border border-gray-300 rounded-md cursor-pointer has-checked:bg-gray-400 has-checked:ring-2 has-checked:ring-blue-400"> 
            <input 
            type="radio"
            id={`image-${index}`}
            name="images"
            value={index}
            checked={Number(imageSelected) === index}
            onChange={handleChecked}
            className="sr-only" />
        
            <div className="w-full h-full">
                <img className="w-full h-full object-contain" src={image} alt="images" />
            </div>
        </label>
    )
}