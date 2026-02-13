export function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8">
      <div className="mx-auto max-w-5xl px-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} KnowMyself. All rights reserved.
      </div>
    </footer>
  );
}
