---
title: Spacing
description: ...
---

# Spacing

Penggunaan spacing secara konsisten memberikan konsistensi untuk posisi elemen yang serta membangun keharmonisan dan kenyamanan dalam desain.

<divider></divider>

## 8px Grid System

8px Grid System adalah fondasi fundamental ketika mendesain visual element dalam JDS Design System mulai dari komponen, styling, spacing dll. 

Alasan utama kenapa menggunakan 8px Grid System ini karena grid system ini memiliki hasil scaling yang sempurna di tampilan layar yang berbeda-beda karena hasil perkaliannya menghasilkan bilangan bulat (misalkan skala di android @0.75 dan @1.5 ). Perhatikan gambar di bawah ini :

<p>
  <boxed-example>
    gambar
  </boxed-example>
</p>

### Kenapa Perlu Menggunakan Grid System?

Beberapa keunggulan menggunakan Grid System dalam mendesain UI :

- **Untuk Designer**, sebagai acuan untuk mempertahankan ritme dan konsistensi antar elemen, serta memudahkan dalam pengambilan keputusan dalam mendesain UI.

- **Untuk Developer**, memudahkan komunikasi dengan designer karena dapat dengan mudah memahami konsep layouting pada komponen yang di desain.

- **Untuk User**, memberikan tampilan visual yang lebih baik, rapih, konsisten sehingga memberikan pengaIaman penggunaan yang ramah, rapih dan berestetika.

### Mendesain dengan 8px Grid System

Perlu untuk diperhatikan bahwa sistem incremental seperti ini dapat terdiri dari berbagai tipe seperti 4px, 5px, 6px dan salah satunya adalah 8px. Semua sistem tersebut tidak ada yang salah karena yang paling penting adalah konsistensi penggunaan.

8px Grid System, menggunakan kelipatan 8px untuk mengatur jarak antar elemen dalam desain. Artinya, properti elemen seperti lebar, tinggi, margin, padding dll haruslah menggunakan kelipatan 8. Perhatikan contoh di bawah ini :

<p>
  <boxed-example>
    <template #title>
      Conton penggunaan spacer 8px grid untuk tombol
    </template>
    <template>
      <div>
        gambar
      </div>
    </template>
    <template #footer>
      &#x2217; Penggunaan scaling diatas hanya contoh dan bukan produk akhir desain.
    </template>
  </boxed-example>
  <br />
  <br />
  <boxed-example>
    <template #title>
      Conton penggunaan spacer 8px grid untuk input teks
    </template>
    <template>
      <div>
        gambar
      </div>
    </template>
    <template #footer>
      &#x2217; Penggunaan scaling diatas hanya contoh dan bukan produk akhir desain.
    </template>
  </boxed-example>
  <br />
  <br />
  <boxed-example>
    <template #title>
      Conton penggunaan spacer 8px grid pada beberapa komponen dalam desain
    </template>
    <template>
      <div>
        gambar
      </div>
    </template>
    <template #footer>
      &#x2217; Penggunaan scaling diatas hanya contoh dan bukan produk akhir desain.
    </template>
  </boxed-example>
</p>