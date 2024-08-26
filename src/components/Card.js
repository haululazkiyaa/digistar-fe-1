function Card(props) {
  const { item } = props;
  return (
    <div className="card">
      <h2>{item.title}</h2>
      <h3>{item.subTitle}</h3>
    </div>
  );
}

export default Card;
