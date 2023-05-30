const express = require('express');
const app = express();
app.use(express.json());

//For using form data instaed of JSON body
app.use(express.urlencoded({ extended: false }));

require('./db/mongoose')
const Note = require('./models/note');


//new note
app.post('/note', async(req, res) =>{
    try {
        const note = new Note(req.body);
        await note.save()
        res.status(200).json(note);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})

//Get all notes
app.get('/notes', async (req, res) =>{
    try {
        const notes = await Note.find({}).select('-__v')
        res.status(200).json(notes);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})

//Update existing note
app.post('/update_note', async(req, res) =>{
    try {
        const note = await Note.findById(req.body.id);

        if (!note){
            res.status(404).json({message: "Couldn't find note by "+req.body.id});
        }

        note.note = req.body.note;
        await note.save()
        
        res.status(200).json(note);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})


//Delete note
app.delete('/note/:id', async(req, res) =>{
    try {
        const note = await Note.findByIdAndDelete(req.params.id);

        if (!note){
            res.status(404).json({message: "Couldn't find note by "+req.params.id});
        }
        
        res.status(200).json({message: "Note deleted successfully"});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})


//Delete note
app.post('/delete', async(req, res) =>{
    try {
        const note = await Note.findByIdAndDelete(req.body.id);

        if (!note){
            res.status(404).json({message: "Couldn't find note by "+req.params.id});
        }
        
        res.status(200).json(note);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})

const port = 5000

app.listen(process.env.PORT || port ,() => {
    console.log("listening on port 3000");
  });

