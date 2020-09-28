---
title: Tipografi
description: ...
---

# Tipografi
Tipografi digunakan untuk menyajikan desain dan konten Anda sejelas dan se-efisien mungkin agar mudah terbaca dan menarik.

<divider></divider>

## Font
JDS Desain Sistem menggunakan **3 Tipe Font** dengan **2 tipe font Sans Seris** dan **1 Font Serif**.    

_gambar_

<divider></divider>

## Scaling
Scaling dalam tipografi adalah serangkaian ukuran tipografi yang berhubungan satu sama lain karena menggunakan ratio kelipatan ukuran yang sama. Tekniknya adalah dengan terlebih dahulu **menentukan ukuran font standar** kemudian **mengalikannya dengan ratio** yang dipilih untuk mendapatkan variasi ukuran font berikutnya.

Terdapat beberapa tipe scaling yang paling umum digunakan dalam tipografi, namun untuk JDS Design System hanya akan menggunakan **2 (dua)** tipe scaling yaitu **Perfect Fourth (dengan skala 1,333)** untuk ukuran desktop dan **Minor Third (dengan skala 1,2)** untuk uku8ran mobile. Penerapannya dalam tipografi dapat dilihat pada rumus berikut :

_gambar_

Dari hasil perhitungan diatas diperoleh:

<p>
  <jds-row>
    <jds-column col="1">
      <boxed-example>
        <template #title>
          Desktop Font Size - Perfect Fourth Scale (1.333)
        </template>
      </boxed-example>
    </jds-column>
    <jds-column col="1">
      <boxed-example>
        <template #title>
          Mobile Font Size - Minor Third (1.2)
        </template>
      </boxed-example>
    </jds-column>
  </jds-row>
</p>

<divider></divider>

## Line Height
adalah besar jarak antara satu baris dengan baris di bawahnya. Penggunaan line-height yang tepat dapat menciptakan harmoni dari tampilan visual yang disajikan.

<p>
  <boxed-example>
  </boxed-example>
</p>

Berbeda ketika menentukan ukuran font, dalam menentukan line-height, ratio yang digunakan adalah Golden Ratio dengan skala 1.618. Penerapan dalam tipografi dapat dilihat dengan rumus berikut :

<p>
  <boxed-example>
  </boxed-example>
</p>

<divider></divider>

## Heading
Dibawah ini adalah beberapa ukuran Heading yang dapat digunakan dalam merancang interface untuk produk-produk Jabar Digital Service.

<p>
  <jds-row>
    <jds-column>
      <boxed-example>
        <template #title>
          Penggunaan Heading untuk Desktop
        </template>
      </boxed-example>
    </jds-column>
    <jds-column>
      <boxed-example>
        <template #title>
          Penggunaan Heading untuk Mobile
        </template>
      </boxed-example>
    </jds-column>
  </jds-row>
</p>

### Spasi Heading
Terdapat beberapa aturan pada spasi Heading yang digunakan:
1. Heading dengan Body
    
  Ketika akan menampilkan heading dengan body teks, maka spasi (space) diantara heading dan body adalah 8 px, hal ini sesuai dengan Law of Proximity. Perhatikan contoh dibawah ini :

  <jds-row>
    <jds-column col-lg="6/12">
      <opinionated-example good>
        <template #description>
          Gunakan space <b>8 px</b> untuk jarak antara heading teks dan body teks.
        </template>
      </opinionated-example>
    </jds-column>
    <jds-column col-lg="6/12">
      <opinionated-example bad>
        <template #description>
          Jangan gunakan space lebih dari (>) <b>8 px</b> untuk jarak antara heading teks dan body teks.
        </template>
      </opinionated-example>
    </div>
  </div>
        
2. Heading dengan Heading

  Terkadang dalam desain kita ingin menampilkan judul dengan menggabungkan beberapa tipe Heading. Penting untuk diperhatikan, karena setiap tipe heading telah memiliki line-height masing-masing maka, space yang digunakan antar heading teks tersebut adalah nilai negatif (< 0) dan gunakan spacing sebesar -8 px dan kelipatannya. Lebih lanjut terkait penggunaan spacing grid 8 dapat dilihat disini.
  Perhatikan contoh dibawah ini :

  <jds-row>
    <jds-column col-lg="6/12">
      <opinionated-example good>
        <template #description>
          Gunakan nilai <b>negatif (< 0)</b> dengan nilai antara <b>-8 px</b> dan kelipatannya untuk space antara heading yang satu dengan yang lain.
        </template>
      </opinionated-example>
    </jds-column>
    <jds-column col-lg="6/12">
      <opinionated-example bad>
        <template #description>
          Jangan gunakan space dengan nilai positif <b>(>=) 0 px</b>, untuk space Heading yang satu dengan yang lain.
        </template>
      </opinionated-example>
    </div>
  </div>
        
3. Heading Lebih Dari Satu Baris

  Jika heading teksnya dibuat lebih dari satu baris dan memiliki ukuran/tipe yang sama antar heading-nya maka, space yang digunakan antar heading teks tersebut adalah nilai negatif (< 0) dengan spacing -8 px dan kelipatannya. Selain itu semakin besar ukuran heading teksnya maka, semakin kecil ukuran spacing-nya dan sebaliknya. 
  
  <jds-row>
    <jds-column col="1">
      <opinionated-example good>
        <template #description>
          Semakin besar ukuran heading maka, spacing-nya semakin kecil dengan minimal spacing adalah -8 px.
        </template>
      </opinionated-example>
    </div>
  </div>
        

### Kontras Heading
Kontras pada Heading dibutuhkan ketika akan menampilkan hierarki visual.
1. Kontras pada Ukuran (Size)

   Konsep kontras ini cukup sederhana, dimana untuk menciptakan hirarki visual, teks yang dianggap memiliki peranan lebih penting ditampilkan dengan ukuran font yang lebih besar, sedangkan teks pendukung menggunakan ukuran font yang lebih kecil. Perhatikan contoh dibawah ini :
   
  <jds-row>
    <jds-column col-lg="6/12">
      <opinionated-example good>
        <template #description>
          Gunakan ukuran Heading dengan ukuran minimal 1.5 kali dari ukuran body teks.
        </template>
      </opinionated-example>
    </jds-column>
    <jds-column col-lg="6/12">
      <opinionated-example good>
        <template #description>
          Gunakan perbedaan ukuran antara elemen utama dan pendukung pada heading untuk menciptakan hirarki visual.
        </template>
      </opinionated-example>
    </jds-column>
    <jds-column col-lg="1">
      <opinionated-example bad>
        <template #description>
          Jangan gunakan ukuran Heading yang sama dengan body teks, hal ini dapat menghilangkan hirarki antara Heading dan body teks.
        </template>
      </opinionated-example>
    </jds-column>
  </jds-row>

2. Kontras pada Ketebalan (Weight)

    Membuat huruf tebal atau tipis adalah cara lain dalam membuat hierarki yang mudah diidentifikasi bahkan oleh non-desainer. Dimana teks untuk elemen utama (Heading) selalu lebih tebal dibanding teks elemen pendukung (Body). Perhatikan contoh dibawah ini :
    
    <jds-row>
      <jds-column col-lg="6/12">
        <opinionated-example good>
          <template #description>
            Gunakan ketebalan yang berbeda antara Heading dan Body teks.
          </template>
        </opinionated-example>
      </jds-column>
      <jds-column col-lg="6/12">
        <opinionated-example bad>
          <template #description>
            Jangan gunakan ketebalan yang sama atau bahkan lebih tipis antara Heading dan Body teks.
          </template>
        </opinionated-example>
      </jds-column>
    </jds-row>

3. Kontras dengan Font 

    Menggunakan kombinasi huruf yang berbeda juga dapat membuat kontras yang baik untuk menunjukkan hierarki visual. Perhatikan contoh dibawah ini :

    <jds-row>
      <jds-column>
        <opinionated-example good>
          <template #description>
            Gunakan kombinasi font yang berbeda untuk menciptakan kontras.
          </template>
        </opinionated-example>
      </jds-column>
    </jds-row>

<divider></divider>

## Paragraf
Dibawah ini adalah beberapa ukuran untuk subtitle, body, endnote dan footnote teks dalam paragraf yang dapat digunakan dalam merancang interface untuk produk-produk Jabar Digital Service.

<p>
  <jds-row>
    <jds-column col="1">
      <boxed-example>
        <template #title>
          Body, Endnote, dan Footnote Teks untuk Desktop
        </template>
      </boxed-example>
    </jds-column>
    <jds-column col="1">
      <boxed-example>
        <template #title>
          Body, Endnote, dan Footnote Teks untuk Mobile
        </template>
      </boxed-example>
    </jds-column>
  </jds-row>
</p>

<divider></divider>

### Subtitle
Subtitle adalah bentuk teks yang ukurannya lebih kecil daripada heading, biasa digunakan sebagai pelengkap dan memiliki panjang teks yang pendek (kurang lebih 40 karakter). 

<jds-row>
  <jds-column col="1">
    <opinionated-example good>
    </opinionated-example>
  </jds-column>
</jds-row>
<divider></divider>

### Body Teks
1. Ukuran Font

    Ukuran font minimum untuk Body teks adalah 16 px untuk tampilan layar yang lebih lebar (dekstop) dan minimum 13 px untuk tampilan layar yang kecil (mobile). Hal ini tentunya dimaksudkan untuk kemudahan keterbacaan.
    
    <jds-row>
      <jds-column col-lg="6/12">
        <opinionated-example good>
          <template #description>
            Ukuran minimum untuk body teks adalah 16 px pada dekstop dan 13 px pada mobile.
          </template>
        </opinionated-example>
      </jds-column>
      <jds-column col-lg="6/12">
        <opinionated-example bad>
          <template #description>
            Ukuran font yang terlalu kecil akan menyulitkan keterbacaan terutama di layar yang kecil (mobile).
          </template>
        </opinionated-example>
      </jds-column>
    </jds-row>
         
2. Huruf Kapital

   Penggunaan huruf kapital dapat membantu meningkatkan hierarki visual, namun sebaiknya hindari penggunaan huruf kapital untuk body teks, terutama untuk kalimat yang panjang karena dapat menyulitkan keterbacaan.

    <jds-row>
      <jds-column col-lg="6/12">
        <opinionated-example good>
          <template #description>
            Gunakan huruf kapital hanya pada awal paragraf, nama orang, tempat atau menunjukkan waktu.
          </template>
        </opinionated-example>
      </jds-column>
      <jds-column col-lg="6/12">
        <opinionated-example bad>
          <template #description>
            Hindari penggunaan huruf kapital untuk kalimat yang panjang karena dapat menyulitkan keterbacaan.
          </template>
        </opinionated-example>
      </jds-column>
    </div>

3. Ketebalan

    Ketebalan huruf pada body teks dapat digunakan untuk menunjukkan bahwa teks tersebut adalah sesuatu yang penting.
    
    <jds-row>
      <jds-column col-lg="6/12">
        <opinionated-example good>
          <template #description>
            Gunakan ketebalan huruf untuk menandakan sesuatu yang penting.
          </template>
        </opinionated-example>
      </jds-column>
      <jds-column col-lg="6/12">
        <opinionated-example bad>
          <template #description>
            Hindari penggunaan italic untuk menandakan sesuatu yang penting.
          </template>
        </opinionated-example>
      </jds-column>
    </div>
         
<divider></divider>

### Notes
Notes digunakan untuk memberikan penjelasan tambahan dalam suatu peragraf, biasanya berupa catatan atau informasi tambahan dan memiliki ukuran huruf paling kecil.

<divider></divider>

### Line Length
adalah lebar blok teks atau paragraf yang memiliki panjang garis maksimum sesuai dengan desain yang ditentukan. 
Di area yang lebih lebar seperti **dekstop** maka jumlah **character per line** (jumlah karakter dalam satu baris) sebaiknya berjumlah **95 karakter sampai 115 karakter**. sedangkan untuk tampilan mobile jumlah karakternya sebaiknya **40 Karakter sampai 60 karakter** per baris. 

<p>
  <jds-row>
    <jds-column col="1">
      <boxed-example>
        <template #title>
          Line Length untuk Desktop
        </template>
      </boxed-example>
    </jds-column>
    <jds-column col="1">
      <boxed-example>
        <template #title>
          Line Length untuk Mobile
        </template>
      </boxed-example>
    </jds-column>
  </jds-row>
</p>

<divider></divider>

### Spasi Paragraf
adalah besar jarak antara paragraf yang satu dengan yang lainnya. 

<p>
  <boxed-example>
  </boxed-example>
</p>

Dalam menentukan spasi paragraf, skala yang digunakan sama dengan skala yang digunakan ketika menentukan line-height. **2 (dua) skala ratio** yang digunakan yaitu **Perfect Fourth (dengan skala 1.333)** untuk ukuran desktop dan **Minor Third (dengan skala 1.2)** untuk ukuran mobile. Penerapan spasi paragrafnya dapat dilihat pada rumus berikut :

<p>
  <boxed-example>
  </boxed-example>
</p>

<divider></divider>

## Daftar/Lists

Terkadang menampilkan informasi dalam bentuk daftar/list adalah cara terbaik dalam menyampaikan informasi, karena biasanya user akan menganggap bahwa informasi yang disampaikan bersifat penting.

<jds-row>
  <jds-column col-lg="6/12">
    <opinionated-example good>
      <template #description>
        Gunakan bullets atau numbering untuk menampilkan daftar informasi, sehingga memudahkan keterbacaan.
      </template>
    </opinionated-example>
  </jds-column>
  <jds-column col-lg="6/12">
    <opinionated-example bad>
      <template #description>
        Jika tidak menggunakan bullets, user akan sulit memahami pentingnya informasi yang ingin disampaikan
      </template>
    </opinionated-example>
  </jds-column>
</jds-row>

Berikut terdapat beberapa panduan dalam menampilkan bullets dan numbering :
1. Gunakan panjang teks yang kurang lebih sama
    
    Jika memungkinkan buatlah daftar dengan panjang teks yang sama, sehingga user merasa semua teks penting secara hierarki dan mudah untuk dicerna.

    <jds-row>
      <jds-column col-lg="6/12">
        <opinionated-example good>
          <template #description>
            Panjang teks yang sama memudahkan user mencerna informasi dan terkesan tidak terlalu ramai.
          </template>
        </opinionated-example>
      </jds-column>
      <jds-column col-lg="6/12">
        <opinionated-example bad>
          <template #description>
            Penggunaan panjang teks yang berbeda dapat membuat daftar terkesan berantakan dan tidak seragam.
          </template>
        </opinionated-example>
      </jds-column>
    </jds-row>

2. Gunakan numbering hanya jika daftar perlu urutan yang spesifik
    
    Penomoran atau numbering umumnya digunakan untuk menampilkan daftar yang perlu diurutkan secara spesifik, contohnya, langkah-langkah dari suatu prosedur. Jika urutan dari daftar tidak terlalu penting jangan menggunakan numbering.
    
    <jds-row>
      <jds-column col-lg="6/12">
        <opinionated-example good>
          <template #description>
            Jika urutan pada daftar tidak terlalu penting, gunakan bullets.
          </template>
        </opinionated-example>
      </jds-column>
      <jds-column col-lg="6/12">
        <opinionated-example bad>
          <template #description>
            Penggunaan numbering pada contoh diatas, seakan-akan daftar diatas adalah urutan instruksi sehingga dapat membuat user salah paham.
          </template>
        </opinionated-example>
      </jds-column>
    </jds-row>

3. Tampilkan daftar dalam format style yang konsisten
    
    <jds-row>
      <jds-column col-lg="6/12">
        <opinionated-example good>
          <template #description>
            Selalu gunakan format style yang sama untuk memudahkan keterbacaan.
          </template>
        </opinionated-example>
      </jds-column>
      <jds-column col-lg="6/12">
        <opinionated-example bad>
          <template #description>
            Jangan gunakan format style yang berbeda-beda untuk menampilkan daftar teks.
          </template>
        </opinionated-example>
      </jds-column>
    </jds-row>
        
<divider></divider>

## Hyperlink

<p>
  <jds-row>
    <jds-column col="1">
      <boxed-example>
        <template #title>
          Hyperlink untuk Desktop
        </template>
      </boxed-example>
    </jds-column>
    <jds-column col="1">
      <boxed-example>
        <template #title>
          Hyperlink untuk Mobile
        </template>
      </boxed-example>
    </jds-column>
  </jds-row>
</p>

_gambar_

Berikut  beberapa panduan dalam menggunakan teks hyperlink :
1. Gunakan warna dan underline pada teks sebagai penanda link

    <jds-row>
      <jds-column col-lg="6/12">
        <opinionated-example good>
          <template #description>
            Secara umum penggunaan warna biru dan underline pada teks sudah menunjukkan pada user bahwa teks tersebut adalah hyperlink.
          </template>
        </opinionated-example>
      </jds-column>
      <jds-column col-lg="6/12">
        <opinionated-example bad>
          <template #description>
            Tidak menggunakan warna teks atau underline sebagai penanda link dapat mengaburkan user bahwa teks tersebut harusnya dapat diklik.
          </template>
        </opinionated-example>
      </jds-column>
    </jds-row>

2. Jangan gunakan warna teks atau underline pada teks selain hyperlink

    <jds-row>
      <jds-column col="1">
        <opinionated-example good>
          <template #description>
            Jangan gunakan warna yang berbeda dengan yang lainnya pada body teks dan jangan gunakan underline pada teks yang bukan merupakan link.
          </template>
        </opinionated-example>
      </jds-column>
    </jds-row>

3. Jangan gunakan ukuran teks yang kecil untuk menunjukkan hyperlink

    <jds-row>
      <jds-column col-lg="6/12">
        <opinionated-example good>
          <template #description>
            Gunakan ukuran font yang sama dengan body teks untuk menunjukkan hyperlink.
          </template>
        </opinionated-example>
      </jds-column>
      <jds-column col-lg="6/12">
        <opinionated-example bad>
          <template #description>
            Jangan menggunakan ukuran font yang lebih kecil dari ukuran body teks untuk hyperlink. 
          </template>
        </opinionated-example>
      </jds-column>
    </jds-row>
