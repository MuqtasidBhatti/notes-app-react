import React from 'react'
import { useNotes } from '../context/notesContext'

const About = () => {
  const { notes } = useNotes()

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-100 to-gray-200 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-200">

        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-indigo-600 mb-6 tracking-wide">
          About NotesApp
        </h1>


        <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 text-center">
          This Notes App is built using <span className="font-semibold text-indigo-600">React </span>
          and <span className="font-semibold text-indigo-600">Context API</span> to demonstrate
          global state management. All notes are synced across multiple pages
          without using props drilling.
        </p>

        <div className="bg-indigo-50 p-6 rounded-xl text-center mb-6">
          <h2 className='text-2xl font-bold text-indigo-700 mb-2'>
            Total Notes Created
          </h2>

          <p className='text-4xl font-extrabold text-indigo-600'>
            {notes.length}
          </p>

          <p className="text-gray-600 mt-2">
            This count updates instantly across pages using Context API.
          </p>
        </div>

        {notes.length > 0 && (
          <div className="mt-6 bg-gray-100 p-4 rounded-xl">
            <h4 className="font-semibold text-gray-800 mb-2">
              Latest Note:
            </h4>
            <p className="text-indigo-600 font-medium">
              {notes[notes.length - 1].title}
            </p>
          </div>
        )}

        <div className="mt-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Tech Stack Used
          </h3>

          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>React (Functional Components)</li>
            <li>React Context API for Global State</li>
            <li>Tailwind CSS for Styling</li>
            <li>CRUD Operations (Create, Read, Update, Delete)</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
