import React, { createContext, useContext, useState, useEffect } from 'react'

const NotesContext  = createContext(null)

export const NotesProvider = ({ children }) => {

    const [notes, setNotes] = useState(() => {
        const savedNotes = localStorage.getItem("notes")
        return savedNotes ? JSON.parse(savedNotes) : []
    })

    const [editingId, setEditingId] = useState(null)

    const addNote = (note) => {
        if (!note.title || !note.content) return;

        setNotes(prevNotes => [
            ...prevNotes,
            {
                id: crypto.randomUUID(),
                title: note.title,
                content: note.content

            }
        ])
    }
    const updateNote = (id, newNote) => {
        setNotes(prevNotes =>
            prevNotes.map(note =>
                note.id === id
                    ? { ...note, title: newNote.title, content: newNote.content } : note
            ))
        setEditingId(null)
    }

    const dltNote = (id) => {
        setNotes( prevNotes => prevNotes.filter(note => note.id !== id))
    }

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes])

    return (
        <NotesContext.Provider value={{ notes, addNote, dltNote, updateNote, editingId, setEditingId }}>
            {children}
        </NotesContext.Provider >
    )
}

export const useNotes = () => {
    const context = useContext(NotesContext )
    if(!context) {
        throw new Error("useNotes must be used inside NotesProvider")
    }
    return context;
   
}

export default NotesContext
