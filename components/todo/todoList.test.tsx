import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoList from './todoList';

beforeEach(() => {
    jest.clearAllMocks();
});

test('show loading state for todo list', () => {
    global.fetch = jest.fn(() =>
        Promise.resolve({ json: () => Promise.resolve([]) } as Response)
    );
    render(<TodoList />);
    expect(screen.getByText('Loading...')).not.toBeInTheDocument();
});

test('show error state for todo list', async () => {
    global.fetch = jest.fn(() => Promise.reject());
    render(<TodoList />);
    const error = await screen.findByText('Failed to load');
    expect(error).toBeInTheDocument();
});

test('show todo list', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve([
            { id: 1, text: 'test todo' }
        ])
    } as Response));
    render(<TodoList />);
    const todoList = await screen.getByText('test todo');
    expect(todoList).toBeInTheDocument();
});

test('show empty todo list', async () => {
    global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve([]) } as Response));
    render(<TodoList />);
    const msg = await screen.getByText('No todos');
    expect(msg).toBeInTheDocument();
});

test('add todo', async () => {
    global.fetch = jest
        .fn()
        // initial fetch
        .mockResolvedValueOnce({
            json: () => Promise.resolve([]),
        })
        // add todo
        .mockResolvedValueOnce({
            json: () => Promise.resolve([{ id: 1, text: 'test todo' }]),
        });

    render(<TodoList />);

    await screen.findByText('No todos');

    const input = screen.getByPlaceholderText('Add todo');
    const button = screen.getByText('Add');

    await userEvent.type(input, 'test todo');
    await userEvent.click(button);

    const newTodo = await screen.findByText('test todo');
    expect(newTodo).toBeInTheDocument();
});
test('add valid todo', () => { });