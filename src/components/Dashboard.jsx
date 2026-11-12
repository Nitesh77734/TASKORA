
import React, { useEffect, useState } from 'react'
import {
  Plus,
  FolderKanban,
  X,
  Trash2,
  CheckCircle2,
  Circle
} from 'lucide-react'

export default function Dashboard() {
  const [projects, setProjects] = useState(() => {
    const savedProjects = localStorage.getItem('taskora-projects')
    return savedProjects ? JSON.parse(savedProjects) : []
  })

  const [showForm, setShowForm] = useState(false)
  const [projectName, setProjectName] = useState('')
  const [taskInputs, setTaskInputs] = useState({})

  // Save projects in localStorage
  useEffect(() => {
    localStorage.setItem('taskora-projects', JSON.stringify(projects))
  }, [projects])

  // Add a new project
  function addProject(e) {
    e.preventDefault()

    if (!projectName.trim()) return

    const newProject = {
      id: Date.now(),
      name: projectName.trim(),
      tasks: []
    }

    setProjects([...projects, newProject])
    setProjectName('')
    setShowForm(false)
  }

  // Delete project
  function deleteProject(id) {
    setProjects(projects.filter((project) => project.id !== id))
  }

  // Add task to a project
  function addTask(e, projectId) {
    e.preventDefault()

    const title = taskInputs[projectId]?.trim()

    if (!title) return

    const newTask = {
      id: Date.now(),
      title: title,
      completed: false
    }

    setProjects(projects.map((project) =>
      project.id === projectId
        ? { ...project, tasks: [...project.tasks, newTask] }
        : project
    ))

    setTaskInputs({
      ...taskInputs,
      [projectId]: ''
    })
  }

  // Mark task complete or incomplete
  function toggleTask(projectId, taskId) {
    setProjects(projects.map((project) =>
      project.id === projectId
        ? {
            ...project,
            tasks: project.tasks.map((task) =>
              task.id === taskId
                ? { ...task, completed: !task.completed }
                : task
            )
          }
        : project
    ))
  }

  // Delete task
  function deleteTask(projectId, taskId) {
    setProjects(projects.map((project) =>
      project.id === projectId
        ? {
            ...project,
            tasks: project.tasks.filter((task) => task.id !== taskId)
          }
        : project
    ))
  }

  return (
    <section id="dashboard" className="bg-gray-50 py-20 px-5">
      <div className="max-w-7xl mx-auto">

        {/* Dashboard Header */}
        <div className="flex flex-col sm:flex-row justify-between gap-5 mb-10">
          <div>
            <p className="text-sm font-semibold text-blue-600 mb-2">
              YOUR WORKSPACE
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              My Dashboard
            </h2>

            <p className="text-gray-500 mt-2">
              Manage your projects and keep your work organized.
            </p>
          </div>

          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            <Plus size={20} />
            Add Project
          </button>
        </div>

        {/* Add Project Form */}
        {showForm && (
          <form
            onSubmit={addProject}
            className="bg-white p-5 rounded-2xl shadow-sm border border-gray-200 mb-8 flex flex-col sm:flex-row gap-3"
          >
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              placeholder="Enter project name..."
              className="flex-1 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
              required
            />

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
            >
              Save Project
            </button>

            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="border border-gray-300 px-4 py-3 rounded-xl"
            >
              Cancel
            </button>
          </form>
        )}

        {/* Projects */}
        {projects.length === 0 ? (
          <div className="bg-white border border-dashed border-gray-300 rounded-2xl p-12 text-center">
            <FolderKanban size={45} className="mx-auto text-gray-400 mb-4" />

            <h3 className="text-xl font-semibold text-gray-800">
              No projects yet
            </h3>

            <p className="text-gray-500 mt-2">
              Create your first project to get started.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => {
              const completedTasks = project.tasks.filter(
                (task) => task.completed
              ).length

              const progress = project.tasks.length
                ? Math.round(
                    (completedTasks / project.tasks.length) * 100
                  )
                : 0

              return (
                <div
                  key={project.id}
                  className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm"
                >
                  {/* Project Title */}
                  <div className="flex justify-between items-start gap-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
                        <FolderKanban size={23} />
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-gray-900">
                          {project.name}
                        </h3>

                        <p className="text-sm text-gray-500">
                          {completedTasks} of {project.tasks.length} tasks completed
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => deleteProject(project.id)}
                      className="text-gray-400 hover:text-red-500"
                      title="Delete project"
                    >
                      <Trash2 size={19} />
                    </button>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-500">Progress</span>
                      <span className="font-semibold text-gray-800">
                        {progress}%
                      </span>
                    </div>

                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Add Task Form */}
                  <form
                    onSubmit={(e) => addTask(e, project.id)}
                    className="flex gap-2 mt-6"
                  >
                    <input
                      type="text"
                      value={taskInputs[project.id] || ''}
                      onChange={(e) =>
                        setTaskInputs({
                          ...taskInputs,
                          [project.id]: e.target.value
                        })
                      }
                      placeholder="Add a new task..."
                      className="min-w-0 flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500"
                    />

                    <button
                      type="submit"
                      className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
                      title="Add task"
                    >
                      <Plus size={20} />
                    </button>
                  </form>

                  {/* Task List */}
                  <div className="mt-5 space-y-3">
                    {project.tasks.length === 0 ? (
                      <p className="text-sm text-gray-400 text-center py-3">
                        No tasks added yet.
                      </p>
                    ) : (
                      project.tasks.map((task) => (
                        <div
                          key={task.id}
                          className="flex items-center gap-3 border-b border-gray-100 pb-3"
                        >
                          <button
                            onClick={() => toggleTask(project.id, task.id)}
                            className="text-blue-600"
                            title="Toggle task"
                          >
                            {task.completed ? (
                              <CheckCircle2 size={20} />
                            ) : (
                              <Circle size={20} />
                            )}
                          </button>

                          <span
                            className={`flex-1 text-sm ${
                              task.completed
                                ? 'line-through text-gray-400'
                                : 'text-gray-700'
                            }`}
                          >
                            {task.title}
                          </span>

                          <button
                            onClick={() => deleteTask(project.id, task.id)}
                            className="text-gray-400 hover:text-red-500"
                            title="Delete task"
                          >
                            <X size={18} />
                          </button>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )}

      </div>
    </section>
  )
}
