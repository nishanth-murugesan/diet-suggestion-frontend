export function Food({ user, id }) {
  let title;
  if (id == 0) {
    title = <p>morning</p>;
  } else if (id == 1) {
    title = <p>Lunch</p>;
  } else {
    title = <p>Dinner</p>;
  }
  return (
    <div className="food-card">
      <div>{title}</div>
      <p>{user.title}</p>
      <p>ready in {user.readyInMinutes} minutes</p>
      <p>serving:{user.servings}</p>
    </div>
  );
}
