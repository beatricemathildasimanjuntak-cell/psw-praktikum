
const tombol = document.querySelector("#muat");
const pesan = document.querySelector("#pesan");
const daftar = document.querySelector("#daftar");

async function muat() {
    tombol.disabled = true;

    try {
        const r = await fetch("./data/kegiatan.json");

        if (!r.ok) {
            throw new Error(`HTTP ${r.status}`);
        }

        const data = await r.json();

        if (!Array.isArray(data)) {
            throw new Error("Data harus array");
        }

        daftar.replaceChildren();

        for (const k of data) {
            if (typeof k.judul !== "string") {
                throw new Error("Judul tidak sesuai");
            }

            const li = document.createElement("li");
            li.textContent = k.judul;
            daftar.append(li);
        }

        if (data.length === 0) {
            pesan.textContent = "Belum ada kegiatan.";
        } else {
            pesan.textContent = "Kegiatan berhasil dimuat.";
        }

    } catch (error) {
        pesan.textContent = "Gagal memuat";
        console.error(error);

    } finally {
        tombol.disabled = false;
    }
}

tombol.addEventListener("click", muat);
