---
title: Tipografi
description: ...
---

# Tipografi
Tipografi digunakan untuk menyajikan desain dan konten Anda sejelas dan se-efisien mungkin agar mudah terbaca dan menarik.

<divider></divider>

## Font
JDS Desain Sistem menggunakan **3 Tipe Font** dengan **2 tipe font Sans Seris** dan **1 Font Serif**.    


<divider></divider>

## Scaling
Scaling dalam tipografi adalah serangkaian ukuran tipografi yang berhubungan satu sama lain karena menggunakan ratio kelipatan ukuran yang sama. Tekniknya adalah dengan terlebih dahulu **menentukan ukuran font standar** kemudian **mengalikannya dengan ratio** yang dipilih untuk mendapatkan variasi ukuran font berikutnya.

Terdapat beberapa tipe scaling yang paling umum digunakan dalam tipografi, namun untuk JDS Design System hanya akan menggunakan **2 (dua)** tipe scaling yaitu **Perfect Fourth (dengan skala 1,333)** untuk ukuran desktop dan **Minor Third (dengan skala 1,2)** untuk uku8ran mobile. Penerapannya dalam tipografi dapat dilihat pada rumus berikut :

<p>
  <img src="/content-assets/desain_tipografi_scaling_rumus.png">
</p>

Dari hasil perhitungan diatas diperoleh:

<p>
  <jds-row>
    <jds-column col="1">
      <img src="/content-assets/desain_tipografi_scaling_perfect-fourth-scale.png">
    </jds-column>
    <jds-column col="1">
      <img src="/content-assets/desain_tipografi_scaling_minor-third-scale.png">
    </jds-column>
  </jds-row>
</p>

<divider></divider>

## Line Height
adalah besar jarak antara satu baris dengan baris di bawahnya. Penggunaan line-height yang tepat dapat menciptakan harmoni dari tampilan visual yang disajikan.

<p>
  <jds-row>
    <jds-column col="9/12">
      <img src="/content-assets/desain_tipografi_line-height_contoh-1.png">
    </jds-column>
  </jds-row>
</p>

Berbeda ketika menentukan ukuran font, dalam menentukan line-height, ratio yang digunakan adalah Golden Ratio dengan skala 1.618. Penerapan dalam tipografi dapat dilihat dengan rumus berikut :

<p>
  <jds-row>
    <jds-column col="9/12">
      <img src="/content-assets/desain_tipografi_line-height_rumus.png">
    </jds-column>
  </jds-row>
</p>

<divider></divider>

## Heading
Dibawah ini adalah beberapa ukuran Heading yang dapat digunakan dalam merancang interface untuk produk-produk Jabar Digital Service.

<p>
  <img src="/content-assets/desain_tipografi_heading_desktop.png">
  <br>
  <img src="/content-assets/desain_tipografi_heading_mobile.png">
</p>

### Spasi Heading
Terdapat beberapa aturan pada spasi Heading yang digunakan:
1. Heading dengan Body
    
  Ketika akan menampilkan heading dengan body teks, maka spasi (space) diantara heading dan body adalah 8 px, hal ini sesuai dengan Law of Proximity. Perhatikan contoh dibawah ini :

  <jds-row>
    <jds-column col="6/12">
      <img src="/content-assets/desain_tipografi_spacing_heading-to-body_good.png">
    </jds-column>
    <jds-column col="6/12">
      <img src="/content-assets/desain_tipografi_spacing_heading-to-body_bad.png">
    </div>
  </div>
        
2. Heading dengan Heading

  Terkadang dalam desain kita ingin menampilkan judul dengan menggabungkan beberapa tipe Heading. Penting untuk diperhatikan, karena setiap tipe heading telah memiliki line-height masing-masing maka, space yang digunakan antar heading teks tersebut adalah nilai negatif (< 0) dan gunakan spacing sebesar -8 px dan kelipatannya. Lebih lanjut terkait penggunaan spacing grid 8 dapat dilihat disini.
  Perhatikan contoh dibawah ini :

  <jds-row>
    <jds-column col="6/12">
      <img src="/content-assets/desain_tipografi_spacing_heading-to-heading_good.png">
    </jds-column>
    <jds-column col="6/12">
      <img src="/content-assets/desain_tipografi_spacing_heading-to-heading_bad.png">
    </div>
  </div>
        
3. Heading Lebih Dari Satu Baris

  Jika heading teksnya dibuat lebih dari satu baris dan memiliki ukuran/tipe yang sama antar heading-nya maka, space yang digunakan antar heading teks tersebut adalah nilai negatif (< 0) dengan spacing -8 px dan kelipatannya. Selain itu semakin besar ukuran heading teksnya maka, semakin kecil ukuran spacing-nya dan sebaliknya. 
  
  <jds-row>
    <jds-column col="1">
      <img src="/content-assets/desain_tipografi_spacing_heading-multiline.png">
    </div>
  </div>
        

### Kontras Heading
Kontras pada Heading dibutuhkan ketika akan menampilkan hierarki visual.
1. Kontras pada Ukuran (Size)

   Konsep kontras ini cukup sederhana, dimana untuk menciptakan hirarki visual, teks yang dianggap memiliki peranan lebih penting ditampilkan dengan ukuran font yang lebih besar, sedangkan teks pendukung menggunakan ukuran font yang lebih kecil. Perhatikan contoh dibawah ini :
   
  <jds-row>
    <jds-column col="6/12">
      <img src="/content-assets/desain_tipografi_heading-contrast_size_good.png">
    </jds-column>
    <jds-column col="6/12">
      <img src="/content-assets/desain_tipografi_heading-contrast_size_good-2.png">
    </jds-column>
    <jds-column col-lg="1">
      <img src="/content-assets/desain_tipografi_heading-contrast_size_bad.png">
    </jds-column>
  </jds-row>

2. Kontras pada Ketebalan (Weight)

    Membuat huruf tebal atau tipis adalah cara lain dalam membuat hierarki yang mudah diidentifikasi bahkan oleh non-desainer. Dimana teks untuk elemen utama (Heading) selalu lebih tebal dibanding teks elemen pendukung (Body). Perhatikan contoh dibawah ini :
    
  <jds-row>
    <jds-column col="6/12">
      <img src="/content-assets/desain_tipografi_heading-contrast_weight_good.png">
    </jds-column>
    <jds-column col="6/12">
      <img src="/content-assets/desain_tipografi_heading-contrast_weight_bad.png">
    </jds-column>
  </jds-row>

3. Kontras dengan Font 

    Menggunakan kombinasi huruf yang berbeda juga dapat membuat kontras yang baik untuk menunjukkan hierarki visual. Perhatikan contoh dibawah ini :

  <jds-row>
    <jds-column>
      <img src="/content-assets/desain_tipografi_heading-contrast_font_good.png">
    </jds-column>
  </jds-row>

<divider></divider>

## Paragraf
Dibawah ini adalah beberapa ukuran untuk subtitle, body, endnote dan footnote teks dalam paragraf yang dapat digunakan dalam merancang interface untuk produk-produk Jabar Digital Service.

<p>
  <img src="/content-assets/desain_tipografi_paragraf_desktop.png">
  <br>
  <img src="/content-assets/desain_tipografi_paragraf_mobile.png">
</p>

<divider></divider>

### Subtitle
Subtitle adalah bentuk teks yang ukurannya lebih kecil daripada heading, biasa digunakan sebagai pelengkap dan memiliki panjang teks yang pendek (kurang lebih 40 karakter). 

<p>
  <img src="/content-assets/desain_tipografi_subtitle.png">
</p>

<divider></divider>

### Body Teks
1. Ukuran Font

    Ukuran font minimum untuk Body teks adalah 16 px untuk tampilan layar yang lebih lebar (dekstop) dan minimum 13 px untuk tampilan layar yang kecil (mobile). Hal ini tentunya dimaksudkan untuk kemudahan keterbacaan.
    
    <jds-row>
      <jds-column col="6/12">
        <img src="/content-assets/desain_tipografi_body-teks_font-size_good.png">
      </jds-column>
      <jds-column col="6/12">
        <img src="/content-assets/desain_tipografi_body-teks_font-size_bad.png">
      </jds-column>
    </jds-row>
         
2. Huruf Kapital

   Penggunaan huruf kapital dapat membantu meningkatkan hierarki visual, namun sebaiknya hindari penggunaan huruf kapital untuk body teks, terutama untuk kalimat yang panjang karena dapat menyulitkan keterbacaan.

    <jds-row>
      <jds-column col="6/12">
        <img src="/content-assets/desain_tipografi_body-teks_capital_good.png">
      </jds-column>
      <jds-column col="6/12">
        <img src="/content-assets/desain_tipografi_body-teks_capital_bad.png">
      </jds-column>
    </div>

3. Ketebalan

    Ketebalan huruf pada body teks dapat digunakan untuk menunjukkan bahwa teks tersebut adalah sesuatu yang penting.
    
    <jds-row>
      <jds-column col="6/12">
        <img src="/content-assets/desain_tipografi_body-teks_weight_good.png">
      </jds-column>
      <jds-column col="6/12">
        <img src="/content-assets/desain_tipografi_body-teks_weight_bad.png">
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
  <img src="/content-assets/desain_tipografi_line-length_desktop.png">
  <br>
  <img src="/content-assets/desain_tipografi_line-length_mobile.png">
</p>

<divider></divider>

### Spasi Paragraf
adalah besar jarak antara paragraf yang satu dengan yang lainnya. 

<p>
  <img src="/content-assets/desain_tipografi_paragraph-spacing_contoh.png">
</p>

Dalam menentukan spasi paragraf, skala yang digunakan sama dengan skala yang digunakan ketika menentukan line-height. **2 (dua) skala ratio** yang digunakan yaitu **Perfect Fourth (dengan skala 1.333)** untuk ukuran desktop dan **Minor Third (dengan skala 1.2)** untuk ukuran mobile. Penerapan spasi paragrafnya dapat dilihat pada rumus berikut :

<p>
  <img src="/content-assets/desain_tipografi_paragraph-spacing_rumus.png">
</p>

<divider></divider>

## Daftar/Lists

Terkadang menampilkan informasi dalam bentuk daftar/list adalah cara terbaik dalam menyampaikan informasi, karena biasanya user akan menganggap bahwa informasi yang disampaikan bersifat penting.

<p>
  <jds-row>
    <jds-column col="6/12">
      <img src="/content-assets/desain_tipografi_list_good.png">
    </jds-column>
    <jds-column col="6/12">
      <img src="/content-assets/desain_tipografi_list_bad.png">
    </jds-column>
  </jds-row>
</p>

Berikut terdapat beberapa panduan dalam menampilkan bullets dan numbering :
1. Gunakan panjang teks yang kurang lebih sama
    
    Jika memungkinkan buatlah daftar dengan panjang teks yang sama, sehingga user merasa semua teks penting secara hierarki dan mudah untuk dicerna.

  <jds-row>
    <jds-column col="6/12">
      <img src="/content-assets/desain_tipografi_list_length_good.png">
    </jds-column>
    <jds-column col="6/12">
      <img src="/content-assets/desain_tipografi_list_length_bad.png">
    </jds-column>
  </jds-row>

2. Gunakan numbering hanya jika daftar perlu urutan yang spesifik
    
    Penomoran atau numbering umumnya digunakan untuk menampilkan daftar yang perlu diurutkan secara spesifik, contohnya, langkah-langkah dari suatu prosedur. Jika urutan dari daftar tidak terlalu penting jangan menggunakan numbering.
    
  <jds-row>
    <jds-column col="6/12">
      <img src="/content-assets/desain_tipografi_list_numbering_good.png">
    </jds-column>
    <jds-column col="6/12">
      <img src="/content-assets/desain_tipografi_list_numbering_bad.png">
    </jds-column>
  </jds-row>

3. Tampilkan daftar dalam format style yang konsisten
    
  <jds-row>
    <jds-column col="6/12">
      <img src="/content-assets/desain_tipografi_list_formatting_good.png">
    </jds-column>
    <jds-column col="6/12">
      <img src="/content-assets/desain_tipografi_list_formatting_bad.png">
    </jds-column>
  </jds-row>
        
<divider></divider>

## Hyperlink

<p>
  <img src="/content-assets/desain_tipografi_hyperlink_desktop.png">
  <br>
  <img src="/content-assets/desain_tipografi_hyperlink_mobile.png">
</p>


Berikut  beberapa panduan dalam menggunakan teks hyperlink :
1. Gunakan warna dan underline pada teks sebagai penanda link

  <jds-row>
    <jds-column col="6/12">
      <img src="/content-assets/desain_tipografi_hyperlink_1_do.png">
    </jds-column>
    <jds-column col="6/12">
      <img src="/content-assets/desain_tipografi_hyperlink_1_dont.png">
    </jds-column>
  </jds-row>

2. Jangan gunakan warna teks atau underline pada teks selain hyperlink

  <jds-row>
    <jds-column col="1">
      <img src="/content-assets/desain_tipografi_hyperlink_2_dont.png">
    </jds-column>
  </jds-row>

3. Jangan gunakan ukuran teks yang kecil untuk menunjukkan hyperlink

  <jds-row>
    <jds-column col="6/12">
      <img src="/content-assets/desain_tipografi_hyperlink_3_do.png">
    </jds-column>
    <jds-column col="6/12">
      <img src="/content-assets/desain_tipografi_hyperlink_3_dont.png">
    </jds-column>
  </jds-row>
