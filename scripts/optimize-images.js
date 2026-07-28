// Script de uso puntual (no se shippea con el sitio) para optimizar las
// imagenes de /media: recomprime los JPG/PNG originales y genera variantes
// .webp usadas por las etiquetas <picture> e image-set() de css/style.css.
// Ejecutar: npm run optimize-images
"use strict";

const path = require("path");
const sharp = require("sharp");

const mediaDir = path.join(__dirname, "..", "media");

const carouselJobs = Array.from({ length: 10 }, (_, i) => ({
    input: `${i + 1}.jpg`,
    maxWidth: 700,
    jpegQuality: 78,
    webpQuality: 75
}));

const jobs = [
    ...carouselJobs,
    { input: "casco.jpg", maxWidth: 1200, jpegQuality: 75, webpQuality: 72 },
    { input: "fabric5.jpg", maxWidth: 1920, jpegQuality: 72, webpQuality: 70 }
];

async function processJpeg(job) {
    const inputPath = path.join(mediaDir, job.input);
    const base = job.input.replace(/\.jpg$/i, "");
    const tmpPath = path.join(mediaDir, `${base}.tmp.jpg`);
    const webpPath = path.join(mediaDir, `${base}.webp`);

    const image = sharp(inputPath).resize({ width: job.maxWidth, withoutEnlargement: true });

    await image.clone().jpeg({ quality: job.jpegQuality, mozjpeg: true }).toFile(tmpPath);
    await sharp(inputPath)
        .resize({ width: job.maxWidth, withoutEnlargement: true })
        .webp({ quality: job.webpQuality })
        .toFile(webpPath);

    const fs = require("fs");
    fs.renameSync(tmpPath, inputPath);

    console.log(`OK ${job.input} -> ${base}.webp`);
}

async function processLogo() {
    const inputPath = path.join(mediaDir, "logo-grupo-sidi.png");
    const tmpPath = path.join(mediaDir, "logo-grupo-sidi.tmp.png");
    const webpPath = path.join(mediaDir, "logo-grupo-sidi.webp");
    const touchIconPath = path.join(mediaDir, "apple-touch-icon.png");

    await sharp(inputPath)
        .resize({ width: 800, withoutEnlargement: true })
        .png({ quality: 85, compressionLevel: 9 })
        .toFile(tmpPath);

    await sharp(inputPath)
        .resize({ width: 800, withoutEnlargement: true })
        .webp({ quality: 85 })
        .toFile(webpPath);

    await sharp(inputPath)
        .resize(180, 180, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 1 } })
        .png()
        .toFile(touchIconPath);

    const fs = require("fs");
    fs.renameSync(tmpPath, inputPath);

    console.log("OK logo-grupo-sidi.png -> logo-grupo-sidi.webp + apple-touch-icon.png");
}

async function main() {
    for (const job of jobs) {
        await processJpeg(job);
    }
    await processLogo();
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
