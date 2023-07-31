export default function UserProfile({ params }: any) {
  return (
    <div>
      <h1>Profile</h1>
      <hr />
      <p className="text-4xl">Profile page</p>
      <span className="text-orange-500">{params.id}</span>
    </div>
  );
}
