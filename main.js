// menambah libary firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js'

// menambah/mengimpor library firestore 
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  query,
  orderBy
    } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js'
// menambah konfigurasi 
const firebaseConfig = {
  apiKey: "AIzaSyDf84tuPbEIrQ4b2jcU0MeXjg4OY3kE-yU",
  authDomain: "insancemerlang-7c3fb.firebaseapp.com",
  projectId: "insancemerlang-7c3fb",
  storageBucket: "insancemerlang-7c3fb.firebasestorage.app",
  messagingSenderId: "775357332019",
  appId: "1:775357332019:web:25b794ac39eceb84f00146",
  measurementId: "G-2T6Q5VM932"
};


// insialisasi firebase 
const app =initializeApp(firebaseConfig);

// insialiasi firestore
const db = getFirestore(app)

// fungsi untuk menyimpan data ke firestore
export async function tambahData () {
    try {
        // menyimpan data ke firestore
        const referensiDokumen = await addDoc(collection(db, "siswa"),
            {
                nama: 'Agus',
                kelas: 'XI RPL'
            }
        )

        // menampilkan pesan berhasil
        console.log('Berhasil menambah data siswa')
    } catch (error) {
        // menampilkan pesan error
        console.log(error)
    }
}