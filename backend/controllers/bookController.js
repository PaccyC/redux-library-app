const Book = require("../models/book.model");

const getBooks = async (req,res)=>{
     const books = await Book.find()
     res.status(200).json(books)
}
const addBook = async (req,res)=>{
    const {name,price,author} = req.body;
 const book = new Book({
    name,
    price,
    author
 })
 try{
    await book.save()
    res.status(201).json(book)
 }catch(error){
    res.status(400).json({error:error.message})
 }
}

const removeBook =async (req,res)=>{
    const {id}= req.params
 const book = await Book.findByIdAndDelete(id)
 res.status(200).json({message:"Book deleted successfully"})

}

const updateBook = async (req,res)=>{
 const {id}= req.params
 const {name,price,author} = req.body
 const book = await Book.findByIdAndUpdate(id,{
    name,
    price,
    author
 },{new:true})
 res.status(200).json(book)

}

module.exports ={
    getBooks,
    addBook,
    removeBook,
    updateBook
}