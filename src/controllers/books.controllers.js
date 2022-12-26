const getBooks = (req, res)=>{
res.send('Estoy aqui en books');
}

const createBook = (req, res)=>{
    res.send('Estoy aqui creando books');
    }

    const updateBook = (req, res)=>{
        res.send('Estoy aqui actualizando books');
        }

        const deleteBook = (req, res)=>{
            res.send('Estoy aqui borrando books');
            }

module.exports = {
    getBooks, createBook, updateBook, deleteBook
}