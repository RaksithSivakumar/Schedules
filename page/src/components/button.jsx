

export default function Button(props)
{
    return(
    
            <div>
                <button className="bg-green-700 text-white rounded-lg w-20 h-10">
                    {props.name}
                </button>
            </div>
        
    )
}