---
title: Warna
description: ...
---

# Warna

Warna merupakan salah satu bahasa visual dimana pemilihan dan penggunaan warna untuk produk-produk JDS dirancang agar membentuk kumpulan warna yang harmonis, seimbang, juga dengan memastikan agar semua teks dapat jelas terbaca.

## Sistem Warna

Dalam Sistem Warna JDS, terdapat pengelompokkan warna yang sering digunakan dalam merancang tampilan UI yang menarik, pengelompokkan warna tersebut terbagi menjadi **Warna Primer**, **Warna Sekunder** dan **Warna Netral**. Selain itu juga terdapat kombinasi turunan warna, dari warna primer, sekunder maupun netral.

Proses pemilihan warna juga selalu mengikuti standar kontras dan wrana AA dari [WCAG 2 Contrast and Color](https://) untuk memudahkan keterbacaan teks.

### Warna Primer

JDS sebelumnya telah memiliki kombinasi warna primer yaitu warna kuning, warna hijau dan warna biru. Warna primer adalah warna yang paling sering ditampilkan dalam komponen seperti tombol, header dll, dan merupakan warna branding yang mewakili sebuah produk.

<div class="flex -mx-2">
  <div class="mx-2">
    <jds-card flat>
      <readability-test-by-variant
        color-name="Kuning"
        variant="600">
      </readability-test-by-variant>
    </jds-card>
  </div>
  <div class="mx-2">
    <jds-card flat>
      <readability-test-by-variant
        color-name="Hijau"
        variant="600">
      </readability-test-by-variant>
    </jds-card>
  </div>
  <div class="mx-2">
    <jds-card flat>
      <readability-test-by-variant
        color-name="Biru"
        variant="600">
      </readability-test-by-variant>
    </jds-card>
  </div>
</div>

### Warna Sekunder

Warna sekunder memberikan pilihan aksen dari desain produk yang ditampilkan namun tidak menggambarkan branding dari produk tersebut. Umumnya penggunaan warna sekunder sangat minim dan biasanya hanya digunakan untuk feedback, notifikasi, pesan error dll.

<div class="flex -mx-2">
  <div class="mx-2">
    <jds-card flat>
      <readability-test-by-variant
        color-name="Pink"
        variant="400">
      </readability-test-by-variant>
    </jds-card>
  </div>
  <div class="mx-2">
    <jds-card flat>
      <readability-test-by-variant
        color-name="Merah"
        variant="500">
      </readability-test-by-variant>
    </jds-card>
  </div>
  <div class="mx-2">
    <jds-card flat>
      <readability-test-by-variant
        color-name="Ungu"
        variant="400">
      </readability-test-by-variant>
    </jds-card>
  </div>
</div>

### Warna Netral

Umumnya warna netral digunakan untuk teks atau background yang memiliki aksen yang tidak terlalu mencolok.

<div class="flex -mx-2 mb-2">
  <div class="mx-2">
    <jds-card flat>
      <readability-test
        color-name="Hitam"
        hex="#000000"
        :test-result="{
          light: {
            14: true,
            16: true,
            21: true,
          },
          dark: {
            14: false,
            16: false,
            21: false,
          }
        }">
      </readability-test>
    </jds-card>
  </div>
  <div class="mx-2">
    <jds-card flat>
      <readability-test-by-variant
        color-name="Abu"
        variant="900">
      </readability-test-by-variant>
    </jds-card>
  </div>
  <div class="mx-2">
    <jds-card flat>
      <readability-test
        color-name="Putih"
        hex="#FFFFF"
        :test-result="{
          light: {
            14: false,
            16: false,
            21: false,
          },
          dark: {
            14: true,
            16: true,
            21: true,
          }
        }">
      </readability-test>
    </jds-card>
  </div>
</div>

<div class="flex -mx-2">
  <div class="mx-2">
    <jds-card flat>
      <readability-test-by-variant
        color-name="AbuBiru"
        variant="900">
      </readability-test-by-variant>
    </jds-card>
  </div>
</div>


### Warna Turunan

Warna turunan adalah kumpulan semua warna (Primer, Skunder dan Netral) ditambah komposisi light (terang) dan dark (gelap) dari masing-masing warna tersebut. 

1. Warna Primer

<div class="flex items-center -mx-2 mb-4">
  <div class="mx-2">
    <jds-card flat>
      <readability-test-by-variant
        color-name="Kuning"
        variant="600">
      </readability-test-by-variant>
    </jds-card>
  </div>
  <color-palette-list-by-color-name
    class="mx-2"
    color-name="Kuning">
  </color-palette-list-by-color-name>
</div>

<div class="flex items-center -mx-2 mb-4">
  <div class="mx-2">
    <jds-card flat>
      <readability-test-by-variant
        color-name="Hijau"
        variant="600">
      </readability-test-by-variant>
    </jds-card>
  </div>
  <color-palette-list-by-color-name
    class="mx-2"
    color-name="Hijau">
  </color-palette-list-by-color-name>
</div>

<div class="flex items-center -mx-2 mb-4">
  <div class="mx-2">
    <jds-card flat>
      <readability-test-by-variant
        color-name="Biru"
        variant="600">
      </readability-test-by-variant>
    </jds-card>
  </div>
  <color-palette-list-by-color-name
    class="mx-2"
    color-name="Biru">
  </color-palette-list-by-color-name>
</div>

2. Warna Sekunder

<div class="flex items-center -mx-2 mb-4">
  <div class="mx-2">
    <jds-card flat>
      <readability-test-by-variant
        color-name="Pink"
        variant="400">
      </readability-test-by-variant>
    </jds-card>
  </div>
  <color-palette-list-by-color-name
    class="mx-2"
    color-name="Pink">
  </color-palette-list-by-color-name>
</div>

<div class="flex items-center -mx-2 mb-4">
  <div class="mx-2">
    <jds-card flat>
      <readability-test-by-variant
        color-name="Merah"
        variant="500">
      </readability-test-by-variant>
    </jds-card>
  </div>
  <color-palette-list-by-color-name
    class="mx-2"
    color-name="Merah">
  </color-palette-list-by-color-name>
</div>

<div class="flex items-center -mx-2 mb-4">
  <div class="mx-2">
    <jds-card flat>
      <readability-test-by-variant
        color-name="Ungu"
        variant="400">
      </readability-test-by-variant>
    </jds-card>
  </div>
  <color-palette-list-by-color-name
    class="mx-2"
    color-name="Ungu">
  </color-palette-list-by-color-name>
</div>

3. Warna Netral

<div class="flex items-center -mx-2 mb-4">
  <div class="mx-2">
    <jds-card flat>
      <readability-test-by-variant
        color-name="Abu"
        variant="900">
      </readability-test-by-variant>
    </jds-card>
  </div>
  <color-palette-list-by-color-name
    class="mx-2"
    color-name="Abu">
  </color-palette-list-by-color-name>
</div>

<div class="flex items-center -mx-2 mb-4">
  <div class="mx-2">
    <jds-card flat>
      <readability-test-by-variant
        color-name="AbuBiru"
        variant="900">
      </readability-test-by-variant>
    </jds-card>
  </div>
  <color-palette-list-by-color-name
    class="mx-2"
    color-name="AbuBiru">
  </color-palette-list-by-color-name>
</div>

## Penggunaan Warna
Tujuan penggunaan warna spesifik untuk kondisi atau komponen tertentu adalah untuk menarik perhatian user ke komponen yang penting dan untuk mengarahkan user agar melakukan aksi sesuai kondisi yang diinginkan. Sebagai contoh, kami menggunakan warna merah untuk memberitahukan pesan error, hal ini sangat membantu untuk mengkomunikasikan pesan secara visual.

Sebagai informasi tambahan kombinasi penggunaan warna dibawah ini adalah penggunaan warna default, jika memungkinkan, desainer dapat menggunakan kombinasi warna berbeda sesuai keinginannya.

Berikut adalah petunjuk dan cara untuk penggunaan setiap warna di Sistem Warna JDS. 