import { useNavigate } from 'react-router-dom';

/**
 * @page NotFoundPage
 * @summary 404 error page
 * @domain core
 * @type error-page
 * @category public
 */
export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900">404</h1>
        <p className="mt-4 text-xl text-gray-600">Página não encontrada</p>
        <button
          onClick={() => navigate('/')}
          className="mt-6 rounded-md bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          Voltar para o início
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
