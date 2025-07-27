const gigs = [
  { title: "I will design UI/UX for your app", seller: "cc__creative", price: "$120" },
  { title: "I will create a professional website", seller: "creativesmith99", price: "$120" },
]

const GigList = () => {
  return (
    <div className="mb-6">
      <h3 className="font-semibold mb-2">Gigs you may like</h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {gigs.map((gig, idx) => (
          <div key={idx} className="border p-3 rounded shadow-sm">
            <h4 className="font-medium">{gig.title}</h4>
            <p className="text-sm text-gray-500">{gig.seller}</p>
            <p className="font-bold">{gig.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GigList
