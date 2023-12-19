import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirectToSignIn } from "@clerk/nextjs";


export const GenerateReportLayout = async () => {
  const profile = await currentProfile();
  if (!profile) return redirectToSignIn();

  const servers = await db.server.findMany();
  const profiles = await db.profile.findMany();
  return (
    <div className="h-full">
      <h1 className="w-full text-center">
        Servers
      </h1>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Image</th>
          <th>Invite Code</th>
          <th>Profile ID</th>
          <th>Created At</th>
          <th>Updated At</th>
        </tr>
        {servers?.map((server) => 
          (
            <tr>
              <td>{server.id}</td>
              <td>{server.name}</td>
              <td><img src={server.imageUrl} className="h-24 w-24" /></td>
              <td>{server.inviteCode}</td>
              <td>{server.profileId}</td>
              <td>{server.createdAt.toString()}</td>
              <td>{server.updatedAt.toString()}</td>
            </tr>
          )
        )}
      </table>
      <h1 className="w-full text-center">
        Profiles
      </h1>
      <table>
        <tr>
          <th>ID</th>
          <th>User ID</th>
          <th>Name</th>
          <th>Image</th>
          <th>Email</th>
          <th>Created At</th>
          <th>Updated At</th>
        </tr>
        {profiles?.map((profile) => 
          (
            <tr>
              <td>{profile.id}</td>
              <td>{profile.userId}</td>
              <td>{profile.name}</td>
              <td><img src={profile.imageUrl} className="h-24 w-24" /></td>
              <td>{profile.email}</td>
              <td>{profile.createdAt.toString()}</td>
              <td>{profile.updatedAt.toString()}</td>
            </tr>
          )
        )}
      </table>
    </div>
  );
}

export default GenerateReportLayout;