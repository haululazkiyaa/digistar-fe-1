// Task:
// 1. Aku mau style-nya tidak dipanggil berulang-ulang
// 2. Aku mau semua style-nya dijadikan variable
// 3. Aku mau value dar masing-masing box, diambl dar variable, bukan di harcoded
// 4. Aku mau item box menjadi child component dengan file yang terpisah,
// dan disimpan di folder "components"
// 5. Panggil component itu di App.js
// 6. Buat folder baru beranama constants, dan pindahkan variable items ke sana
// 7. Panggil variable items di App.js
// 8. Kita bikin state, dimana state itu value awalnya adalah dari constant
// 9. Kita tambahkan tombol "Tambah Item", ketika tombol di klik,
// maka akan menambahkan satu item lagi dibawahnya
// 10. Upload tugasnya ke akun github masing-masing, dan kirimkan link repo-nya

import "./App.css";

import Card from "./components/Card";
import { data } from "./constant/data";
import { useState } from "react";

function App() {
  const [items, setItems] = useState(data);

  const addHandler = () => {
    setItems([...items, { title: "New card's h2", subTitle: "New card's h3" }]);
  };

  return (
    <div className="App">
      <header>
        <h1>Task: Add three Card elements</h1>
      </header>
      {items.map((item, index) => (
        <Card item={item} key={item.title + index} />
      ))}
      <button onClick={addHandler}>Add Item</button>
    </div>
  );
}

export default App;
