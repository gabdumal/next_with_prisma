"use client";

import User from "@/types/User";

interface CreateUserProps {}

export default function CreateUser({}: CreateUserProps) {
  const inputClasses = "p-2 border border-gray-300 rounded-md";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const validate = (data: { [k: string]: FormDataEntryValue }): User => {
      if (!data.name || !data.email) {
        throw new Error("Name and Email are required");
      }

      const validatedName = data.name.toString().trim();
      if (validatedName.length < 3) {
        throw new Error("Name must be at least 3 characters long");
      }

      const validatedEmail = data.email.toString().trim();
      if (validatedEmail.length < 3) {
        throw new Error("Email must be at least 3 characters long");
      }
      if (!validatedEmail.includes("@")) {
        throw new Error("Email must contain @");
      }

      return {
        name: validatedName,
        email: validatedEmail,
      };
    };

    const user = validate(data);
    console.log(user);
  };

  return (
    <section className="flex flex-col justify-center gap-4">
      <h1 className="text-2xl">Create User</h1>
      <form
        className="flex flex-col justify-center gap-3 text-lg min-w-96"
        onSubmit={handleSubmit}
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
