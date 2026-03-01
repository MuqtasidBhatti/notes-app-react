import React, { useState } from 'react'
import { useNotes } from '../context/notesContext'

const Home = () => {

    const { notes, addNote, dltNote, updateNote, editingId, setEditingId } = useNotes()

    const [input, setInput] = useState({
        title: "",
        content: ""
    })

    const [editInput, setEditInput] = useState({
        title: "",
        content: ""
    })

    const handleAdd = () => {
        if (!input.title || !input.content) return;
        addNote(input)
        setInput({
            title: "",
            content: ""
        })
        setEditingId(null)
    }

    const handleEdit = (note) => {
        setEditingId(note.id)
        setEditInput({
            title: note.title,
            content: note.content
        })
    }

    return (
        <div className="min-h-screen bg-linear-to-b from-gray-100 to-gray-200 p-6">
            <h2 className="text-3xl sm:text-4xlfont-extrabold text-center mb-10 text-gray-900 tracking-wide">
                📝 My Notes
            </h2>

            {/* Add Note Section */}
            <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-xl border border-gray-200 mb-10 space-y-4 transition-transform transform hover:-translate-y-1">
                <input
                    type="text"
                    value={input.title}
                    onChange={(e) => setInput({
                        ...input,
                        title: e.target.value
                    })}
                    placeholder="Title"
                    className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm text-gray-800 placeholder-gray-400 font-medium"
                />

                <textarea
                    value={input.content}
                    onChange={(e) => setInput({
                        ...input,
                        content: e.target.value
                    })}
                    placeholder="Write your note..."
                    className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 shadow-sm text-gray-800 placeholder-gray-400 font-medium resize-none"
                    rows={3}
                />

                <button
                    onClick={handleAdd}
                    className="w-full bg-linear-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-xl font-semibold shadow-lg hover:scale-105 hover:from-indigo-600 hover:to-purple-600 transition-transform cursor-pointer"
                >
                    + Add Note
                </button>
            </div>


            <div className="max-w-xl mx-auto space-y-6">
                {notes.map(note =>
                    <div
                        key={note.id}
                        className="bg-white p-5 rounded-2xl shadow-lg border border-gray-200 transition-transform transform hover:-translate-y-1 hover:shadow-2xl"
                    >
                        {editingId === note.id ? (
                            <>
                                <input
                                    value={editInput.title}
                                    onChange={(e) =>
                                        setEditInput({ ...editInput, title: e.target.value })
                                    }
                                    className="w-full px-4 py-2 mb-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm font-medium text-gray-800"
                                />
                                <textarea
                                    value={editInput.content}
                                    onChange={(e) =>
                                        setEditInput({ ...editInput, content: e.target.value })
                                    }
                                    className="w-full px-4 py-2 mb-3 border border-green-300 rounded-xl resize-none focus:ring-2 focus:ring-green-400 shadow-sm font-medium text-gray-800"
                                    rows={3}
                                />
                                <button
                                    onClick={() => {
                                        if (!editInput.title || !editInput.content) return;
                                        updateNote(note.id, editInput)
                                    }}
                                    className="w-full bg-green-500 text-white py-2 rounded-xl font-semibold shadow hover:bg-green-600 transition cursor-pointer"
                                >
                                    Update Note
                                </button>
                                <button
                                    onClick={() => setEditingId(null)}
                                    className="w-full bg-gray-400 text-white py-2 rounded-xl mt-2 cursor-pointer"
                                >
                                    Cancel
                                </button>
                            </>
                        ) : (
                            <>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{note.title}</h3>
                                <p className="text-gray-700 mb-4">{note.content}</p>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <button
                                        onClick={() => handleEdit(note)}
                                        className="flex-1 px-4 py-2 bg-yellow-400 text-white rounded-xl font-medium shadow hover:bg-yellow-500 transition cursor-pointer"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => dltNote(note.id)}
                                        className="flex-1 px-4 py-2 bg-red-500 text-white rounded-xl font-medium shadow hover:bg-red-600 transition cursor-pointer"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                )}
                {notes.length === 0 && (
                    <p className="text-center text-gray-500">No notes yet. Add one!</p>
                )}
            </div>
        </div>
    )
}

export default Home
