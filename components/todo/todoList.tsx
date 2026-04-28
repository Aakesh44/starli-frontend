import { useEffect, useState } from 'react';

export default function TodoList() {
    const [todos, setTodos] = useState<{ id: number; text: string }[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
        fetch('/api/todos')
            .then(res => res.json())
            .then(data => {
                setTodos(data);
                setLoading(false);
            })
            .catch(() => {
                setError('Failed to load');
                setLoading(false);
            });
    }, []);

    const handleAdd = async () => {
        if (!newTodo.trim()) return;

        const res = await fetch('/api/todos', {
            method: 'POST',
            body: JSON.stringify({ text: newTodo }),
        });

        const data = await res.json();
        setTodos(prev => [...prev, data]);
        setNewTodo('');
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <input
                placeholder="Add todo"
                value={newTodo}
                onChange={e => setNewTodo(e.target.value)}
            />
            <button onClick={handleAdd}>Add</button>

            {todos.length === 0 ? (
                <p>No todos</p>
            ) : (
                <ul>
                    {todos.map(todo => (
                        <li key={todo.id}>{todo.text}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}