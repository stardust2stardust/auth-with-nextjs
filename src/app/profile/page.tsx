"use client";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div>
      <h1>Profile</h1>
      <hr />
      <p>Profile page</p>
      <hr />
      <button
        onClick={handleLogout}
        className="bg-blue-500 text-blue-50">
        Log out
      </button>
    </div>
  );
}
