import { render, screen } from '@testing-library/react';
import TaskCard from '@/components/tasks/TaskCard';

test('renders task card with title and priority', () => {
  const task = { id: 1, title: 'Test Mission', priority: 2, completed: false };
  render(<TaskCard task={task} />);
  expect(screen.getByText('Test Mission')).toBeInTheDocument();
  expect(screen.getByText(/Priority: 2/)).toBeInTheDocument();
});
