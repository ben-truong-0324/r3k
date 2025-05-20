interface Task {
    id: number;
    title: string;
    priority: number;
    completed: boolean;
  }
  
  export default function TaskCard({ task }: { task: Task }) {
    return (
      <div className="p-4 border border-teal-400 rounded-xl text-gray-100">
        <h3 className="text-lg font-bold">{task.title}</h3>
        <p className="text-sm text-gray-400">Priority: {task.priority}</p>
      </div>
    );
  }
  