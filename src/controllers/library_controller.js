const Library = require('../models/library_model')

module.exports = {
    async bookCreate(req,res){
        const {book, author, year} = req.body
        let data = {}
        let user = await Library.findOne({book})
        if(!user){
            data = {book, author, year}
            user = await Library.create(data)
            return res.status(201).json(user)
        }
        else{
            return res.json('User  already exists in database')
        }
    },

    async bookList(req,res){
        try{
        const books_in_database = await Library.find()
        return res.status(200).json(books_in_database)
        } catch(error){
            return res.json(error)
        }
    },

    async delete (req,res){
        try{
        const {_id} = req.params
        const book_delete = await Library.findByIdAndDelete({_id})
        return res.status(200).json(book_delete)
        } catch(error) {
            return res.json(error)
        }
    },

    async update(req,res){
        try{
        const {_id, book, author, year} = req.body
        const data = {book, author, year}
        const bookUpdate = await Library.findByIdAndUpdate({_id}, data, {new:true})
        return res.status(200).json(bookUpdate)
        }   catch(error){
            return res.json(error)
        }

    }
}