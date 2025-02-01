# Buku Induk

## Bagaimana cara meletakannya di server?

> [!NOTE]\
> Ikuti step by step cara ini

1. Clone repository ini. Tentukan dimana meletakannya. Bebas

```bash
  git https://github.com/AnandaCahya/backend-buku-induk
```

2. Pergi ke directory

```bash
  cd backend-buku-induk
```

3. Install dependencies

```bash
  npm install
```

4. Lakukan migration database (Untuk mempersiapkan database)

```bash
npm run db:migrate
```

> [!WARNING]\
> Kalau sebelumnya udah pernah nambahin database pakai migrate. Jalankan ini dulu sebelum no 4

```bash
npm run db:migrate:undo
```

> [!NOTE]\
> Data atau isi database udah pasti keriset. Kalau dirasa penting simpen dulu.


5. Lakukan seed database (Untuk mempersiapkan data pada database)

```bash
npm run db:seed
```

> [!NOTE]\
> Data dari migration akan di isi pakai ini. Termasuk akun admin, jurusan dan angkatan. Kalau akun admin gak ada request ke no `Nanda`

## Bagaimana cara menjalankan server? 

```bash
  npm start
```

## Progress

- [X] Membuat sistem migration
- [X] Membuat sistem seed
- [ ] Membuat database nilai
- [ ] Menambahkan route tambah nilai
- [ ] Menambahkan route mendapatkan semua nilai siswa (by id)
- [ ] Export identitas siswa (pdf)
- [ ] Export raport nilai siswa (excel)

## Dibuat oleh

Projet ini di buat oleh :

- [BWX1Y](https://github.com/bwx1y)
- [BigApple35](https://github.com/BigApple35)
- [AnandaCahya](https://github.com/AnandaCahya)