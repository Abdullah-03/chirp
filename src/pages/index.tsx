import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { api } from "~/utils/api";

export default function Home() {
  const { data } = api.posts.getAll.useQuery();
  const user = useUser();
  return (
    <>
      <div>
        {!user.isSignedIn && <SignInButton />}
        {!!user.isSignedIn && <SignOutButton />}
      </div>

      <div>
        {data?.map((post) => (
          <h1 key={post.id}>{post.content}</h1>
        ))}
      </div>
    </>
  );
}
