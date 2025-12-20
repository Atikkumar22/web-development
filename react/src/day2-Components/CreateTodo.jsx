import React from "react";

const CreateTodo = () => {
    const handleClick = () => {
        console.log("clicked");
    };

    return (
        <>
            <div className="div1">
                <h2>I just created a rafce snippet by hand</h2>
            </div>

            <div style={{ padding: "20px" }} className="div2">
                <span>Hello World</span>
                <button onClick={handleClick} className="btn">Click</button>
            </div>
        </>
    );
}

export default CreateTodo;