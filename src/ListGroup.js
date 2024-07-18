function ListGroup()
{
    let selectedIndex=0
    let items=['siva','vamsi','navya','divya','shan']
    //items=[]
    const handlerClick=(item: any,index:any)=>{
        console.log(index+" - "+item);
        selectedIndex=index;
        console.log("selectedIndex"+" - "+selectedIndex);
    }

    return (
        <>
        <h1>List of Names</h1>
            {items.length===0 && <p>no items found</p>}
        <ul className="list-group">
            {
                items.map((item,index) =>
                <li className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
                    key={item} onClick={() => handlerClick(item,index)}>{item}</li>)
            }
        </ul>
        </>
    )
}

export default ListGroup;