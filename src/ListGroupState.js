import {useState} from "react";

function ListGroupState()
{
    let items=['siva','vamsi','navya','divya','shan']
        //varname        settter                      initial value
    const [selectedIndex,setSelectedIndex]=useState(-1);
    const handlerClick=(item: any,index:any)=>{
        console.log(index+" - "+item);
        setSelectedIndex(index);
    }
    return (
        <>
            <h1>List of Items</h1>
            {items.length==0 && <p>no items found</p>}
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


export default ListGroupState;