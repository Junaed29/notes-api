const mongoose = require('mongoose');


// Mongodb Table
const noteSchema = mongoose.Schema(
    {
        note: {
            type: String,
            required: [true, "Please enter a note"]
        }
    }
)

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;