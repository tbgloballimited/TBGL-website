import { services } from '../../../data'

export default function handler({ query: { id } }, res) {
  const filtered = services.filter((service) => service.id === id)

  if (filtered.length > 0) {
    res.status(200).json(filtered)
  } else {
    res
      .status(404)
      .json({ message: `Service with the id of ${id} is not found` })
  }
}