import { ModeToggle } from "@/components/ModeToggle";

function Settings() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-12">
      <h1 className="text-xl font-semibold">Settings page comming soon...</h1>
      <div className="flex items-center justify-center gap-4">
        <p>Change Theme</p>
        <ModeToggle />
      </div>
    </div>
  );
}

export default Settings;
