---
title: Layouting
description: ...
---

# Layouting

JDS Responsive Layout grid mampu beradaptasi untuk berbagai macam ukuran screen dan orientasi sehingga memastikan konsistensi tata letak di setiap ukuran tampilan.

<divider></divider>

## Responsive Layout

JDS Responsive Layout terdiri dari tiga komponen utama yaitu : Column, Gutter dan Margin. Perhatikan gambar di bawah ini :

<p>
  <boxed-example>
    <template #title>
      Anatomi JDS Responsive Layout
    </template>
  </boxed-example>
</p>

## Column

Elemen atau konten harus ditempatkan pada beberapa kolom. Kombinasi penempatan dapat disesuaikan sesuai dengan kebutuhan desain. Misalnya untuk tampilan dekstop dengan jumlah 12 kolom maka, elemen dapat ditempatkan dengan kombinasi **6 - 6**, **4 - 3** atau **3 - 4** atau lainnya.

<p>
  <boxed-example>
    <template #title>
      Contoh penempatan konten di Desktop
    </template>
    <template #footer>
      <b class="text-hijau-500">
        Catatan
      </b>
      <br />
      <span>
        Penempatan konten dapat disesuaikan
      </span>
    </template>
  </boxed-example>
</p>

<p>
  <boxed-example>
    <template #title>
      Contoh penempatan konten di Tablet
    </template>
    <template #footer>
      <b class="text-hijau-500">
        Catatan
      </b>
      <br />
      <span>
        Penempatan konten dapat disesuaikan
      </span>
    </template>
  </boxed-example>
</p>

<p>
  <boxed-example>
    <template #title>
      Contoh penempatan konten di Mobile
    </template>
    <template #footer>
      <b class="text-hijau-500">
        Catatan
      </b>
      <br />
      <span>
        Penempatan konten dapat disesuaikan
      </span>
    </template>
  </boxed-example>
</p>

## Gutter

Gutter adalah spasi antar kolom, biasa digunakan juga sebagai batas antar elemen. Ukuruan gutter dapat berbeda-beda menyesuaikan ukuran dari aplikasi. Masing-masing gutter menyesuaikan ukurannya berdasarkan Breakpoints.

<p>
  <boxed-example>
    <template #title>
      Gutter pada dekstop
    </template>
    <template #footer>
      <b class="text-hijau-500">
        Catatan
      </b>
      <br />
      <span>
        Pada dekstop ukuran Gutter adalah <b>24 px</b>.
      </span>
    </template>
  </boxed-example>
</p>

<p>
  <boxed-example>
    <template #title>
      Gutter pada tablet
    </template>
    <template #footer>
      <b class="text-hijau-500">
        Catatan
      </b>
      <br />
      <span>
        Pada tablet ukuran Gutter adalah <b>24 px</b>.
      </span>
    </template>
  </boxed-example>
</p>

<p>
  <boxed-example>
    <template #title>
      Gutter pada mobile
    </template>
    <template #footer>
      <b class="text-hijau-500">
        Catatan
      </b>
      <br />
      <span>
        Pada mobile ukuran Gutter adalah <b>16 px</b>.
      </span>
    </template>
  </boxed-example>
</p>

## Margin

Margin adalah batas antara konten/elemen dengan batas kiri dan kanan dari layar.  Masing-masing Margin menyesuaikan ukurannya berdasarkan Breakpoints.

<p>
  <boxed-example>
    <template #title>
      Margin pada desktop
    </template>
    <template #footer>
      <b class="text-hijau-500">
        Catatan
      </b>
      <br />
      <span>
        Pada dekstop ukuran Margin adalah <b>24 px</b>.
      </span>
    </template>
  </boxed-example>
</p>

<p>
  <boxed-example>
    <template #title>
      Margin pada tablet
    </template>
    <template #footer>
      <b class="text-hijau-500">
        Catatan
      </b>
      <br />
      <span>
        Pada tablet ukuran Margin adalah <b>24 px</b>.
      </span>
    </template>
  </boxed-example>
</p>

<p>
  <boxed-example>
    <template #title>
      Margin pada mobile
    </template>
    <template #footer>
      <b class="text-hijau-500">
        Catatan
      </b>
      <br />
      <span>
        Pada mobile ukuran Margin adalah <b>16 px</b>.
      </span>
    </template>
  </boxed-example>
</p>

### Column, Gutter, Margin Treatment

Terdapat beberapa hal yang perlu diperhatikan ketika menggunakan Column, diantaranya :

1. Tempatkan elemen hanya di dalam column.

  Elemen harus dimasukkan dalam Column dan pastikan lebar elemen tidak sampai masuk ke dalam Gutter, hal ini akan berlawanan dengan tujuan penggunaan grid.

  <p>
    <div class="flex flex-wrap items-stretch -mx-2">
      <div class="w-1/2 p-2">
        <opinionated-example good>
          <template>
            __gambar__
          </template>
          <template #description>
            Pastikan lebar dari elemen masih berada di dalam Column.
          </template>
        </opinionated-example>
      </div>
      <div class="w-1/2 p-2">
        <opinionated-example bad>
          <template>
            __gambar__
          </template>
          <template #description>
            Jangan sampai lebar dari elemen melebar sampai ke Gutter.
          </template>
        </opinionated-example>
      </div>
    </div>
  </p>

2. Column tidak difungsikan sebagai padding elemen.

  Column jangan difungsikan sebagai padding kecuali karena alasan tertentu.

  <p>
    <div class="flex flex-wrap items-stretch -mx-2">
      <div class="w-1/2 p-2">
        <opinionated-example good>
          <template>
            __gambar__
          </template>
          <template #description>
            Pastikan lebar dari elemen masih berada di dalam Column.
          </template>
        </opinionated-example>
      </div>
      <div class="w-1/2 p-2">
        <opinionated-example bad>
          <template>
            __gambar__
          </template>
          <template #description>
            Jangan sampai lebar dari elemen melebar sampai ke Gutter.
          </template>
        </opinionated-example>
      </div>
    </div>
  </p>

3. Gutter jangan sampai terlalu lebar atau sampai seukuran dengan kolom.

  Terlalu banyak space untuk Gutter, akan meyebabkan area elemen terlalu kecil dan menghilangkan unifikasi antar elemen.

  <p>
  <div class="flex flex-wrap items-stretch -mx-2">
    <div class="w-1/2 p-2">
      <opinionated-example good>
        <template>
          __gambar__
        </template>
        <template #description>
          Pastikan lebar dari elemen masih berada di dalam Column.
        </template>
      </opinionated-example>
    </div>
    <div class="w-1/2 p-2">
      <opinionated-example bad>
        <template>
          __gambar__
        </template>
        <template #description>
          Jangan sampai lebar dari elemen melebar sampai ke Gutter.
        </template>
      </opinionated-example>
    </div>
  </div>
  </p>

4. Margin jangan sampai terlalu lebar atau sampai seukuran dengan kolom.

  Sama seperti Gutter, jangan membuat Margin dengan space terlalu besar karena akan membuat area elemen akan menjadi lebih kecil.

  <p>
    <div class="flex flex-wrap items-stretch -mx-2">
      <div class="w-1/2 p-2">
        <opinionated-example good>
          <template>
            __gambar__
          </template>
          <template #description>
            Pastikan lebar dari elemen masih berada di dalam Column.
          </template>
        </opinionated-example>
      </div>
      <div class="w-1/2 p-2">
        <opinionated-example bad>
          <template>
            __gambar__
          </template>
          <template #description>
            Jangan sampai lebar dari elemen melebar sampai ke Gutter.
          </template>
        </opinionated-example>
      </div>
    </div>
  </p>

## Breakpoints

Setiap rentang breakpoints memiliki rekomendasi Column, Gutter dan Margin untuk masing-masing ukuran layar.

<p>
  <boxed-example>
    <template #title>
      Daftar Breakpoints dan Pengaturan Column, Gutter dan Margin
    </template>
  </boxed-example>
</p>