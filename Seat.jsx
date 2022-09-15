export default function Seat({ seat, marked, setMarked }) {

    let isMarked = marked.filter(stefan => stefan === seat.id)


    function handleClick (id) {
        if (marked.filter(number => number === id).length) {
            console.log('if')
            let newState = marked.filter(remove => remove != id)
            setMarked(newState)

            
        }
        else {
            console.log('else')
            setMarked([...marked, id])

        }
    } 

    console.log(marked)


      
    return (
        
       
        <div className={isMarked.length ? 'marked' : 'not-marked'}>

            
            <div className="seats">{seat.name}</div>
            
           
            {seat.booked ? <div className="bokad">är bokad</div> : <button onClick={() => handleClick(seat.id)}>markera</button>}
        </div>
    )
}