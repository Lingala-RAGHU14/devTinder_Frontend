
const Card = ({user}) => {
  console.log(user)
  const {photoUrl, firstName, about, age, gender, lastName} = user
    return  (
        <div className="card bg-base-300 w-96 shadow-sm">
  <figure>
    <img
      src={photoUrl}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName  +  " " + lastName}</h2>
    <p>{age}, {gender}</p> 
    <p>{about}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-secondary ">Interest</button>
      <button className="btn btn-primary ">Ignore</button>
    </div>
  </div>
</div>
    )
}

export default Card;