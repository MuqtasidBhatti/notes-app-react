import React, { useState, useEffect } from 'react'

const Notes = () => {
    const [notes, setNotes] = useState(() => {
        const savedNotes = localStorage.getItem("savedNotes")
        return savedNotes ? JSON.parse(savedNotes) : []
    })
    const [input, setInput] = useState("")
    const [edtInput, setEdtInput] = useState("")
    const [editNote, setEditNote] = useState(null)

    useEffect(() => {
        localStorage.setItem("savedNotes", JSON.stringify(notes))
    }, [notes])

    const handleAdd = () => {
        if (input.trim() === "") return;
        setNotes([...notes, { id: Date.now(), text: input }])
        setInput("")
    }

    const handleDelete = (id) => {
        setNotes(notes.filter(note => note.id !== id))
    }

    const handleEdit = (id, text) => {
        setEditNote(id)
        setEdtInput(text)
    }

    const handleUpdate = () => {
        if (edtInput.trim() === "") return;
        setNotes(
            notes.map(note =>
                note.id === editNote ? { ...note, text: edtInput } : note
            )
        )
        setEditNote(null)
        setEdtInput("")
    }

    const handleCancel = () => {
        setEditNote(null)
        setEdtInput("")
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-900 via-purple-900 to-black px-4 py-10">
            <div className="max-w-5xl mx-auto text-white">

                <h2 className="text-4xl font-bold mb-8 text-center">
                    Notes
                </h2>

                {/* Add Note */}
                <div className="bg-gray-800 bg-opacity-80 backdrop-blur-md p-4 rounded-xl shadow-lg mb-10 flex gap-3">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Take a note..."
                        className="flex-1 bg-transparent border-b border-gray-600 px-2 py-2 text-lg placeholder-gray-400 focus:outline-none focus:border-purple-500"
                    />
                    <button
                        onClick={handleAdd}
                        className="px-5 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition"
                    >
                        Add
                    </button>
                </div>

                {/* Notes Grid */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {notes.map(note => (
                        <li
                            key={note.id}
                            className="bg-purple-200 text-gray-900 rounded-xl p-4 shadow-md hover:shadow-xl transition flex flex-col justify-between"
                        >
                            {editNote === note.id ? (
                                <>
                                    <textarea
                                        value={edtInput}
                                        onChange={(e) => setEdtInput(e.target.value)}
                                        className="w-full min-h-30 bg-white p-3 rounded-lg resize-none focus:outline-none"
                                    />

                                    <div className="flex justify-end gap-2 mt-4">
                                        <button
                                            onClick={handleUpdate}
                                            className="px-3 py-1 bg-green-600 text-white rounded-md"
                                        >
                                            Update
                                        </button>
                                        <button
                                            onClick={handleCancel}
                                            className="px-3 py-1 bg-gray-500 text-white rounded-md"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <p className="whitespace-pre-wrap wrap-break-word leading-relaxed text-lg">
                                        {note.text}
                                    </p>

                                    <div className="flex justify-end gap-3 mt-4 text-sm">
                                        <button
                                            onClick={() => handleEdit(note.id, note.text)}
                                            className="text-blue-600 hover:underline"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(note.id)}
                                            className="text-red-600 hover:underline"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </>
                            )}
                        </li>
                    ))}
                </ul>

                {notes.length === 0 && (
                    <div className="text-center text-gray-400 mt-16 text-lg italic">
                        Your notes will appear here ✨
                    </div>
                )}
            </div>
        </div>
    )
}

export default Notes
