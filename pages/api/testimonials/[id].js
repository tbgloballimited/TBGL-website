import { testimonials } from '../../../data'

export default function handler({ query: { id } }, res) {
  const filtered = testimonials.filter((testimonial) => testimonial.id === id)

  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res
      .status(404)
      .json({ message: `Testimonial with the id of ${id} is not found` })
  }
}