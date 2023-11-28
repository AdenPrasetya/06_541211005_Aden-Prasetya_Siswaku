const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    nis: {
        type: String,
        required: [true, 'Silahkan isi nis anda']
    },
    nama: {
        type: String,
        required: [true, 'Silahkan isi nama']
    },
    gender: {
        type: String,
        required: [true, 'Silahkan isi gender']
    },
    tgllahir: {
        type: String,
        required: [true, 'Silahkan isi tanggal lahir']
    },
    kelas: {
        type: String,
        required: [true, 'Silahkan isi kelas']
    },
    
})

module.exports = mongoose.model('siswakuu', UserSchema)