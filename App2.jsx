import React, { useState, useEffect } from 'react';

const NotePreimpostate = [
  { giorno: 7, note: 'imparare Svelte' },
  { giorno: 10, note: 'creare Vite 2.0' },
  { giorno: 16, note: 'sistemare cicalino' },
  { giorno: 22, note: 'abolire le campane' },
  { giorno: 30, note: 'meeting con la gang di Michele' },
];

const Note = ({ giorno, note }) => {
  return (
    <div>
      <strong>{giorno}:</strong> {note}
    </div>
  );
};

const CalendarApp = () => {
  const [notes, setNotes] = useState([]);
  const [selectedDay, setSelectedDay] = useState('');
  const [noteText, setNoteText] = useState('');

  const handleNote = () => {
    if (selectedDay && noteText) {
      const existingNoteIndex = notes.findIndex((note) => note.day === selectedDay);

      if (existingNoteIndex !== -1) {
       
        const updatedNotes = [...notes];
        updatedNotes[existingNoteIndex] = { day: selectedDay, note: noteText };
        setNotes(updatedNotes);
      } else {
        
        setNotes([...notes, { day: selectedDay, note: noteText }]);
      }

      setSelectedDay('');
      setNoteText('');
    }
  };

  useEffect(() => {

    setNotes(NotePreimpostate);
  }, []);

  return (
    <div>
      <h1>Calendario</h1>
      <div>
        <label>
          Giorno:
          <input
            type="number"
            min="1"
            max="31"
            value={selectedDay}
            onChange={(e) => setSelectedDay(parseInt(e.target.value))}
          />
        </label>
        <label>
          Nota:
          <input
            type="text"
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
          />
        </label>
        <button onClick={handleNote}>Inserisci nota</button>
      </div>
      <div>
        <h2>Note</h2>
        {notes.map((note) => (
          <Note key={note.day} day={note.day} note={note.note} />
        ))}
      </div>
      <div>
        <h2>Calendario</h2>
        <ol>
          {Array.from({ length: 31 }, (_, index) => (
            <li key={index + 1}>
              {index + 1}:
              {notes.find((note) => note.day === index + 1)?.note || ''}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default CalendarApp;