import Card from './Card';
function MenuCard({ data }) {
  return (
    <div
      className="Menu"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }}
    >
      {data.map((item, i) => {
        return <Card src={item.img} number={item.number} title={item.title} />;
      })}
    </div>
  );
}

export default MenuCard;
