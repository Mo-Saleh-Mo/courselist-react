import React from 'react';
import './FormList.sass';

const FileList = (props) => {
        return (
            <div className = "FormList" >
                <form onSubmit = {props.addCourse} >
                    <input type="tetx" className="input_text" value={props.courent} onChange={props.updateChange} />
                    <input type="submit" className="input_submit" value="submit" />
                </form>
            </div>
        )
    }

export default FileList;
