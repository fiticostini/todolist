import React, { useState } from "react";						

//create your first component

const Home = () => {
    const [tareas, setTareas] = useState([]);
    const [tareaName, setTareaName] = useState("");
    const handleTareaChange = (event) => {
        setTareaName(event.target.value);
    };
    const handleAddEnter = (event) => {
        console.log(event.key);
        if (event.key === "Enter") {
            const newTarea = {
                accion: tareaName,
            };
            const newTareas = [...tareas, newTarea]
            setTareas(newTareas);
            setTareaName("");
        }
    }
    const handleAddClick = () => {
        
        const newTarea = {
            accion: tareaName,
        };
        const newTareas = [...tareas, newTarea]
        setTareas(newTareas);
        setTareaName("");
        
    };

    const handleRemove = (id) => {
        setTareas(tareas.filter((item, index) => index != id))
    }
    return (
        <div className="d-flex justify-content-center">
            <div className="text-center w-50">
                <h1 className="text-center mt-5">TASK LIST</h1>
                <div className="card m-5 ">
                    <div className="card-header">
                        <input type="text" placeholder="New task" onChange={(event) => handleTareaChange(event)} onKeyDown={(event) => handleAddEnter(event)} value={tareaName} />
                        <button className="boton"  onClick={() => handleAddClick()}>Add me</button>
                    </div>
                    <div className="card-body">
					{tareas.length === 0 && <p>there are no task</p>}
                        <ul className="list-group list-group-flush ">
                            {tareas.map((tarea, index) => {
                                return (
                                    <li className="list-group-item d-flex justify-content-between" key={`${tarea.accion}-${index}`}>
                                        <p>{tarea.accion}</p>
                                        <button className="btn-close" aria-label="Close" onClick={() => handleRemove(index)}></button>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="card-footer">{tareas.length} item left</div>
                </div>
            </div>
        </div>
    );
};

export default Home;

