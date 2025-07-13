import { useState } from "react";

function TodoO() {
  const [data, setData] = useState({ name: '', email: '' })
  const [list, setList] = useState([])
  const [edit, setedit] = useState(null)

  function handelChallage(e) {
    setData({ ...data, [e.target.name]: e.target.value })
    
  }
  function handelSubmit(index) {
    if (edit !== null) {
      const updateList = [...list]
      updateList[edit] = data;
      setList(updateList)
      setedit(null)
    } else {
      setList([...list, data]);
    }
    setData({ name: '', email: '' });

  }
  function handalEdit(index) {
    setData(list[index])
    setedit(index)

  }
  function handelDelete(index) {
    const updateList = [...list];
    updateList.splice(index, 1)
    setList(updateList)
  }
  return (
    <div>
      <input type="text" name="name" id="" onChange={handelChallage} value={data.name} placeholder="Enter Name" />
      <input type="email" name="email" id="" onChange={handelChallage} value={data.email} placeholder="Enter E-mail" />
      <button onClick={handelSubmit}>Submit</button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <strong>{item.name}</strong> ({item.email})
            <button onClick={() => handelDelete(index)}>Delete</button>
            <button onClick={() => handalEdit(index)}>Edit</button>
          </li>
        ))}

      </ul>
    </div>
  )
}

export default TodoO;
