export default function BoxLayout({ children, title, addStyle="", titleMargin="mb-4" }) {
    return (
        <div className={"bg-white rounded-lg shadow-md p-3 md:p-6 " + addStyle}>
            {title && (
                <h2 className={"text-lg font-bold " + titleMargin}>{title}</h2>
            )}
        
            {children}
        </div>
    )
}