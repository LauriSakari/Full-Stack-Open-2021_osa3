
const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')

app.use(express.static('build'))
app.use(cors())
app.use(express.json())

morgan.token('tiedot', (req, res) => {
    return JSON.stringify(req.body)
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :tiedot'))

let persons = [
      { 
        "name": "Arto Hellas", 
        "number": "040-123456",
        "id": 1
      },
      { 
        "name": "Ada Lovelace", 
        "number": "39-44-5323523",
        "id": 2
      },
      { 
        "name": "Dan Abramov", 
        "number": "12-43-234345",
        "id": 3
      },
      { 
        "name": "Mary Poppendieck", 
        "number": "39-23-6423122",
        "id": 4
      }
    ]
  

app.get('/info', (req, res) => {
    res.send(`
    <p>Phonebook has info for ${persons.length} people</p>
    <p>${Date()}`)
})

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (req, res) =>   {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)

    if (person) { 
        res.json(person)    
        } else { 
         res.status(404).end()
        }
})

const generateId = () => {
    const maxId = persons.length > 0
    ? Math.max(...persons.map(p => p.id)) 
    : 0
    return maxId + 5 + Math.floor(Math.random() * 20)
}

app.post('/api/persons', (req, res) => {
    
    const body = req.body
    const names = persons.map(p => p.name.toLowerCase())
    const nameToCompare = body.name.toLowerCase()

    
    if (!body.name || !body.number)  {
        return res.status(400).json({
            error: 'content missing'
        })
    } else if (names.includes(nameToCompare) ){
        return res.status(400).json({
            error: 'name must be unique'
        })
    }

    const person = {
        name: body.name,
        number: body.number,
        id: generateId()
    }

    persons = persons.concat(person)
  
    res.json(person)
  })

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(person => person.id !== id )

    res.status(204).end()
})


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`)
})