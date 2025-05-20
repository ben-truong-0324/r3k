import { useState, useEffect } from 'react';

export function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/tasks')
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        setLoading(false);
      });
  }, []);

  return { tasks, loading };
}
