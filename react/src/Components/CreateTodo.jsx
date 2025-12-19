import React from "react";

const CreateTodo = () => {
    const handleClick = () => {
        console.log("clicked");
    };

    return (
        <>
            <div>
                <h2>I just created a rafce snippet by hand</h2>
            </div>

            <div style={{ padding: "20px" }}>
                <span>Hello World</span>
                <button onClick={handleClick}>Click</button>
            </div>
        </>
    );
}

export default CreateTodo;