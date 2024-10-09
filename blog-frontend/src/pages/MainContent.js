const MainContent = () => {
    return (
      <main className="flex-1 p-8">
        <section>
          <h1 className="text-4xl font-bold mb-4">Get started with Tailwind CSS</h1>
          <p className="text-lg mb-6">
            Tailwind CSS works by scanning all of your HTML files, JavaScript components, and other templates for class names, generating the corresponding styles, and then writing them to a static CSS file. It's fast, flexible, and reliable — with zero-runtime.
          </p>
        </section>
        <section className="mt-8">
          <h2 className="text-3xl font-bold mb-4">Installation</h2>
          <p className="text-lg mb-4">
            The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool. The CLI is also available as a standalone executable if you want to use it without installing Node.js.
          </p>
          <div className="bg-gray-800 text-white p-6 rounded-lg">
            <pre>
              <code>
                npm install -D tailwindcss<br />
                npx tailwindcss init
              </code>
            </pre>
          </div>
        </section>
      </main>
    );
  };
  export default MainContent