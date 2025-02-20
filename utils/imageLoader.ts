import { StaticImageData } from 'next/image'

// Option 1: If images are in public folder, return their paths directly
export function getImagePaths(): string[] {
    return [
        '/images/image1.jpg',
        '/images/image2.jpg',
        // ... add more image paths
    ]
}

// Option 2: If using imported images
import image1 from '@/public/images/image1.jpg'
import image2 from '@/public/images/image2.jpg'

export function getStaticImages(): StaticImageData[] {
    return [
        image1,
        image2,
        // ... add more imported images
    ]
}

