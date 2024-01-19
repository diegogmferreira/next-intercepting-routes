import { Modal } from "@/components/modal"
import { PhotoCard } from "@/components/photo-card"
import photos, { Photo } from "@/lib/models/photo"

export default function PhotoModal({params: {id}}: {params: {id: string}}) {
  const photo: Photo = photos.find(photo => photo.id === id)!

  return (
    <Modal>
      <PhotoCard photo={photo} />
    </Modal>
  )
}