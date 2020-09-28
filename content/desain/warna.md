---
title: Warna
description: ...
colorUsages:
  Abu:
    900:
      main:
      - Teks judul/title
      - Teks label input
      alt:
      - Di semua tempat yang dibutuhkan
    800:
      main:
      - Teks body
      - Teks deskripsi
      alt:
      - Teks subjudul
      - Icon
      - Link
    600:
      main:
      - State inaktif icon
      alt:
      - Teks deskripsi
    500:
      main:
      - Teks tombol sekunder
      - Teks tombol disable
      alt:
      - Icon
    400:
      main:
      - Border input
      - Separator/divider
      alt:
      - Di semua tempat yang dibutuhkan
    300:
      main:
      - Border tombol sekunder
      alt:
      - Di semua tempat yang dibutuhkan
  BiruAbu:
    700:
      main:
      - Teks link active
      alt:
      - Di semua tempat yang dibutuhkan 
    900:
      main:
      - Teks judul/title
      alt:
      - Di semua tempat yang dibutuhkan
  Hijau:
    600:
      main:
      - Tombol primer/utama
      - State dan teks positif
      - State dan teks sukses
      - Aksi utama
      alt:
      - Teks subjudul
      - Warna latar info
      - Warna latar pesan
      - Teks Link
    700:
      main:
      - Tombol hover state
      alt:
      - Di semua tempat yang dibutuhkan
    800:
      main:
      - Tombol aktif/klik state
      alt:
      - Di semua tempat yang dibutuhkan
  Biru:
    600:
      main:
      - Teks link
      alt:
      - Di semua tempat yang dibutuhkan
    800:
      main:
      - Teks link hover
      alt:
      - Di semua tempat yang dibutuhkan
  Ungu:
    700:
      main:
      - Teks link visited
      alt:
      - Di semua tempat yang dibutuhkan
  Merah:
    700:
      main:
      - Semua teks error
      - Border error
      alt:
      - Di semua tempat yang dibutuhkan
    900:
      main:
      - State negatif (aksi, tombol)
      alt:
      - Warna latar info
      - Warna latar pesan
  Kuning:
    700:
      main:
      - State warning
      alt:
      - Border warning
      - Di semua tempat yang dibutuhkan

---

# Warna

Warna merupakan salah satu bahasa visual dimana pemilihan dan penggunaan warna untuk produk-produk JDS dirancang agar membentuk kumpulan warna yang harmonis, seimbang, juga dengan memastikan agar semua teks dapat jelas terbaca.

<divider></divider>

## Sistem Warna

Dalam Sistem Warna JDS, terdapat pengelompokkan warna yang sering digunakan dalam merancang tampilan UI yang menarik, pengelompokkan warna tersebut terbagi menjadi **Warna Primer**, **Warna Sekunder** dan **Warna Netral**. Selain itu juga terdapat kombinasi turunan warna, dari warna primer, sekunder maupun netral.

Proses pemilihan warna juga selalu mengikuti standar kontras dan wrana AA dari [WCAG 2 Contrast and Color](https://) untuk memudahkan keterbacaan teks.

### Warna Primer

JDS sebelumnya telah memiliki kombinasi warna primer yaitu warna kuning, warna hijau dan warna biru. Warna primer adalah warna yang paling sering ditampilkan dalam komponen seperti tombol, header dll, dan merupakan warna branding yang mewakili sebuah produk.

<p>
  <jds-row>
    <jds-column col-lg="4/12">
      <jds-card flat block>
        <readability-test
          color-name="Kuning"
          variant="600">
        </readability-test>
      </jds-card>
    </jds-column>
    <jds-column col-lg="4/12">
      <jds-card flat block>
        <readability-test
          color-name="Hijau"
          variant="600">
        </readability-test>
      </jds-card>
    </jds-column>
    <jds-column col-lg="4/12">
      <jds-card flat block>
        <readability-test
          color-name="Biru"
          variant="600">
        </readability-test>
      </jds-card>
    </jds-column>
  </jds-row>
</p>

### Warna Sekunder

Warna sekunder memberikan pilihan aksen dari desain produk yang ditampilkan namun tidak menggambarkan branding dari produk tersebut. Umumnya penggunaan warna sekunder sangat minim dan biasanya hanya digunakan untuk feedback, notifikasi, pesan error dll.

<p>
  <jds-row>
    <jds-column col-lg="4/12">
      <jds-card flat block>
        <readability-test
          color-name="Pink"
          variant="400">
        </readability-test>
      </jds-card>
    </jds-column>
    <jds-column col-lg="4/12">
      <jds-card flat block>
        <readability-test
          color-name="Merah"
          variant="500">
        </readability-test>
      </jds-card>
    </jds-column>
    <jds-column col-lg="4/12">
      <jds-card flat block>
        <readability-test
          color-name="Ungu"
          variant="400">
        </readability-test>
      </jds-card>
    </jds-column>
  </jds-row>
</p>

### Warna Netral

Umumnya warna netral digunakan untuk teks atau background yang memiliki aksen yang tidak terlalu mencolok.

<p>
  <jds-row>
    <jds-column col-lg="4/12">
      <jds-card flat block>
        <readability-test
          color-name="Hitam"
          variant="default">
        </readability-test>
      </jds-card>
    </jds-column>
    <jds-column col-lg="4/12">
      <jds-card flat block>
        <readability-test
          color-name="Abu"
          variant="900">
        </readability-test>
      </jds-card>
    </jds-column>
    <jds-column col-lg="4/12">
      <jds-card flat block>
        <readability-test
          color-name="Putih"
          variant="default">
        </readability-test>
      </jds-card>
    </jds-column>
  </jds-row>
</p>

<p>
  <jds-row>
    <jds-column col-lg="4/12">
      <jds-card flat block>
        <readability-test
          color-name="BiruAbu"
          variant="900">
        </readability-test>
      </jds-card>
    </jds-column>
    <jds-column col-lg="4/12"></jds-column>
    <jds-column col-lg="4/12"></jds-column>
  </jds-row>
</p>


### Warna Turunan

Warna turunan adalah kumpulan semua warna (Primer, Skunder dan Netral) ditambah komposisi light (terang) dan dark (gelap) dari masing-masing warna tersebut. 

1. Warna Primer

<p>
  <jds-row align="center">
    <jds-column col-lg="4/12">
      <jds-card flat block>
        <readability-test
          color-name="Kuning"
          variant="600">
        </readability-test>
      </jds-card>
    </jds-column>
    <jds-column col-lg="8/12">
      <color-palette
        color-name="Kuning">
      </color-palette>
    </jds-column>
  </jds-row>

  <jds-row align="center">
    <jds-column col-lg="4/12">
      <jds-card flat block>
        <readability-test
          color-name="Hijau"
          variant="600">
        </readability-test>
      </jds-card>
    </jds-column>
    <jds-column col-lg="8/12">
      <color-palette
        color-name="Hijau">
      </color-palette>
    </jds-column>
  </jds-row>

  <jds-row align="center">
    <jds-column col-lg="4/12">
      <jds-card flat block>
        <readability-test
          color-name="Biru"
          variant="600">
        </readability-test>
      </jds-card>
    </jds-column>
    <jds-column col-lg="8/12">
      <color-palette
        color-name="Biru">
      </color-palette>
    </jds-column>
  </jds-row>
</p>

2. Warna Sekunder

<p>
  <jds-row align="center">
    <jds-column col-lg="4/12">
      <jds-card flat block>
        <readability-test
          color-name="Pink"
          variant="400">
        </readability-test>
      </jds-card>
    </jds-column>
    <jds-column col-lg="8/12">
      <color-palette
        color-name="Pink">
      </color-palette>
    </jds-column>
  </jds-row>

  <jds-row align="center">
    <jds-column col-lg="4/12">
      <jds-card flat block>
        <readability-test
          color-name="Merah"
          variant="500">
        </readability-test>
      </jds-card>
    </jds-column>
    <jds-column col-lg="8/12">
      <color-palette
        color-name="Merah">
      </color-palette>
    </jds-column>
  </jds-row>

  <jds-row align="center">
    <jds-column col-lg="4/12">
      <jds-card flat block>
        <readability-test
          color-name="Ungu"
          variant="400">
        </readability-test>
      </jds-card>
    </jds-column>
    <jds-column col-lg="8/12">
      <color-palette
        color-name="Ungu">
      </color-palette>
    </jds-column>
  </jds-row>
</p>

3. Warna Netral

<p>
  <jds-row align="center">
    <jds-column col-lg="4/12">
      <jds-card flat block>
        <readability-test
          color-name="Abu"
          variant="900">
        </readability-test>
      </jds-card>
    </jds-column>
    <jds-column col-lg="8/12">
      <color-palette
        color-name="Abu">
      </color-palette>
    </jds-column>
  </jds-row>
  <jds-row align="center">
    <jds-column col-lg="4/12">
      <jds-card flat block>
        <readability-test
          color-name="BiruAbu"
          variant="900">
        </readability-test>
      </jds-card>
    </jds-column>
    <jds-column col-lg="8/12">
      <color-palette
        color-name="BiruAbu">
      </color-palette>
    </jds-column>
  </jds-row>
</p>

## Penggunaan Warna
Tujuan penggunaan warna spesifik untuk kondisi atau komponen tertentu adalah untuk menarik perhatian user ke komponen yang penting dan untuk mengarahkan user agar melakukan aksi sesuai kondisi yang diinginkan. Sebagai contoh, kami menggunakan warna merah untuk memberitahukan pesan error, hal ini sangat membantu untuk mengkomunikasikan pesan secara visual.

Sebagai informasi tambahan kombinasi penggunaan warna dibawah ini adalah penggunaan warna default, jika memungkinkan, desainer dapat menggunakan kombinasi warna berbeda sesuai keinginannya.

Berikut adalah petunjuk dan cara untuk penggunaan setiap warna di Sistem Warna JDS. 

<p>
  <boxed-example>
    <template #title>
      Daftar penggunaan warna default pada desain UI Produk JDS
    </template>
    <template #subtitle>
      Klik pada kode hexa untuk mengcopy kode warnanya.
    </template>
    <table-of-usages :usages="colorUsages">
    </table-of-usages>
  </boxed-example>
</p>