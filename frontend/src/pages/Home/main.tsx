/**
 * @page HomePage
 * @summary Welcome page for the application
 * @domain core
 * @type landing-page
 * @category public
 */
export const HomePage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">Sala de Aula</h1>
        <p className="mt-4 text-lg text-gray-600">Sistema de Gestão Acadêmica</p>
        <p className="mt-2 text-sm text-gray-500">
          Bem-vindo ao sistema de gerenciamento de notas e frequência
        </p>
      </div>
    </div>
  );
};

export default HomePage;
