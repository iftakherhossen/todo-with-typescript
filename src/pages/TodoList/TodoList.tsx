import React from 'react';

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    addHandle: (e: React.FormEvent) => void;
}

const TodoList: React.FC<Props> = ({ todo, setTodo, addHandle }) => {

    return (
        <div className='container'>
            <h1 className='text-center text-white heading pt-3'>Todo List</h1>
            <form onSubmit={addHandle}>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-lg-4 col-md-8 col-10 position-relative d-flex justify-content-center align-items-center ">
                        <input
                            className='form-control border border-3 rounded-pill'
                            type="input"
                            placeholder='write your daily task'
                            value={todo}
                            onChange={(e) => setTodo(e.target.value)}
                        />
                        <input
                            className='btn position-absolute end-0 border border-3 rounded-pill'
                            type="submit"
                            value='Add'
                            style={{ backgroundColor: '#282C34', color: 'white'}}
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default TodoList;