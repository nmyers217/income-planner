import { useSignal } from "@preact/signals";

export default function NameInput() {
  const name = useSignal("");
  return (
    <>
      <input
        name="first-name"
        value={name.value}
        placeholder="First Name"
        onInput={(e) => name.value = e.currentTarget.value}
      />

      <a href={`/greet/${name.value}`}>
        Greet {name.value}
      </a>
    </>
  );
}
