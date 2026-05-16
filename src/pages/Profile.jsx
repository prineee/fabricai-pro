import DashboardLayout from "../layouts/DashboardLayout";

const Profile = () => {
  const user = JSON.parse(
    localStorage.getItem("fabricaiUser")
  );

  return (
    <DashboardLayout>
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-8">
          Profile
        </h1>

        <div className="bg-zinc-900 p-8 rounded-2xl space-y-5">
          <div>
            <p className="text-zinc-400">
              Name
            </p>

            <h2 className="text-2xl">
              {user?.name}
            </h2>
          </div>

          <div>
            <p className="text-zinc-400">
              Email
            </p>

            <h2 className="text-2xl">
              {user?.email}
            </h2>
          </div>

          <div>
            <p className="text-zinc-400">
              Plan
            </p>

            <h2 className="text-2xl capitalize">
              {user?.plan}
            </h2>
          </div>

          <div>
            <p className="text-zinc-400">
              Role
            </p>

            <h2 className="text-2xl capitalize">
              {user?.role}
            </h2>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;