# Resto Client

Boilerplate aplikasi React untuk memulai project baru dengan cepat.

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4 (CSS-first, lewat plugin `@tailwindcss/vite`)
- React Router v7 (`createBrowserRouter`) dengan protected route sederhana
- Axios + `ApiError` interceptor untuk handling error API
- Sonner untuk toast

## Menjalankan Development

```sh
npm install
npm run dev
```

Salin `.env.example` sesuai kebutuhan endpoint API kamu:

```sh
cp .env.example .env.development
```

`VITE_API_URL` adalah satu-satunya env var, dan nilainya di-bake ke bundle saat build (bukan runtime), jadi mengubahnya wajib diikuti rebuild.

## Perintah Lain

| Perintah | Deskripsi |
| --- | --- |
| `npm run build` | Typecheck (`tsc -b`) + build produksi ke `dist/` |
| `npm run lint` | ESLint |
| `npm run preview` | Preview hasil build secara lokal |
| `npm run docker:up` | Build image & jalankan container (compose prod) |
| `npm run docker:down` | Matikan container |

## Docker

`npm run docker:up` membaca `VITE_API_URL` dari `.env.production` dan mem-passing-nya sebagai build ARG ke `Dockerfile` (Vite env tidak bisa dibaca saat runtime nginx).

Untuk memakai starter ini di project baru, ganti nama/identitas:

- `name` di `package.json` dan `package-lock.json`
- `container_name` di `docker/compose.prod.yml`
- `<title>` di `index.html`
- Salam pembuka & footer di `LoginPage.tsx`
