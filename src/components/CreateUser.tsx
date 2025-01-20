"use client";

import { create as createUser } from "@/server/User";
import { useActionState, useEffect } from "react";

interface CreateUserProps {}

export default function CreateUser({}: CreateUserProps) {
  const inputClasses = "p-2 border border-gray-300 rounded-md";

  const [state, formAction, isPending] = useActionState(createUser, {
    name: "",
    email: "",
  });

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <section className="flex flex-col justify-center gap-4">
      <h1 className="text-2xl">Create User</h1>
      <form
        className="flex flex-col justify-center gap-3 text-lg min-w-96"
        action={formAction}
      >
        <div className="flex flex-col justify-center gap-2">
          <input
            name="name"
            type="text"
            placeholder="Name"
            className={inputClasses}
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className={inputClasses}
          />
        </div>
        <button
          type="submit"
          className="self-center w-max p-2 rounded-md bg-green-300"
        >
          Create User
        </button>
      </form>
    </section>
  );
}
