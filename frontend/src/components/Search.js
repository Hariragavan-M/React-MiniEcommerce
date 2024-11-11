import { useState } from "react"
import {useNavigate} from "react-router-dom"

export default function Search(){
    const[keyword, setkeyword] = useState("")
    const navigate = useNavigate()

    const searchhandler =()=>{
        navigate ("/search?keyword=" +keyword)
    }

    return(
        <>
        <div className="input-group">
                    <input
                        type="text"
                        id="search_field"
                        className="form-control"
                        placeholder="Enter Product Name ..."
                        onBlur={searchhandler}
                        onChange={(e)=>setkeyword(e.target.value)}
                    />
                    <div className="input-group-append">
                        <button onClick={searchhandler} id="search_btn" className="btn">
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
        </>
    )
}