import fs from 'fs';
import path from 'path';

export async function GET() {
  const dirPath = path.join(process.cwd(), "public/certifications/google");
  let images = [];

  try {
    // Lê os arquivos da pasta certificados
    images = fs.readdirSync(dirPath)
      .filter(file => file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.webp')) // Filtra apenas imagens
      .map(file => `/certifications/google/${file}`); // Corrige o caminho de saída
  } catch (error) {
    console.error("Erro ao ler os certificados:", error);
  }

  return new Response(JSON.stringify(images), {
    headers: { "Content-Type": "application/json" },
  });
}
