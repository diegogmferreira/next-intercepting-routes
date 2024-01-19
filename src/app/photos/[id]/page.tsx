import { PhotoCard } from '@/components/photo-card'
import photos, { Photo } from '@/lib/models/photo'
import Link from 'next/link'

export default function PhotoPage({
  params: { id }
}: {
  params: { id: string }
}) {
  const photo: Photo = photos.find(p => p.id === id)!

  return (
    <section className='py-24'>
      <div className='container'>
        <div>
          <Link
            href='/photos'
            className='font-semibold italic text-sky-600 underline'
          >
            Back to photos
          </Link>
        </div>

        <div className='mt-10 w-1/3'>
          <PhotoCard photo={photo} />
        </div>
      </div>
    </section>
  )
}