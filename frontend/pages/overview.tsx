import { useEffect, useState } from 'react';

type Task = {
  id: number;
  title: string;
  completed: boolean;
  priority: number;
};

export default function Overview() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetch('/api/health') // Replace with /api/tasks when backend is ready
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // TODO: fetch real task data
        // setTasks(data.tasks);
      });
  }, []);

  return (
    <main className="bg-zinc-950 min-h-screen text-gray-100 p-6 font-mono">
      <h2 className="text-3xl mb-4 text-teal-400 font-bold tracking-widest">Mission Dashboard</h2>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((slot) => (
          <div
            key={slot}
            className="border-2 border-teal-500 rounded-xl p-4 bg-zinc-900 shadow-md flex flex-col justify-between"
          >
            <h3 className="text-xl font-bold text-teal-300 mb-2">Priority {slot}</h3>
            <p className="text-gray-400">No task assigned.</p>
            {/* Future: Replace with task info or add button */}
          </div>
        ))}
      </section>

      <div className="mt-12">
        {/* Placeholder for D3 visualization */}
        <h4 className="text-lg text-gray-400 mb-2">Visualization Module Incoming...</h4>
        <div className="bg-zinc-800 h-64 rounded-lg border border-dashed border-gray-600 flex items-center justify-center">
          <p className="text-gray-600 italic">[D3 module: streaks, trends, progress]</p>
        </div>
      </div>
    </main>
  );
}
