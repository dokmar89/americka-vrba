import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
    try {
        const imagesDirectory = path.join(process.cwd(), 'public/galerie')
        const imageFiles = fs.readdirSync(imagesDirectory)
        const imagePaths = imageFiles.map(file => `/galerie/${file}`)
        
        return NextResponse.json({ images: imagePaths })
    } catch (error) {
        console.error('Error reading image directory:', error)
        return NextResponse.json({ images: [] }, { status: 500 })
    }
} 